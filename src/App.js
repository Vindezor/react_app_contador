import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import freeCodeCampLogo from './images/af-logo.png'
import { useState } from 'react';

function App() {

  const [numeroClicks, setNumeroClicks] = useState(1000000);

  const manejarClick = () => {
    setNumeroClicks(numeroClicks + 1);
  };

  const reiniciarContador = () => {
    setNumeroClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numeroClicks={numeroClicks}/>
        <div className='contenedor-botones'>
          <Boton
            texto='Click'
            esBotonDeClick={true}
            manejarClick={manejarClick}/>
          <Boton
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClick={reiniciarContador}/>
        </div>
      </div>
    </div>
  );
}

export default App;
