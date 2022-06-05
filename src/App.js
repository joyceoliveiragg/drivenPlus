import  React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./componentes/TelaLogin";
import TelaCadastro from "./componentes/TelaCadastro";
import EscolhaPlano from "./componentes/EscolhaPlano";
import CadastroCartao from "./componentes/CadastroCartao";
import TelaHome from "./componentes/TelaHome";
import UserContext from './util/UserContext';
import TokenContext from './util/TokenContext'; 
import EscolhaPlanoContext from './util/EscolhaPlanoContext';


function App(){
  const [token, setToken] = useState(null);
  const [EscolhaPlano  , setEscolhaPlano ] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <TokenContext.Provider value={{ token, setToken }}>
      <EscolhaPlanoContext.Provider value={{ EscolhaPlano, setEscolhaPlano }}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<TelaLogin/>}/>
      <Route path="/Cadastro" element = {<TelaCadastro/>}/>
      <Route path="/escolha-plano" element = {<EscolhaPlano/>}/>
      <Route path="/cadastro-cartao" element = {<CadastroCartao/>}/>
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