import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Data, { Quizes } from './utils/Data';
import { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

function App() {
  const [data, setData] = useState(Data);
  const [ind, setInd] = useState(0);
  const arrLength = data[ind].Opt.length;
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const checkAns = (val) => {
    const isRight = data.filter((e) => e.Opt.length === val.length)
  }

  const options = () => {
    for (let i = 0; i < arrLength; i++) {
      return (
        <div>
          <Checkbox {...label} checked={false} />
          <div
            key={ind}
            onClick={(e) => checkAns(e.target.value)}
          >{data[ind].Opt[i]}
          </div>
        </div>
      )
    }
  };
  useEffect(() => {
    options();
  }, [ind])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
      </header>
      {/* console.log(quizes) */}
      <div className='Body'>
        <p style={{ color: "white" }}>{data["Q"]}</p>
        {options()};
      </div>
    </div>
  );
}

export default App;
