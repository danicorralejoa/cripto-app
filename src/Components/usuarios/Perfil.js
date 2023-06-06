import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"

const Perfil = () =>{
    const usuario = useContext(UserContext);

    if(!usuario) return (<h1>Cargando...</h1>)
    return(
        <>
        <img src={usuario.avatar}/>
        <h1>Hola {usuario.name} {usuario.lastName} bienvenido a tu perfil</h1>
        </>
    )
}

export default Perfil