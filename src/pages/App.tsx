import React, { useState} from 'react';
import  Cronometro  from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Itarefa } from '../types/tarefa';
import style from './App.module.scss';


function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([])
  ;
  const [selecinado, setSelecionado] = useState<Itarefa>();

function selecionaTarefa(tarefaSelecionado: Itarefa) {
   setSelecionado(tarefaSelecionado);
   setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
    ...tarefa,
    selecionado: tarefa.id === tarefaSelecionado.id ? true : false
   })));
}

function finalizarTarefa() {
  if(selecinado) {
    setSelecionado(undefined);
    setTarefas(tarefasAnteriores => 
      tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecinado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
  }

}

  return (
    <div className={style.AppStyle}>
  {/* renderizar o projeto  */}
    <Formulario  setTarefas={setTarefas}/>
    <Lista 
    tarefas={tarefas}
    selecionaTarefa={selecionaTarefa}
    />
    <Cronometro selecionado={selecinado}
    finalizarTarefa={finalizarTarefa}
    />
    </div>
  );
}

export default App;
