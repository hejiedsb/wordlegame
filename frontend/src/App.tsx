import { useState } from 'react';
import './App.css'
import Board from './Board.tsx';
import Keyboard from './Keyboard.tsx';
import { useEffect } from 'react';
// import axios from "axios"; //导入存在问题，暂时注释掉

function App() {
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    // const url =`https://wordle.geek-tech.group/api/wordle/${formattedDate}`
    const url =`api/wordle/${formattedDate}`
    fetch(url)
   .then(response => response.json())
   .then(responseData => {
     console.log("今日答案", responseData);
     // 将data转换为大写并保存到状态
    //  if (Array.isArray(responseData)) {
    //    const uppercaseData = responseData.map(word => word.toUpperCase());
    //    setData(uppercaseData);
    //  } else if (typeof responseData === 'string') {
    //    setData([responseData.toUpperCase()]);
    //    console.log("今日答案", [responseData.toUpperCase()]);
    //  }
    if(responseData && responseData.solution){
      setData([responseData.solution.toUpperCase()]);
      console.log("今日答案", [responseData.solution.toUpperCase()]);
    }
   })
   .catch(error => console.error('Error fetching data:', error))
  }, []) //发送GET请求失败
  const [keyStatuses, setKeyStatuses] = useState({});
  const [currentGuess, setCurrentGuess] = useState('');;
  const [data, setData] = useState<string[] | null>(null);
  const [guesses, setGuesses] = useState<string[]>([]);
  
  // const handleKeyPress = (key) => {
  //   console.log('Key pressed:', key);
  //   if (key.length === 1) {
  //     // 添加字母到当前猜测
  //     if (currentGuess.length < 5) {
  //       setCurrentGuess(prev => prev + key);
  //     }
  //   } else if (key === 'BACKSPACE') {
  //     // 删除最后一个字母
  //     setCurrentGuess(prev => prev.slice(0, -1));
  //   } else if (key === 'ENTER') {
  //     // 提交猜测
  //     if (currentGuess.length === 5) {
  //       console.log('Submitted guess:', currentGuess);
  //       // 添加验证逻辑 - 将当前猜测转为大写进行比较
  //       const upperGuess = currentGuess.toUpperCase();
  //       if (data && data.includes(upperGuess)) {
  //         alert('Congratulations! You guessed the word!');
  //       } else {
  //         alert('Sorry, that is not the word. Try again!');
  //       }
  //       setCurrentGuess('');


  //     } else {
  //       alert('Guess must be 5 letters long.');
  //     }
  //   }
  // };
  const handleKeyPress = (key: string) => {
  if (key.length === 1) {
    if (currentGuess.length < 5) {
      setCurrentGuess(prev => prev + key);
    }
  } else if (key === 'BACKSPACE') {
    setCurrentGuess(prev => prev.slice(0, -1));
  } else if (key === 'ENTER') {
    if (currentGuess.length === 5) {
      const upperGuess = currentGuess.toUpperCase();

      if (data && data.includes(upperGuess)) {
        alert('Congratulations! You guessed the word!');
      } else {
        alert('Sorry, that is not the word. Try again!');
      }


      setGuesses(prev => [...prev, upperGuess]);

      setCurrentGuess('');
    } else {
      alert('Guess must be 5 letters long.');
    }
  }
};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Game</h1>
        <p>Welcome to Wordle! Guess the 5-letter word.</p>
        <p>Current guess: {currentGuess}</p>
      </header>
      <main>
        {/* <Board currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} /> */}
        <Board guesses={guesses} currentGuess={currentGuess} />
        <div className='board'></div>
        <Keyboard keyStatuses={keyStatuses} onKeyPress={handleKeyPress}/>
      </main>
    </div>
  )
}

export default App
