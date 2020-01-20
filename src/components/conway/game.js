import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ConwayJs from './conway';

const ConwaysGame = () => {
  const canvas = useRef(null);
  const game = useRef({});
  const [randomize, setRandomize] = useState(true);
  const [canvasSize, setCanvasSize] = useState({});

  useEffect(() => {
    game.current = new ConwayJs("root", { columnCount: 100, rowCount: 100 });
    setCanvasSize({ width: game.current.width, height: game.current.height });
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

  const onMouseDown = (e) => {
    if (game.current) {
      game.current.handleMousedown(e);
    }
  }

  const onMouseUp = (e) => {
    if (game.current) {
      game.current.handleMouseup(e);
    }
  }

  const onMouseMove = (e) => {
    if (game.current) {
      game.current.handleMousemove(e);
    }
  }

  const onRandomizeChange = (e) => {
    setRandomize(e.target.checked);
  };

  return (
    <Container>
      <h1>Conway's Game of Life</h1>
      <p>
        A JS implementation of <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life" target="_blank" rel="noopener noreferrer">Conway's Game of Life</a>.
      </p>
      <p>
        Click and drag to paint live cells. Press the Start button to start the game.
        <br />
        The Reset button randomizes when the corresponding option is checked or clears all cells.
      </p>
      <p>
        Code: <a href="https://github.com/zebogen/zebogen.com/blob/master/src/components/conway/game.js" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <div>
        <canvas
          ref={canvas}
          width={canvasSize.width}
          height={canvasSize.height}
          id="root"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        ></canvas>
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
