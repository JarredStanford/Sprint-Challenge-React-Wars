import React, { Component } from "react";
import CharacterList from "./components/CharacterList";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/?page=");
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
          starwarsChars: data.results
        });
        /*Stretch attempt
        if (data.next !== null) {
          return this.getCharacters(data.next)
          I got this to make an array for each of the pages. But it would just reset the state to the new page.
          I tried many different ways but I didn't get there. I think I was getting close but deleted all the code instead
          of commenting it out. oops!
          */
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  /*Stretch attempt
   */
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characters={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
