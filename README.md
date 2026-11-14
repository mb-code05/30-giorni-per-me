# 30 giorni per me · Soft Rose

PWA statica, mobile-first, in italiano. Nessun server, account o build necessario.

## Pubblicazione con GitHub Pages

1. Crea un repository pubblico su GitHub (es. `30-giorni-per-me`).
2. Carica **il contenuto di questa cartella nella radice del repository**, non la cartella contenitore. Devono comparire `index.html`, `app.js`, `style.css`, `sw.js`, `manifest.webmanifest` e `icons/`.
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
