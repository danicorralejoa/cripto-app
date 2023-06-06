import axios from "axios";
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {

    const navigation = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const client = axios.create({
        baseURL: 'https://reqres.in/api/login'
    })

    const formSubmit = (e)=> {
        setLoading(true);
        e.preventDefault();
        console.log(user);
        client.post('', user)
        .then((response) => {
            setLoading(false);
            console.log(response)
            localStorage.setItem('userToken',response.data.token);
            navigation('/');
        }).catch((e) => {
            setLoading(false);
            setError(e);
            console.warn('Algo falló', e)
        })
    }

    if (localStorage.getItem('userToken')) return <Navigate to='/' />

    return (
        <>
        <div className="login-container">
        <h1>Inicia sesion</h1>
        <form onSubmit={ formSubmit }>
            <div className='field'>
                <label htmlFor="email">Correo Electrónico</label>
                <input required type= 'email' name="email" onChange={
                    (e) => {
                        setUser({
                            ...user,
                            email : e.target.value
                        })
                }}/>
            </div>
            <div className='field'>
                <label htmlFor="password">Contraseña</label>
                <input type='password' name='password' onChange={(e) => {
                    setUser({
                        ...user,
                        password: e.target.value
                    })
                }}/>
            </div>
            <div className="submit">
                <input 
                type='submit'
                value={loading ? 'Cargando...' : 'Ingresar'}
                className="link"
                 />
            </div>
        </form>
        { error && <span className="error">Error: {error.response.data.error}</span> }
        </div>
        </>
    )
}

export default Login