import React, { useState } from 'react';
import { Itarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4} from 'uuid';

interface props {
setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

function Formulario({ setTarefas }: props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [ 
              ...tarefasAntigas, 
             {
                tarefa,
                tempo,
                selecionado: false,
                completado: false,
                id: uuidv4()
             }
           ]
                    
        );
        setTarefa("");
        setTempo("00:00");
     }
    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer }>
            <label htmlFor="tarefa"> 
            Treinamento Azimute
            </label>
            <input 
            type="text"
            name="tarefa"
            id="tarefa"
            // adicionando state para a funcionalidade da minha tarefa em tela
            value={tarefa}
            onChange={evento => setTarefa(evento.target.value )}
            placeholder="O que você quer aprender"
            required
            />
        </div>
        <div className={style.inputContainer}>
            <label htmlFor="tempo">
             Tempo
             </label>
                <input 
                type="time"
                step="1"
                // adicionando state para a funcionalidade do meu tempo em tela
                name="tempo"
                value={tempo}
                onChange={evento => setTempo(evento.target.value)}
                id="tempo"
                min="00:00:00" 
                max="01:30:00"
                required
                />
          </div>
       <Botao type="submit">
        Adicionar
       </Botao>
      </form>
    )
}
  
export default Formulario;