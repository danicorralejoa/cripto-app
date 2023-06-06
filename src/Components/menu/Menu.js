import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import './Menu.css'

const Menu = () => {
    const usuario = useContext(UserContext);
    const navigate = useNavigate();

    return(
        <nav className="main-menu">
            <ul>
                <li> <NavLink to='/'>Inicio</NavLink> </li>
                <li> <NavLink to="/criptomonedas">Lista de Criptomonedas</NavLink> </li>
                <li> <NavLink to="/perfil">Perfil de { usuario.name }</NavLink> </li>
                <li> <NavLink to="/perfil" onClick={()=>{
                    localStorage.removeItem('userToken');
                    navigate('/login')
                }}>Cerrar sesión</NavLink> </li>
            </ul>
        </nav>
    )
}

export default Menu