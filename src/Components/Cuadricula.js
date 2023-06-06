import '../Components/Cuadricula.css';
import Cripto from './Cripto/Cripto'
import usePetition from './hooks/usePetition';

function Cuadricula() {
  const [criptos] = usePetition(`assets`);
 
  if(!criptos) return (<h1>Cargando...</h1>)
  
  return (
  <>
  <div className='app-container'>
    <h1>Lista de Criptomonedas</h1>
    <div className="cripto-container">
      {
      criptos.map(({id, name, priceUsd, changePercent24Hr, symbol}) => (
          <Cripto
          key = {id} 
          name = {name} 
          price = {parseFloat(priceUsd).toFixed(2)} 
          variation = {parseFloat(changePercent24Hr).toFixed(2)}
          symbol = {symbol}
          id = {id}
          />
      )
      )}
      </div>
    </div>
  </>
  );
     }

export default Cuadricula;
