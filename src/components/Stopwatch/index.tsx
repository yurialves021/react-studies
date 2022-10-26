import style from './Stopwatch.module.scss';
import Button from "../Button";
import { ITarefa } from '../../types/ITarefa';
import { tempoParaSegundos } from "../../common/utils/time";
import Watch from "./Watch";
import {useState, useEffect} from 'react';


interface Props {
  //necessário essa condição pois o selecionado sempre inicia como undefined
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  
  //Criei para decrementar o tempo do cronometro, por isso tipado com Number
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  },[selecionado]);

  //função para decrementar o relogio, recebe um tempo tipado para number e a cada 1 segundo 
  //verifica se o tempo é maior que 0, caso ainda seja subtrai - 1 ate chegar a 0, chegando a 0 chama a funçao para finalizar a tarefa
  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch tempo={tempo} />
      </div>
      <Button onClick={() => regressiva(tempo)}>
        Começar!
      </Button>
    </div>
  )
}