import React from 'react';
import { useState } from 'react';
import './App.css';

const options = [
  { name: 'Kő', value: 1, over: [2] },
  { name: 'Papir', value: 2, over: [3] },
  { name: 'Ollo', value: 3, over: [1] },
]
// const options = [
//   { name: 'Kő', value: 1, over: [2] },
//   { name: 'Papir', value: 2, over: [3,4] },
//   { name: 'Ollo', value: 3, over: [1] },
//   { name: 'ongyujto', value: 4, over: [1] },
// ]
// over : is there any stronger?

function App() {
  const [memo, setMemo] = useState([])

  const compareCh = (x) => {
    let randomNumber = Math.floor(Math.random() * options.length);
    x?.name && setMemo([...memo, { user: x, comp: options[randomNumber] }])
  };

  const stat = (xS) => {
    let f = []
    let s = []
    let t = []
    xS.forEach((x) => {
      if (x.user.value === x.comp.value) return t.push(1)
      x.comp.over.includes(x.user.value) ? f.push(1) : s.push(1)

    })
    return <>user nyert : {f.length} --- computer nyert : {s.length} --- dontetlen : {t.length}</>
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', margin: '20px' }}>
        {options.map((x, key) => {
          return <div onClick={() => {
            compareCh(x)
          }} className='DET' key={key}>
            {x.name}
          </div>
        })}
      </div>
      <div style={{ borderBottom: '1px solid black', paddingBottom: '10px' }}>
        {memo.length > 1 && stat(memo)}
      </div>
      <div>
        {memo.map((x, key) => {
          let final = x.comp.over.includes(x.user.value) ? 'nyert' : "vesztett"
          //override 
          if (x.user.value === x.comp.value) {
            final = 'dontetlen'
          }
          return <div style={{ marginTop: '10px' }} key={key}>{final}, user : {x.user.name}, comp : {x.comp.name} </div>
        })}
      </div>
    </div>
  );
}

export default App;
