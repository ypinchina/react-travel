import React from "react";
import logo from "./logo.svg";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <header className={style["App-header"]}>
        <img src={logo} className={style["App-log"]} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          className={style["App-link"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
