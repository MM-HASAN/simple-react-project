import React from "react";

const SelectedPlayer = (props) => {
  const playerSelected = props.selectedPlayer;
  let totalSalary = 0;
  for (let i = 0; i < playerSelected.length; i++) {
    const player = playerSelected[i];
    totalSalary = totalSalary + player.salary;
  }

  const selectedPlayerStyle = {
    backgroundColor: "blue",
    width: "90%",
    height: "auto",
    textAlign: "center",
    marginBottom: "10px",
    listStyle: "none",
  };

  const playerInfo = {
    backgroundColor: "tomato",
    padding: "20px",
  };

  const playerBudget = {
    backgroundColor: "#3490e3 ",
    padding: "20px",
    textTransform: "uppercase",
  };
  return (
    <div style={selectedPlayerStyle}>
      <div style={playerBudget}>
        <h4> selected player: {playerSelected.length}</h4>
        <h6> players total budget: USD $ {totalSalary}M</h6>
      </div>
      <div style={playerInfo}>
        <ul>
          {playerSelected.map((player) => (
            <li
              style={{
                listStyle: "none",
                color: "black",
                fontSize: "20px",
                textTransform: "uppercase",
              }}
            >
              Player name : {player.name} And Salary: in USD ${player.salary}M
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectedPlayer;
