import React from 'react';

function GameComponent({ score, element, isClickable, handleClick, handleToggleGame, isGameRunning }) {
  return (
    <div className="App">
      <h1 className="custom-heading">Deve Cüce Oyunu</h1>
      <h3>Puan: {score}</h3>
      <h4>{element}</h4>
      <div>
        <button onClick={() => handleClick('Deve')} disabled={!isClickable} className='btn btn-warning my-3'>Deve</button>
        <button onClick={() => handleClick('Cüce')} disabled={!isClickable} className='btn btn-warning my-3'>Cüce</button>
      </div>
      <div>
        <button onClick={handleToggleGame} className='btn btn-danger my-3'>{isGameRunning ? 'Oyunu Durdur' : 'Oyunu Başlat'}</button>
      </div>
    </div>
  );
}

export default GameComponent;
