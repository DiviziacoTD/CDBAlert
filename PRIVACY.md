# INFORMATIVA SULLA PRIVACY
## CDB Alert
### (Conforme a GDPR e legge polacca UODO)

**Ultimo aggiornamento:** 7 marzo 2026  
**Amministratore dei dati**: DiviziacoTD, support@itfoehub.ovh

---

## 1. INFORMAZIONI GENERALI

1.1. La presente Informativa descrive come CDB Alert ("Sistema", "noi") raccoglie, utilizza e protegge i dati personali conformemente a:
- **Regolamento UE 2016/679 (GDPR)**
- **Ustawa o ochronie danych osobowych** (Legge polacca sulla protezione dati - UODO)
- **Ustawa o świadczeniu usług drogą elektroniczną** (Legge sulla prestazione di servizi elettronici)

1.2. Amministratore dei dati (Przetwarzający dane) e contatti:  
- Amministratore: DiviziacoTD  
- Email: support@itfoehub.ovh  
- Discord: [DiviziacoTD's IT FoE Hub](https://discord.com/invite/J9eNv7gkXk)  

---

## 2. DATI PERSONALI RACCOLTI

### 2.1 Dati raccolti automaticamente
- **Indirizzo IP**: per connessioni WebSocket (base giuridica: legittimo interesse - sicurezza)
- **ID Gilda**: identificatore univoco non personale
- **Timestamp**: orario attivazione servizio e comandi Discord
- **User agent browser**: informazioni tecniche

### 2.2 Dati di gioco intercettati (NON PERSONALI)
- I dati vengono intercettati da FoE Helper
- Timer settori CDB
- Nome settori
- Stato timer in secondi

### 2.3 Dati Discord 
- ID canale Discord 
- ID ruolo Discord (@mention)
- Username Discord 

### 2.4 Dati NON raccolti
NON raccogliamo né elaboriamo:
- Nome reale, email o dati anagrafici
- Password o credenziali di gioco
- Dati finanziari o di pagamento
- Cronologia di gioco completa
- Messaggi di chat o comunicazioni private
- Dati sensibili (Art. 9 GDPR): salute, religione, orientamento sessuale, etc.
- Qualsiasi altro dato al quale ha accesso FoE Helper

---

## 3. BASE GIURIDICA DEL TRATTAMENTO (Art. 6 GDPR)

Il trattamento si basa su:

**a) Consenso (Art. 6.1.a GDPR)**  
Installando lo script e connettendoti al WebSocket, fornisci consenso esplicito al trattamento.

**f) Legittimo interesse (Art. 6.1.f GDPR)**  
Per sicurezza del servizio, prevenzione abusi, limitazione connessioni.

---

## 4. FINALITÀ DEL TRATTAMENTO

I dati sono trattati ESCLUSIVAMENTE per:
- Generare e inviare notifiche Discord sui timer CDB, tramite token associato allo script fornito
- Identificare la Gilda, per inviare le notifiche al canale dedicato
- Prevenire alert duplicati 
- Limitare connessioni abusive 
- Garantire sicurezza e integrità del Sistema

**NON utilizziamo dati per marketing, profilazione o decisioni automatizzate.**

---

## 5. PERIODO DI CONSERVAZIONE (Art. 5.1.e GDPR)

- Cache alert duplicati: 10 secondi - Prevenzione spam
- Log connessioni WebSocket: Max 30 giorni - Sicurezza e debug
- Token univoco: Fino a revoca da parte dell'Amministratore del Servizio - Funzionamento servizio
- Dati sessione browser: Fino a chiusura browser - Memoria volatile

**Cancellazione automatica**: Il Sistema NON conserva storico permanente degli alert. Qualsiasi dato viene cancellato automaticamente in caso di riavvio manuale del Sistema.

---

## 6. DESTINATARI DEI DATI (Art. 13.1.e GDPR)

### 6.1 Trasferimento a terzi
I dati sono condivisi con:

**Discord Inc. (USA)**  
- Finalità: Invio notifiche tramite webhook
- Base giuridica: Clausole contrattuali standard UE, Art. 46 GDPR
- Garanzie: Discord è conforme a GDPR tramite meccanismi adeguati
- Ragioni: Raccolti automaticamente quando si effettua il login a Discord

### 6.2 Infrastruttura tecnica
Il Sistema utilizza:

**Server VPS in Polonia**  
- Ruolo: Infrastruttura di hosting controllata dall'Amministratore
- Ubicazione: Polonia (UE)
- Nota: Il provider VPS ha accesso potenziale solo a livello infrastrutturale (backup, manutenzione), non tratta attivamente i dati

### 6.3 NON condividiamo dati con
- Broker di dati o data aggregator
- Network pubblicitari
- Società di marketing
- Autorità governative (salvo obbligo legale)

---

## 7. TRASFERIMENTO EXTRA-UE (Art. 44-49 GDPR)

7.1. Discord Inc. ha sede negli USA. Il trasferimento è protetto tramite:
- **Clausole contrattuali standard** approvate dalla Commissione UE
- **Meccanismi di garanzia** equivalenti a GDPR

7.2. L'Utente può opporsi al trasferimento interrompendo immediatamente l'uso del Servizio.

7.3. L'Amministratore del Servizio non invia direttamente i dati a nessuno, Discord incluso, salvo obbligo legale.

