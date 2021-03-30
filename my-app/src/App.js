
import './App.css';
import React, {useRef} from 'react';
function App() {
  const largo = useRef(null);
  const ancho = useRef(null);

const calcula = _ =>{
  const r = largo.current.value * ancho.current.value;
  console.log(r);
}
  return (
    <div className="App">
    <input type="text" ref="largo"/>
    <input type="text" ref="ancho"/>

    <button onClick={calcula}>Calcular</button>
    </div>
  );
}

export default App;
