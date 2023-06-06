import { Link } from 'react-router-dom'
import './Cripto.css'

const Cripto = ({ id, name, price, variation, symbol }) => {
  const classChange = variation < 0 ? 'negativo' : 'positivo'
return(
    <>
    <div className='cripto'>
      <h2>{name}</h2>
      <div className="info">
        <p>
          <span className="label"> Precio hoy USD: {new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(price)}</span>
        </p>
        <p>Código: {symbol}</p>
        <p>24H Change: 
        <span className= {classChange}> {variation}% </span></p>
        <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
      </div>
    </div>
    </>
)
}

export default Cripto