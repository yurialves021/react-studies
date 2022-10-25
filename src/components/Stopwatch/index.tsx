import style from './Stopwatch.module.scss';
import Button from "../Button";
import Watch from "./Watch";

const Stopwatch = () => {
    return (<div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
        <div className={style.relogioWrapper}>
            <Watch />
        </div>
        <Button>
            Começar!
        </Button>
    </div>)

}

export default Stopwatch;