const CriptoHistoryComponent = ({criptoHistory}) => {
    return (
        <>
        
        <div className="history">
                <h1>Históricos</h1>
                {
                    (criptoHistory) && (
                    <table>
                        <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Precio</th>
                        </tr>
                        </thead>
        {
        criptoHistory.map(({date,priceUsd, time})=> (
               <tbody>
               <tr key={time}>
                <td className="label">{date.substring(0,10)}</td>
                <td className="price">{parseFloat(priceUsd).toFixed(2)}</td></tr>
               </tbody>
        ))}
            </table>
                    )
                }
            </div>
        </>
    )
}

export default CriptoHistoryComponent