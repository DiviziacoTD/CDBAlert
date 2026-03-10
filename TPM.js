// ==UserScript==
// @name         CDB Alert
// @namespace    http://tampermonkey.net/
// @version      2.3
// @description  Alert Discord per timer CDB sul server "DiviziacoTD IT FoE Hub"
// @author       DiviziacoTD, Arvahall
// @match        https://*.forgeofempires.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function waitForFoE() {
  if (typeof FoEproxy === 'undefined' || typeof GuildFights === 'undefined' || !GuildFights.MapData) {
    setTimeout(waitForFoE, 5000);
    return;
  }

'use strict';

  // ═══════════════════════════════════════════════════════════════════════════
  // CONFIGURAZIONE UTENTE
  // ═══════════════════════════════════════════════════════════════════════════

  // CONNESSIONE SERVER - Richiedi l'url a DiviziacoTD
  const WS_URL = 'INSERIREQUIURL';

  // TOKEN GILDA - Richiedi il token a DiviziacoTD
  const AUTH_TOKEN = 'INSERIREQUIILTOKEN'; 

  // SOGLIE ALERT - Notifiche inviate a questi secondi rimanenti (default: 3min, 1min, 30sec)
  // Numeri inferiori a 30 non verranno inviati al server e non saranno visibili su Discord
  const ALERT_THRESHOLDS = [180, 60, 30];

  // ═══════════════════════════════════════════════════════════════════════════
  // NON MODIFICARE SOTTO QUESTA RIGA
  // ═══════════════════════════════════════════════════════════════════════════

  const sentAlerts = new Map();
  let ws = null;
  let wsReady = false;
  let lastProvinces = [];

  function connectWebSocket() {
    try {
      ws = new WebSocket(WS_URL);
    } catch (e) {
      console.warn('[CDB] Impossibile connettersi a CDB Alert. Riprovo tra 10s...');
      setTimeout(connectWebSocket, 10000);
      return;
    }

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: 'auth',
        token: AUTH_TOKEN
      }));
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.type === 'auth_success') {
          wsReady = true;
          console.log(`[CDB] ✅ Connesso al bot Discord - Gilda: ${msg.guild_name}`);
          checkTimers(); 
        }
      } catch (e) {}
    };

    ws.onclose = () => {
      wsReady = false;
      console.log('[CDB] 🔴 Disconnesso. Riconnessione tra 10s...');
      setTimeout(connectWebSocket, 10000);
    };

    ws.onerror = () => { wsReady = false; };
  }

  function getAdjacentToOwnSectors(provinces) {
    const myParticipantId = GuildFights.MapData.battlegroundParticipants
      .find(p => p.clan.id === ExtGuildID)?.participantId;

    if (!myParticipantId) return [];

    const myProvinceIds = new Set(
      provinces.filter(p => p.ownerId === myParticipantId).map(p => p.id)
    );

    const provinceData = ProvinceMap.ProvinceData();
    const adjacentIds = new Set();

    myProvinceIds.forEach(myId => {
      const connections = provinceData.find(p => p.id === myId)?.connections || [];
      connections.forEach(connId => {
        if (!myProvinceIds.has(connId)) adjacentIds.add(connId);
      });
    });

    return provinces.filter(p => adjacentIds.has(p.id) && p.lockedUntil);
  }

  function checkTimers() {
    if (!wsReady || !lastProvinces.length) return;

    const adjacent = getAdjacentToOwnSectors(lastProvinces);
    const now = Math.floor(Date.now() / 1000);

    adjacent.forEach(province => {
      const secondsLeft = province.lockedUntil - now;
      if (secondsLeft < 0) return;

      const name = province.title || String(province.id);

      for (const threshold of ALERT_THRESHOLDS) {
        if (secondsLeft > threshold) continue;

        const key = `${name}-${threshold}`;
        if (sentAlerts.has(key)) continue;

        sentAlerts.set(key, Date.now());

        ws.send(JSON.stringify({
          type: 'timer_alert',
          guild_id: ExtGuildID,
          sectorName: name,
          secondsLeft: threshold
        }));

        break;
      }
    });
  }

  function handleBattleground(data) {
    try {
      const provinces = data.responseData.map.provinces;
      if (!provinces) return;

      lastProvinces = provinces;

      const adjacent = getAdjacentToOwnSectors(provinces);
      console.log(`[CDB] 🗺️ ${provinces.length} settori | ${adjacent.length} adiacenti monitorati`);

      checkTimers();
    } catch (e) {
      console.warn('[CDB] Errore parsing dati:', e);
    }
  }

  setInterval(checkTimers, 1000);

  FoEproxy.addHandler('GuildBattlegroundService', 'getBattleground', handleBattleground);

  console.log('[CDB] 🚀 Script avviato');

  connectWebSocket();

  window.gbgMonitorStop = function () {
    FoEproxy.removeHandler('GuildBattlegroundService', 'getBattleground', handleBattleground);
    if (ws) ws.close();
    console.log('[CDB] 🛑 Fermato manualmente');
  };

})();
