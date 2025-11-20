# Webshop-Stickerei 

Ein kleiner, liebevoll gestalteter Demo-Webshop für handgefertigte Stickereien.  
Ziel des Projekts ist es, die eigene Stickkunst ansprechend zu präsentieren und die Basis für einen späteren echten Webshop zu legen.


## Features

- Startseite mit Logo, Claim und einladendem Hero-Bereich  
- Abschnitt „Read more“, der per Sprunglink (`#modern-footer-text`) zu den Details scrollt  
- Vorstellung der Stickarbeiten mit Icons (Schere, Nadel, Palette, etc.)  
- Responsives Layout mit Bootstrap-Klassen (`d-flex`, `col-…`, Buttons usw.)  
- Farblich abgestimmtes Design in warmen Stickerei-Farben  
- Platzhalter für **Login**- und **Sign-up**-Buttons im Header

---

## Tech-Stack

- **HTML5** – statische Seiten (`index.html`, `readmore.html`)
- **CSS3** – eigenes Styling in `style.css`
- **JavaScript** – Skript-Datei `script.js` für spätere Interaktionen
- **Bootstrap 5** (über CDN eingebunden) für Grid & Layout

---

## Projektstruktur

Grober Überblick über die wichtigen Dateien:

- `index.html` – Startseite mit Header, Navigation, Hero-Text und Teaser
- `readmore.html` – Seite/Abschnitt mit mehr Informationen zur Stickerei  
  (ehemals `about.html`, umbenannt)
- `style.css` – Custom Styles (Farben, Typografie, Abstände, Icons, Layout)
- `script.js` – JavaScript-Datei für zukünftige Funktionen
- `img/` – Logo und Bilder für den Webshop

---

## Lokal starten

Du brauchst keinen Server und kein Backend – es ist ein reines Frontend-Projekt.

1. Repository klonen:

   ```bash
   git clone https://github.com/FabianSarwas/Webshop-Stickerei.git
   cd Webshop-Stickerei
