import React, { useState } from 'react';
import Header from './components/Header/Header';
import TiposComprobante from './components/TiposComprobante/TiposComprobante';
import Comprobantes from './components/Comprobantes/Comprobantes';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [comprobantes, setComprobantes] = useState([]);

  return (
    <>
      <div className="container">
        <Header />
        <TiposComprobante setComprobantes={setComprobantes} />
        <Comprobantes comprobantesFiltrados={comprobantes} />
        <Footer />
      </div>
    </>
  );
};

export default App;
