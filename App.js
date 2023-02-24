import React from 'react';
import Epg from './Epg';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Sastro PVR</h1>
      </header>
      <main>
        <Epg source="https://bit.ly/aqfadtvepg" />
      </main>
    </div>
  );
}

export default App;
