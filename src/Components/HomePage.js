import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <>
        <div className="home-main">
            <h1>Hola bienvennido a la página de consultas de criptomonedas</h1>
            <Link to='/criptomonedas'>Ir al catálogo de criptomonedas</Link>
        </div>
        </>
    )
}

export default HomePage;