import React, { Component } from 'react';

import Header from './components/Header';
import Slider from './components/Slider/Slider';
import Content from './components/Content';
import Footer from './components/Footer';
import data from './data.json';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header data={data}/>
        <Slider data={data}/>
        <Content data={data}/>
        <Footer data={data}/>
      </div>
    );
  }
}

export default App;
