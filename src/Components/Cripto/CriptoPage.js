import { useParams } from "react-router-dom"
import './CriptoPage.css'
import usePetition from "../hooks/usePetition";
import CriptoInfo from "./info/CriptoInfo";
import CriptoHistoryComponent from "./info/CriptoHistory";

const CriptoPage = () => {
    let { id } = useParams();

    const [cripto, loadingCripto] = usePetition(`assets/${ id }`);
    const [criptoHistory, loadingCriptoHistory] = usePetition(`assets/${ id }/history?interval=d1`);

    if(loadingCripto || loadingCriptoHistory ) return (
        <h1>Cargando información de { id }</h1>
    )

    return(
    <>
    <div className='cripto-page-container'>
        { cripto && < CriptoInfo cripto = {cripto}/> }
        { criptoHistory && < CriptoHistoryComponent criptoHistory = {criptoHistory} /> }
    </div>
    </>
        )
}

export default CriptoPage