import React from 'react';
import Opg3 from "./components/oppgave-3/Opg3"
import Opg4 from "./components/oppgave-4/Opg4"
import Opg5 from "./components/oppgave-5/Opg5"
import './App.css';

function App() {
  return (
    <div>
    <h2>Oppgavesett 3</h2>
      <p className="opgNum">Oppgave 1 og 2 ligger i egen mappe.</p>
      <p className="opgNum">Oppgave 3:</p>
      <div>
        <Opg3 />
      </div>
      <p className="opgNum">Oppgave 4:</p>
      <div>
        <Opg4 />
      </div>
      <p className="opgNum">Oppgave 5:</p>
      <div>
        <Opg5 />
      </div>
  </div>
  );
}

export default App;
