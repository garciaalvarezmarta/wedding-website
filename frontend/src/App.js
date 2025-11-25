import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1 className="names">Sara &amp; Giuseppe</h1>
        <p className="phrase">Dos almas, un destino — acompáñanos a celebrar nuestro amor.</p>

        <div className="info">
          <div className="item">
            <span className="icon">📍</span>
            <div>
              <h3>Dirección</h3>
              <p>Cascina del Sole, Via della Torre 12, 00100 Roma</p>
            </div>
          </div>

          <div className="item">
            <span className="icon">🕒</span>
            <div>
              <h3>Horarios</h3>
              <p>Ceremonia: 15:00 — Recepción: 17:00</p>
            </div>
          </div>
        </div>

        <p className="footer">Esperamos celebrar este día contigo.</p>
      </div>
    </div>
  );
}

export default App;
