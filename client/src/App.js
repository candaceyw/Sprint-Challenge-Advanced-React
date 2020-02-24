import React, { Component } from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard'

class App extends Component {
  constructor() {
    super();
    this.state ={
        players: [],
    }
  }


  fetchPlayer = () => {
    fetch("http://localhost:5000/api/players")
      .then(res => {
        return res.json();
      })
      .then(results => {
        this.setState({ players: results });
        console.log(results);
      })
      .catch(error => {
        console.log("No players to show", error);
      });
  };

  componentDidMount() {
    console.log("mounted");
    this.fetchPlayer();
  }

  render() {
  return (
    <div className="App">
      <h1 className="playerHeader">Women's World Cup players</h1>

      {this.state.players.map(player => {
              return (
                <PlayerCard
                  name={player.name}
                  country={player.country}
                  searches={player.searches}
                />
              );
            })}
    </div>
  );
}
}
export default App;
