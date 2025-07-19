# i18next React Example

A simple React app demonstrating internationalization (i18n) using [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com/). This project supports multiple languages, automatic language detection, and dynamic translation loading.

## Features

- Language switching with a UI selector
- Automatic browser language detection
- Dynamic loading of translation files
- Pluralization and variable interpolation
- Component-based translations with `<Trans />`

## Technologies Used

- React
- i18next
- react-i18next
- i18next-browser-languagedetector
- i18next-http-backend

## Getting Started

### 1. Install dependencies

```sh
npm install
```

### 2. Run the app

```sh
npm run dev
```

### 3. Open in your browser

Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

- `src/i18n.js` – i18next configuration
- `src/App.jsx` – Main app component using translations
- `src/components/LanguageSelector.jsx` – Language switcher UI
- `public/locales/en/translation.json` – English translations
- `public/locales/hi/translation.json` – Hindi translations

## Example Translation File

**public/locales/en/translation.json**
```json
{
  "greeting": "Hello!",
  "description": {
    "line1": "Welcome to <1>{{channel}}</1> channel.",
    "line2": "Enjoy learning!"
  }
}