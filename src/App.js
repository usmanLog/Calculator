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
    </main>
  );
}

export default App;
