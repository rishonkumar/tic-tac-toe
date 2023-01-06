import React, { useState } from "react";

import Icon from "./Components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const gridElements = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    gridElements.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
      gridElements[0] === gridElements[1] &&
      gridElements[0] === gridElements[2] &&
      gridElements[0] !== "empty"
    ) {
      setWinMessage(`${gridElements[0]} won`);
    } else if (
      gridElements[3] !== "empty" &&
      gridElements[3] === gridElements[4] &&
      gridElements[4] === gridElements[5]
    ) {
      setWinMessage(`${gridElements[3]} won`);
    } else if (
      gridElements[6] !== "empty" &&
      gridElements[6] === gridElements[7] &&
      gridElements[7] === gridElements[8]
    ) {
      setWinMessage(`${gridElements[6]} won`);
    } else if (
      gridElements[0] !== "empty" &&
      gridElements[0] === gridElements[3] &&
      gridElements[3] === gridElements[6]
    ) {
      setWinMessage(`${gridElements[0]} won`);
    } else if (
      gridElements[1] !== "empty" &&
      gridElements[1] === gridElements[4] &&
      gridElements[4] === gridElements[7]
    ) {
      setWinMessage(`${gridElements[1]} won`);
    } else if (
      gridElements[2] !== "empty" &&
      gridElements[2] === gridElements[5] &&
      gridElements[5] === gridElements[8]
    ) {
      setWinMessage(`${gridElements[2]} won`);
    } else if (
      gridElements[0] !== "empty" &&
      gridElements[0] === gridElements[4] &&
      gridElements[4] === gridElements[8]
    ) {
      setWinMessage(`${gridElements[0]} won`);
    } else if (
      gridElements[2] !== "empty" &&
      gridElements[2] === gridElements[4] &&
      gridElements[4] === gridElements[6]
    ) {
      setWinMessage(`${gridElements[2]} won`);
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (gridElements[itemNumber] === "empty") {
      gridElements[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("FILLED TRY OTHER GRID", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                RESTART THE GAME!!! DRAW
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning ">
              {isCross ? "CROSS" : "CIRCLE"} TURNS
            </h1>
          )}
          <div className="grid">
            {gridElements.map((item, index) => (
              <Card color="success" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
