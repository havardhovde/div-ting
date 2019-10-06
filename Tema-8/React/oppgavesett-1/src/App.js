// Linker til Scrimba:
// Oppgave 1 og 2: https://scrimba.com/c/c6g8Rktp
// Oppgave 3: https://scrimba.com/c/cbNrnrhb
// Oppgave 4: https://scrimba.com/c/cqKnmRtG
// Oppgave 5: https://scrimba.com/c/cevzV4UR

import React from 'react';
import Opg1og2 from "./components/oppgave-1-og-2/Opg1og2"
import Opg3 from "./components/oppgave-3/Opg3"
import Opg4 from "./components/oppgave-4/Opg4"
import Opg5 from "./components/oppgave-5/Opg5"
import './App.css';


function App() {
  return (
    <div>
      <h2>Oppgavesett 1</h2>
      <p className="opgNum">Oppgave 1 og 2:</p>
      <div className="opg1">
        <Opg1og2 />
      </div>
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
