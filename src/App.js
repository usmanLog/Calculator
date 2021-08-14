import React from "react";
import { Display } from "./components/Display";
import { Numbers } from "./components/Numbers";
import { Operators } from "./components/Operators";

function App() {
  return (
    <main className="App">
      <section className="wrapper">
        <Display />
        <div className="grid-wrapper">
          <Operators />
          <Numbers />
        </div>
      </section>
      <p className="credits">
        Coded By{" "}
        <a
          href="https://github.com/usmanLog/Calculator"
          target="_blank"
          rel="noreferrer"
        >
          Usman
        </a>
      </p>
    </main>
  );
}

export default App;
