import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css'
import './styles1.css'
import './web.jpg'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "./Container";

class App extends Component {
  render() {
    return (
      <div >

          <Navbar/>

          <Container/>

          <Footer/>

      </div>
    );
  }
}


export default App;
