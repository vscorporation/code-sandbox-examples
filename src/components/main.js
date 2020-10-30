import React, { Component } from 'react'
import MainHeader from './main-header';
import MainNews from './main-news';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Main extends Component {
    render() {
    return (
        <div>
            <MainHeader />
            <MainNews />
        </div>
    )
  }
}
  export default Main;
