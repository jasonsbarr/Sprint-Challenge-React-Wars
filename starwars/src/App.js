import React, { Component } from "react";
import {
  CharacterList,
  CharacterListControls,
} from "./components/CharacterList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.apiUrl = "https://swapi.co/api";

    this.state = {
      next: null,
      starwarsChars: [],
      previous: null,
    };
  }

  componentDidMount() {
    this.getCharacters(`${this.apiUrl}/people/`);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          next: data.next,
          starwarsChars: data.results,
          previous: data.previous,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleGetPage = page => {
    this.getCharacters(this.state[page]);
    window.scrollTo(0, 0);
  };

  render() {
    const pages = {
      next: this.state.next,
      previous: this.state.previous,
    };

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div id="star-wars-characters" className="characters">
          <CharacterListControls onGetPage={this.handleGetPage} {...pages} />
          <CharacterList characters={this.state.starwarsChars} />
          <CharacterListControls onGetPage={this.handleGetPage} {...pages} />
        </div>
      </div>
    );
  }
}

export default App;
