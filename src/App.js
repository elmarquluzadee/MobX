import './App.css';
import { observer, Observer } from 'mobx-react';
import { useState } from 'react';
import Count from './Count';

const App=observer ((data) =>{
console.log(data)
const [state,setState] = useState('Elmar')
  return (
    <div className="App">
      <header className="App-header">
    number: {data.store.count}
    <br />
    <Count/>
    <br />
    <button onClick={() => {data.store.dec()}} >Click and (-)</button>
    <br />
    <button onClick={() => {data.store.inc()}} >Click and (+)</button>
      </header>
    </div>
  );
}) 

export default App;
