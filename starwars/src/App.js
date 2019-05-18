import React, { Component } from "react";
import { CharacterList } from "./components/CharacterList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.apiUrl = "https://swapi.co/api";

    this.state = {
      next: "",
      starwarsChars: [],
      previous: "",
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
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList
          characters={this.state.starwarsChars}
          next={this.state.next}
          previous={this.state.previous}
          onGetPage={this.handleGetPage}
        />
      </div>
    );
  }
}

export default App;
