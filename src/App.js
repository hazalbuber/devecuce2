import React, { useState, useEffect } from 'react';
import GameComponent from './GameComponent';   
import './index.css';

function App() {
  const [score, setScore] = useState(0); //Oyun puanını güncellemek için 
  const [element, setElement] = useState(''); //Deve ve Cüce elemanları güncellemek  için 
  const [timer, setTimer] = useState(null); //zamanlama
  const [isClickable, setIsClickable] = useState(true); //Button tıklanabilirlik durumu için 
  const [isGameRunning, setIsGameRunning] = useState(true); //Oyunu çalıştırma durumu için 

  //oyunun çalışma durumuna göre yapılcak olay. 
  //Eğer isGameRunning değeri true ise, oyun çalışıyor demektir; false ise oyunun durduğu anlamına gelir.
  useEffect(() => {
    if (isGameRunning) {
      startGame();
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isGameRunning]); 

  //Math.random sayesinde rastgale deve/cüce seçimi yapılıyor
  const generateNewElement = () => {
    return Math.random() < 0.5 ? 'Deve' : 'Cüce';
  };

  // Burda oyunu başlatır ve belirli aralıklarla(2 saniye) yeni eleman seçimi yapar.
  const startGame = () => {
    const id = setInterval(() => {
      const newElement = generateNewElement();
      setElement(newElement);
      setIsClickable(true);
    }, 2000);
    setTimer(id);
  };


  //kulanıcının cevabı kontrol edilir ve puan durumu gğncellenir
  const checkAnswer = (guess) => {
    const correctAnswer = generateNewElement();
    if (guess === correctAnswer) {
      setScore(score + 1);
    } else {
      setScore(score > 0 ? score - 1 : 0);
    }
  };

    // Yeni oyun başlatır
  const startNewGame = () => {
    setIsClickable(false);
    startGame();
  };

    // Buton tıklanma işlemini kontrol eder
  const handleClick = (guess) => {
    if (!isClickable) return;
    clearInterval(timer);
    checkAnswer(guess);
    startNewGame();
  };


  // Oyunun durumunu değiştirir başlatır/durdurur
  const handleToggleGame = () => {
    setIsGameRunning(!isGameRunning);
  };


  return (
    <GameComponent
    score={score}
    element={element}
    isClickable={isClickable}
    handleClick={handleClick}
    handleToggleGame={handleToggleGame}
    isGameRunning={isGameRunning}
  />
  );
}

export default App;
