const CriptoInfo = ({cripto})=>{

    return(
        <>
        <div className="info">
        <div className="main-info">
            <span>Rank {cripto.rank}</span>
            <h1>{cripto.name}</h1>
            <span className="symbol">{cripto.symbol} </span>
        </div>
        <div className="details">
            <ul>
                <li className="detail">
                    <span className="label">Precio USD: </span>
                    <span>{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(cripto.priceUsd)}</span>
                </li>
                <li className="detail">
                    <span className="label">Max Suply: </span>
                    <span>{parseFloat(cripto.maxSupply).toFixed(2)}</span>
                </li>
                
                <li className="detail">
                    <span className="label">Volumen del Mercado USD: </span>
                    <span>{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(cripto.marketCapUsd)}</span>
                </li>
                <li className="detail">
                    <span className="label">Volumen Últimas 24Hr USD: </span>
                    <span>{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(cripto.volumeUsd24Hr)}</span>
                </li>
                <li className="detail">
                    <span className="label">Cambio 24Hr: </span>
                    <span>{parseFloat(cripto.changePercent24Hr).toFixed(2)}%</span>
                </li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default CriptoInfo;