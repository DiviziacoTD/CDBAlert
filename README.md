# CDB Alert - Notifiche CDB su Discord

Sistema di notifiche automatiche Discord per i timer dei Campi di Battaglia (CDB) di Forge of Empires.

## 📋 Cosa fa

CDB Alert monitora i timer dei settori del Campo di Battaglia e invia notifiche automatiche su Discord quando i settori stanno per aprirsi: i timer sono configurabili dall'utente.

## ⚙️ Requisiti

- [**FoE Helper**](https://foe-helper.com) installato e attivo
- Userscript manager: Tampermonkey (o Greasemonkey/Violentmonkey/Userscripts)
- Browser compatibile: Chrome, Firefox, Edge, Opera, Vivaldi, Safari
- Token univoco: Generato da DiviziacoTD
- Server Discord: Funziona unicamente su [DiviziacoTD's IT FoE Hub](https://discord.com/invite/J9eNv7gkXk) previa configurazione

## 🚀 Installazione

1. Installa [Tampermonkey](https://www.tampermonkey.net/) nel tuo browser
2. Apri il file [**TPM.js**](https://github.com/DiviziacoTD/CDBAlert/blob/main/TPM.js) da questo repository
3. Click su **Raw** → Tampermonkey rileverà automaticamente lo script
4. Click **Installa**
5. Ottieni il **token** da DiviziacoTD
6. Configura il token nello script (istruzioni nel file)
7. Configura i timer desiderati (opzionale, se diversi da quelli standard)

## 📖 Utilizzo

1. Apri Forge of Empires, aspetta 5 secondi, entra nei CDB, poi torna alla città ed entra di nuovo nei CDB
2. Devi avere Forge of Empires (no mobile app) aperto
3. Lo script si connette automaticamente al Bot Discord
4. Le notifiche Discord arriveranno nei canali configurati
5. Puoi disattivare in qualsiasi momento lo script dal menu Tampermonkey
6. Non è necessario avere Discord aperto
7. Non è necessario stare tutto il tempo sui CDB: puoi giocare qualsiasi contenuto!

## 📄 Documenti Legali

- [Termini e Condizioni](TERMS.md)
- [Privacy Policy](PRIVACY.md)

## 🔧 Risoluzione Problemi

**Lo script non si connette:**
- Verifica che FoE Helper sia aggiornato all'ultima versione
- Apri la console browser (F12) per visualizzare eventuali errori
- Richiedi supporto a DiviziacoTD allegando gli errori dalla console browser (F12)

**Le notifiche non arrivano:**
- Controlla che il bot sia online
- Verifica configurazione canale Discord con !status
- Assicurati di avere la scheda con Forge of Empires in primo piano

## 📞 Supporto

Server Discord: [**DiviziacoTD's IT FoE Hub**](https://discord.com/invite/J9eNv7gkXk)  

## 📜 Licenza

Distribuzione gratuita per uso personale. Redistribuzione commerciale vietata senza autorizzazione scritta da parte dell'Amministratore.

## 🚫 Disclaimer

CDB Alert **NON** è affiliato o sponsorizzato da InnoGames GmbH.  
Forge of Empires® è marchio registrato di InnoGames GmbH.
