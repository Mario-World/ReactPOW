# CurrencyChanger

A simple currency converter web app built with [React](https://react.dev/) and [Vite](https://vitejs.dev/). It uses the [Frankfurter API](https://www.frankfurter.app/) to fetch currency rates and supports favorite currencies for quick access.

## Features

- Convert between multiple currencies
- Swap source and target currencies
- Mark currencies as favorites for easy selection
- Responsive UI with Tailwind CSS

## Getting Started

### Install dependencies

```sh
npm install
```

### Run in development mode

```sh
npm run dev
```

### Build for production

```sh
npm run build
```

## Project Structure

- [`src/App.jsx`](src/App.jsx): Main app component
- [`src/components/currency-converter.jsx`](src/components/currency-converter.jsx): Currency converter logic and UI
- [`src/components/dropdown.jsx`](src/components/dropdown.jsx): Currency dropdown with favorites
- [`src/main.jsx`](src/main.jsx): Entry point
- [`src/App.css`](src/App.css): Tailwind CSS import

## API

- Currency list: `https://api.frankfurter.app/currencies`
- Conversion: `https://api.frankfurter.app/latest?amount={amount}&from={from}&to={to}`

##