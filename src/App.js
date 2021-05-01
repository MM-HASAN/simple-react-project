import React, { useState, useEffect } from "react";
import "./App.css";
import Player_data from "./Data/Player_data.json";
import Players from "./Components/Player/Players";
import SelectedPlayer from "./Components/SelectedPlayer/SelectedPlayer";

function App() {
  const [players, setplayer] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    setplayer(Player_data);
  }, []);

  const addPlayer = (player) => {
    const playerAdded = [...selectedPlayers, player];
    setSelectedPlayers(playerAdded);
  };

  return (
    <div>
      <header className="App-header">
        <h1>Real Madrid squad - Real Madrid CF</h1>
        <p> Total player : {players.length}</p>
        <SelectedPlayer selectedPlayer={selectedPlayers}></SelectedPlayer>

        {players.map((player) => (
          <Players
            player={player}
            key={player.id}
            addPlayer={addPlayer}
          ></Players>
        ))}
      </header>
    </div>
  );
}

export default App;
