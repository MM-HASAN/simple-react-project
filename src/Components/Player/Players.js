import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Css/Bootstrap.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Players = (props) => {
  const { name, image, salary } = props.player;
  const handleAddPlayer = props.addPlayer;

  const cardStyle = {
    width: "500px",
    height: "250px",
    marginBottom: "10px",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
  };
  return (
    <div>
      <Card style={cardStyle}>
        <img style={imageStyle} src={image} alt="players_image"></img>
        <div>
          <Card.Title style={{ color: "tomato" }}>
            <h1 style={{ fontSize: "30px" }}> players name: {name}</h1>
            <p> players salary: USD ${salary}M</p>
          </Card.Title>

          <Button
            onClick={() => handleAddPlayer(props.player)}
            variant="primary"
          >
            <FontAwesomeIcon icon={faPlusSquare} /> Add Player
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Players;
