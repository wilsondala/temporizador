import { useEffect, useState } from 'react';
import { tempoParaSegundo } from '../../common/utils/time';
import { Itarefa } from '../../types/tarefa';
import Botao from '../Botao';
import Relogio from '../Relogio';
import style from './Cronometro.module.scss';

interface Props {
   selecionado: Itarefa | undefined
   finalizarTarefa: () => void
}
export default function Cronometro({ selecionado, 
finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>(); 

//   USANDO useEffect PARA ATIVAR O MEU CRONOMETRO
   useEffect(() => {
      if(selecionado?.tempo) {
     setTempo(tempoParaSegundo(selecionado.tempo))
     }
   },[selecionado])

// funcão Cronometro
   function regressiva(contador: number = 0) {
      setTimeout(() => {
         if(contador > 0) {
            setTempo(contador - 1);
            return regressiva(contador - 1);
         }
         finalizarTarefa();
      }, 1000);

   }


    return (
        <div className={style.cronometro}>
           <p className={style.titulo}>Escolha um Programa e 
           inicie o cronômetro</p>
           <br/>
        <div className={style.relogioWrapper}>
        <Relogio tempo ={tempo} />
           </div>
           <br/>
           <Botao onClick={() => regressiva(tempo)}>
              Começar!
           </Botao>
       </div>
      )
  }