---

## 8. SICUREZZA DEI DATI (Art. 32 GDPR)

### 8.1 Misure tecniche e organizzative
- Connessioni HTTPS/WSS sicure 
- Token univoci crittograficamente sicuri
- Rate limiting e validazione input
- Accesso ai log limitato agli Amministratori autorizzati
- Nessun backup dei dati utente

### 8.2 Limitazioni
NON possiamo garantire sicurezza assoluta. L'Utente deve:
- Mantenere segreto il token
- Usare connessioni HTTPS/WSS
- Non condividere le proprie credenziali con terzi

### 8.3 Violazione dati (Data breach)
In caso di violazione, notificheremo l'autorità UODO entro 72 ore (Art. 33 GDPR) e gli interessati se ad alto rischio (Art. 34 GDPR).

---

## 9. DIRITTI DELL'INTERESSATO (GDPR + UODO)

Hai diritto a:

### 9.1 Accesso (Art. 15 GDPR)
Ottenere copia dei dati trattati sul tuo token gilda.

### 9.2 Rettifica (Art. 16 GDPR)
Correggere dati inesatti o incompleti.

### 9.3 Cancellazione - "Diritto all'oblio" (Art. 17 GDPR)
Richiedere eliminazione immediata. **Conseguenza**: disconnessione permanente dal Servizio.

### 9.4 Limitazione del trattamento (Art. 18 GDPR)
Limitare elaborazione in caso di contestazione accuratezza o trattamento illecito.

### 9.5 Portabilità (Art. 20 GDPR)
Ricevere dati in formato strutturato, leggibile (JSON/CSV) e trasferirli ad altro titolare, se ancora disponibili nei log.

### 9.6 Opposizione (Art. 21 GDPR)
Opporti al trattamento basato su legittimo interesse (Art. 6.1.f).

### 9.7 Revoca consenso (Art. 7.3 GDPR)
Revocare consenso in qualsiasi momento. **Non pregiudica liceità trattamento ante-revoca**.

### 9.8 Non essere soggetto a decisioni automatizzate (Art. 22 GDPR)
Il Sistema NON effettua profilazione o decisioni automatizzate con effetti giuridici.

---

## 10. ESERCIZIO DEI DIRITTI

**Come esercitare i diritti:**

1. Richiesta tramite Discord: [DiviziacoTD's IT FoE Hub](https://discord.com/invite/J9eNv7gkXk)
2. Email: support@itfoehub.ovh

**Tempi di risposta**: Massimo **30 giorni** dalla richiesta (estendibili a 60 in casi complessi).

**Documentazione richiesta**: Potremmo richiedere verifica identità personale (Carta d'Identità) per prevenire accessi ai dati non autorizzati.

**Gratuità**: L'esercizio dei diritti è **GRATUITO**. 

**Abusi**: Richieste manifestamente infondate o eccessive comportaranno invece costi amministrativi a carico del richiedente.

**Effetti**: L'esercizio dei diritti comporta l'**IMMEDIATA** revoca del servizio ed esclusione dall'uso dello stesso nei confronti del richiedente.

---

## 11. RECLAMO ALL'AUTORITÀ COMPETENTE (Art. 77 GDPR)

Hai diritto di presentare reclamo a:

**Urząd Ochrony Danych Osobowych (UODO) - Polonia**  
ul. Stawki 2  
00-193 Warszawa, Polska  
Tel: +48 22 531 03 00  
Email: kancelaria@uodo.gov.pl  
Web: https://uodo.gov.pl

---

## 12. COOKIE E TECNOLOGIE DI TRACCIAMENTO

### 12.1 Script browser (TPM.js)
**NON utilizza cookie**. Opera solo in memoria volatile durante sessione di gioco.

Il servizio NON utilizza cookie di profilazione, analytics o tracciamento. Nessun consenso necessario.

---

## 13. MINORI (Art. 8 GDPR)

13.1. Il Servizio richiede età minima **16 anni** (età consenso digitale GDPR).

13.2. Se hai **meno di 16 anni**, è necessario il **consenso scritto dei genitori/tutori**. Dovrà essere richiesto a DiviziacoTD.

13.3. Non raccogliamo consapevolmente dati di minori senza consenso parentale. Se ne veniamo a conoscenza, cancelliamo immediatamente i dati e revocheremo il Token.

---

## 14. MODIFICHE ALL'INFORMATIVA

14.1. Ci riserviamo il diritto di modificare questa Informativa.

14.2. Modifiche sostanziali saranno comunicate tramite annuncio su Discord.

14.3. Data "Ultimo aggiornamento" sempre visibile in intestazione.

14.4. Uso continuato dopo modifiche costituisce accettazione.

---

## 15. LEGISLAZIONE APPLICABILE

Questa Informativa è conforme a:
- **Regolamento UE 2016/679 (GDPR)**
- **Ustawa z dnia 10 maja 2018 r. o ochronie danych osobowych** (Legge polacca protezione dati)
- **Ustawa z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną**
- **Dyrektywa 2002/58/WE (ePrivacy)**

---

**UTILIZZANDO CDB ALERT E TPM.JS, CONFERMI DI AVER LETTO E COMPRESO QUESTA INFORMATIVA SULLA PRIVACY E ACCONSENTI AL TRATTAMENTO DEI DATI COME DESCRITTO.**
