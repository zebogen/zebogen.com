import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ConwayJs from './conway';

const ConwaysGame = () => {
  const canvas = useRef(null);
  const game = useRef(null);
  const [randomize, setRandomize] = useState(true);

  useEffect(() => {
    game.current = new ConwayJs(canvas.current);
    game.current.init();
  }, []);

  const onStart = () => {
    game.current.startRun();
  };

  const onStop = () => {
    game.current.stopRun();
  };

  const onReset = () => {
    game.current.reset();
  };

  const onRandomizeChange = (e) => {
    setRandomize(e.target.checked);
  };

  return (
    <Container>
      <h1>Conway's Game of Life</h1>
      <div>
        <canvas ref={canvas} id="root" width="900" height="600"></canvas>
        <div>
          <ActionButton id="start" onClick={onStart}>Start</ActionButton>
          <ActionButton id="stop" onClick={onStop}>Stop</ActionButton>
          <ActionButton id="reset" onClick={onReset}>Reset</ActionButton>
          <div>
            <input type="checkbox" id="randomize" checked={randomize} onChange={onRandomizeChange}></input> Randomize
            <div id="randomizer-fields">
              Start with <input type="number" min="0" max="100" id="randomizer-number" defaultValue="10" size="2"></input>% of cells alive
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
};

const Container = styled.div`
  text-align: center;

  canvas {
    border: 1px solid lightgray;
  }
`;

const ActionButton = styled.button`
  margin-top: 10px;
`;

export default ConwaysGame;
