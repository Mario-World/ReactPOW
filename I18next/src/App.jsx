import React from 'react';
import  './App.css';
import {Trans, useTranslation} from "react-i18next";
import LanguageSelector from './components/LanguageSelector';


const App = () => {
  const {t} = useTranslation();

  const {line1, line2} = t("description", {channel: "RoadsideCoder"});

  return (
    <div className = "container">
    <LanguageSelector />
    <h1> {t("greeting")}</h1>
  <span>
  <Trans 
  // i18nextKey = {"description.line1"}
  i18nextKey={line1}
  values={{
    channel: "CuriousEngineer",

  }}
  components ={{1: <b />}}
  ></Trans>
  </span>
  

    <span>{line2}</span>
    {/* <span>{t("greeting.key", "can't load ")} </span> */}
    </div>
  );
};

export default App