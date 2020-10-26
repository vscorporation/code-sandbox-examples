import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

const App = () => (
  

<Container className="wrapper">
<Row>
    <Col className="cell" lg={8}>sm=8</Col>
    <Col className="cell" lg={4}>sm=4</Col>
  </Row>
  <Row>
    <Col className="cell">
      <div>cacas</div>
    </Col>
    <Col className="cell" xs={6}>2 of 3 (wider)</Col>
    <Col className="cell">3 of 3</Col>
    <Col className="cell">3 of 3</Col>
  </Row>
  <Row>
    <Col className="cell">1 of 3</Col>
    <Col className="cell" xs={5}>2 of 3 (wider)</Col>
    <Col className="cell">3 of 3</Col>
  </Row>
</Container>
);

export default App;
