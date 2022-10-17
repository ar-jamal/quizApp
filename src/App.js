import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './utils/Data';
import { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

function App() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [data, setData] = useState(Data);
  const [ind, setInd] = useState(0);
  const [optInd, setOptInd] = useState("");
  const last = ind === data.length - 1
  const submited = ind === data.length;
  const question = !submited ? data[ind] : { Opt: [], Q: 'Quiz Submitted' }
  const score = submited ? data.reduce((acc, que) => acc += que.isRight ? 1 : 0, 0) : 0

  const checkAns = (option) => {
    const isRight = question.correct === option;
    let copyData = [...data]
    console.log(question)
    copyData[ind] = { ...question, selected: option, isRight }
    setData(copyData)
  }

  function options() {
    const options = question.Opt ?? {}
    const selected = question.selected
    return Object.keys(options).map((option, i) => {
      return (<div className='Option-div'
        key={i}
        onClick={checkAns.bind(this, option)}
      >
        <Checkbox {...label} checked={selected === option} />
        <div className='Options' >{options[option]}</div>
      </div>)
    })
  };

  useEffect(() => {
    options();
  }, [ind])

  return (

    <div className="App">
      <div className='content'>
        <header className="App-header">
          <h2> Quiz App </h2>
        </header>
        {/* console.log(quizes) */}
        <div className='Body'>
          <div className='Quiz-div-main'>
            <p className='title'>{question.Q}</p>
            {
              !submited &&
              <div className='Options-div-main'>{options()}</div>
            }
            <div className='Score-div'>
              {
                submited &&
                <h1 style={{ color: 'black' }}>{"Your Score is:" + score}</h1>
              }
            </div>
          </div>
          {
            !submited &&
            <div className='btn-row'>
              {
                ind !== 0 ?
                  <button className='app-btn' onClick={() => setInd(i => i - 1)}>Previous |</button> :
                  <div className='app-btn' />
              }
              <h1 style={{ color: 'white' }}></h1>
              <button className='app-btn' onClick={() => setInd(i => submited ? i : i + 1)}>| {last ? "Submit" : "Next"}</button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
