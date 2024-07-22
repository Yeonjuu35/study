import React from 'react';
import './App.css';
import list from './json/list.json';

function hovereffect(num) {
  document.querySelectorAll(".list li").item(num).classList.add('red');
}

const leaveeffect = (num) => {
  document.querySelectorAll(".list li").item(num).classList.remove('red');
}

function App() {
  return (
    <div className="list">
      {
        list.notice.map((listvalue, idx) => {
          return (
            <li key={idx} onMouseEnter={() => { hovereffect(idx) }}
                onMouseLeave={() => { leaveeffect(idx) }}>
              {
                listvalue.split("|").map((v, i) => {
                  return (
                    i === 0 ? <h2 key={i}>{v}</h2> : <span key={i}>{v}</span>
                  )
                })
              }
            </li>
          )
        })
      }
      <li></li>
    </div>
  );
}

export default App;