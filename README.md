# 30 giorni per me · Soft Rose

**Versione 2.0** – app per iPhone (PWA): si installa dalla schermata Home, si apre a tutto schermo e funziona offline.

## Novità della 2.0

- Icona per iPhone (prima mancava la cartella `icons/` nel repository)
- Aggiornamenti automatici: non serve più `?v=` nell'indirizzo
- Corretto “Come ti senti oggi?” che non salvava la scelta
- Home “Oggi” con pasti da spuntare, acqua, stato del movimento e ultimo peso
- Calendario con giorni della settimana, date reali e giorno di oggi evidenziato
- Menù per settimana con data reale e totale kcal/proteine
- Timer di recupero 60/90 s e “ultima volta” per i pesi degli esercizi
- Grafici di peso, vita, dolore ed energia
- Profilo modificabile (peso di partenza e obiettivo)
- Lista spesa condivisibile (solo ciò che manca) e backup con il foglio Condividi di iOS
- Fine dei 30 giorni: pulsante per iniziare un nuovo ciclo mantenendo il diario
- Rifiniture iPhone: aree sicure del notch, niente zoom sui campi, pulsanti più grandi

I dati salvati con la versione precedente restano (stessa chiave di salvataggio).

PWA statica, mobile-first, in italiano. Nessun server, account o build necessario.

## Pubblicazione con GitHub Pages

1. Crea un repository pubblico su GitHub (es. `30-giorni-per-me`).
2. Carica **il contenuto di questa cartella nella radice del repository**, non la cartella contenitore. Devono comparire `index.html`, `app.js`, `style.css`, `sw.js`, `manifest.webmanifest` e la cartella `icons/` (importante: senza, l'icona su iPhone non compare).
3. Apri **Settings → Pages**.
4. In **Build and deployment**, scegli **Deploy from a branch**; seleziona `main` e `/ (root)`; salva.
5. Attendi la pubblicazione e apri `https://TUO-USERNAME.github.io/30-giorni-per-me/` (sostituisci il tuo username e il nome del repository).
6. Su iPhone, apri l'URL in Safari, premi Condividi e **Aggiungi alla schermata Home**.

I riferimenti ai file sono relativi, quindi funzionano anche con GitHub Pages nei repository di progetto. Il service worker rende disponibile l'app offline dopo il primo caricamento completo.

## Test locale

Per testare la PWA con il service worker usa un server locale, non `file://`. Esempio: `python -m http.server 8000`, quindi visita `http://localhost:8000`.

## Dati e privacy

I dati vengono salvati in `localStorage` nel browser corrente e non sono sincronizzati tra dispositivi. Esporta periodicamente il backup JSON dal Diario. Un repository GitHub pubblico contiene il codice e il piano di esempio, **non** i dati del tuo diario. Evita di inserire dati personali direttamente nei file pubblicati.

## Avvertenza

Il piano è orientativo e non sostituisce indicazioni cliniche o nutrizionali personalizzate. Adatta movimento e alimentazione alle indicazioni dei professionisti che seguono endometriosi e psoriasi.
