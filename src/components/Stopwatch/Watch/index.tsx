import style from './Watch.module.scss';


interface Props {
  tempo: number | undefined
}

//passando um valor padrão no parametro tempo para não correr riscos do mesmo vier undefined e der problemas nos calculos 
export default function Watch({ tempo = 0 }: Props) {

  //utilizando o floor para que a divisão não me retorne um valor quebrado na conversão
  const minutos = Math.floor(tempo / 60);
  
  //utilizando o % para pegar apenas o resto da divisão por 60 para coletar os segundos
  const segundos = tempo % 60;

  //uma array para desestrutura o valor e coletar de forma independente
  //necessário injetar no tsconfig -  "downlevelIteration": true 
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');

  //utilizado o padStart para estipular uma cadeia minima de caracteres, caso não tenha 2 caracteres, o primeiro será por padrão 0
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
  
  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  )
}