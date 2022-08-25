import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';


function App() {
  return (
    <div className={style.AppStyle}>
  {/* renderizar o projeto  */}
    <Formulario />
    <Lista />
    </div>
  );
}

export default App;
