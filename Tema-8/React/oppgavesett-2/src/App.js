// Linker til Scrimba:
// Oppgave 1: https://scrimba.com/c/cg3gPQUG
// Oppgave 2: https://scrimba.com/c/cZWMJyh8
// Oppgave 3: https://scrimba.com/c/cKwZqqtQ
// Oppgave 4: https://scrimba.com/c/cpqgW3fW
// Oppgave 5: https://scrimba.com/c/c2LJBLCr
// Oppgave 6: https://scrimba.com/c/cEw7B4h2

import React from 'react';
import Opg1 from "./components/oppgave-1/Opg1"
import Opg2 from "./components/oppgave-2/Opg2"
import Opg3 from "./components/oppgave-3/Opg3"
import Opg4 from "./components/oppgave-4/Opg4"
import Opg5 from "./components/oppgave-5/Opg5"
import Opg6 from "./components/oppgave-6/Opg6"

import './App.css';

function App() {
  return (
    <div>
      <h2>Oppgavesett 2</h2>
        <p className="opgNum">Oppgave 1:</p>
        <div>
          <Opg1 />
        </div>
        <p className="opgNum">Oppgave 2:</p>
        <div>
          <Opg2 />
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
        <p className="opgNum">Oppgave 6:</p>
        <div>
          <Opg6 />
        </div>
    </div>
  )
}
export default App;
