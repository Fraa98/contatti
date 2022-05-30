import React from 'react';
import logo from './logo.svg';

import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { InserimentoComponente } from './componenti/InserimentoComponente';

import './App.css';
import { ElencoContattiComp } from './componenti/ElencoContattiComp';

function App() {
  return (
    <div className="App">
      <Container>
        <InserimentoComponente/>
        <ElencoContattiComp/>

      </Container>
     
    </div>
  );
}

export default App;
