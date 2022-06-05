import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DRIVENPLUS from '../assets/img/DRIVENPLUS.png'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import UserContext from '../util/UserContext';
import TokenContext from '../util/TokenContext'; 
import EscolhaPlanoContext from '../util/EscolhaPlanoContext';
export default function TelaLogin () {
     const navigate = useNavigate();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
        
     const {token, setToken} = useContext(TokenContext);
     const {user, setUser} = useContext(UserContext);
     const {EscolhaPlano, setEscolhaPlanoContext} = useContext(EscolhaPlanoContext);
     function checando (event) {
        event.preventDefault();
        let login = axios.post(
           ' https://mock-api.driven.com.br/api/v4/driven-plus/auth/login',
           {password,
            email}  //react-router-dom  styled-components
        );
        login.then(res =>{
            setToken(res.data.token)
            setUser(res.data)  
            setEscolhaPlanoContext(res.data.membership)
         if(res.data.membership === null) {
             navigate('/escolha-plano')
         } else {
             navigate('/home')
         }
     
        })
     }
    return (
        <>
          <StyledImg src={DRIVENPLUS} alt='Driven+' />
          <StyledForm onSubmit={checando}>
          <input
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>ENTRAR</button>
        </StyledForm>
        <StyledLink to='/cadastro'>Não possui uma conta? Cadastre-se</StyledLink>
     </>
    );
  }  

const StyledImg = styled.img`
  margin-bottom: 100px;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  color: red;
  :visited {
    color: pink;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  input,
  button {
    width: 299px;
    height: 52px;
    border: 0;
    border-radius: 8px;
  }
  input {
    padding: 18px;
  }
  button {
    background: #ff4791;
    color: #fff;
    font-weight: 700;
  }
`;
