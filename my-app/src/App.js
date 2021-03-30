
import './App.css';
import React, {useRef, useState} from 'react';
// want to use this here
import ShowValue from './show_value';

function App() {
  // we defined the initial values of everything
  const [largo, setLargo] = useState(null);
  const [ancho, setAncho] = useState(null);
  // 
  let [r, modifyResult] = useState(null);

const calcula = _ =>{
  modifyResult(largo.value * ancho.value);
  console.log(r);
}
  return (
    <div className="App">
    <input type="text" value={setLargo}/>
    <input type="text" value={setAncho}/>

    <button onClick={calcula}>Calcular</button>
  
    <ShowValue showMeTheValue={r}/>
    </div>
  );
}

export default App;
