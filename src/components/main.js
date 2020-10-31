import React, { Component } from 'react'
import MainHeader from './main-header';
import MainNews from './main-news';

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
