import React from 'react';
import ReactDOM from 'react-dom/client';
import './Main.css';
import App from './Components/App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from './Components/404-error';
import Cuadricula from './Components/Cuadricula.js';
import HomePage from './Components/HomePage';
import CriptoPage from './Components/Cripto/CriptoPage';
import Perfil from './Components/usuarios/Perfil';
import { UserContextProvider } from './Context/UserContext';
import Login from './Components/usuarios/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
   <UserContextProvider>
     <BrowserRouter>
        <Routes>
            <Route path='/' element = {<App />}>
                <Route index element = {<HomePage />} />
                <Route path='perfil' element = {<Perfil />} />
            </Route>
            <Route path='/criptomonedas' element = { <App />}>
                <Route index element = { <Cuadricula />}/>
                <Route path=':id' element= {<CriptoPage />} />
            </Route>
            <Route path='login' element = { <Login /> } />
            <Route path='*' element = { <ErrorPage />} />
        </Routes>
    </BrowserRouter>
   </UserContextProvider>
);