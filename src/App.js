import  React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./componentes/TelaLogin";
import TelaCadastro from "./componentes/TelaCadastro";
import EscolhaPlano from "./componentes/EscolhaPlano";
import User from "./componentes/User";
import TelaHome from "./componentes/TelaHome";
import UserContext from './util/UserContext';
import TokenContext from './util/TokenContext'; 
import EscolhaPlanoContext from './util/EscolhaPlanoContext';
import Plano from './componentes/Plano'

function App(){
  const [token, setToken] = useState(null);
  const [escolhaPlano  , setEscolhaPlano ] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <TokenContext.Provider value={{ token, setToken }}>
      <EscolhaPlanoContext.Provider value={{ escolhaPlano, setEscolhaPlano }}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<TelaLogin/>}/>
      <Route path="/cadastro" element = {<TelaCadastro/>}/>
      <Route path="/escolha-plano" element = {<EscolhaPlano/>}/>
      <Route path="/escolha-plano/:ID" element = {<Plano/>}/>
      <Route path="/users/:id" element = {<User/>}/>
      <Route path="/home" element = {<TelaHome/>}/>
    </Routes>
    </BrowserRouter>
    </EscolhaPlanoContext.Provider>
    </TokenContext.Provider>
    </UserContext.Provider>
  )
}
/*
 
      */
export default App;