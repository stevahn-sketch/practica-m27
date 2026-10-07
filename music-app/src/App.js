import './App.css';
import Header from './components/Header';
import Song from './components/Song';
import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    console.log("La app se a cargado correctamente.");
  }

  render() {
    return (
      <div className="App">
        <Header className="App-header"/>
        <Song className="App-song" titulo="Linewleum" artista="NOFX" duracion="3:19" />
        <Song className="App-song" titulo="Make it on my own" artista="Gvllow" duracion="2:47" />
        <Song className="App-song" titulo="Smile in your sleep" artista="Silverstain" duracion="3:16" />
      </div>
    );
  }
}
export default App;