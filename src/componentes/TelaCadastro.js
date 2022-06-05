import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


//import axios from 'axios';
import { Fragment, useState } from "react";



export default function TelaCadastro() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
  //const [image, setImage] = useState('');
  //const [isLoading, setIsloading] = useState(false);

  function checandoCadastro(e) {
    e.preventDefault();
    let pCadastro = axios.post(
        'https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up',
        {
          email,
          name,
          cpf,
          password,
        }
      );
      pCadastro.then(()=>navigate("/"));
      pCadastro.catch((res) => alert(res));
      
    }

  return(
    <>
    <StyledForm onSubmit={checandoCadastro}>
      <input
        type='text'
        placeholder='Nome'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='CPF'
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <input
        type='email'
        placeholder='E-mail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Senha'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>CADASTRAR</button>
    </StyledForm>
    <StyledLink to='/'>Já possuí uma conta? Entre</StyledLink>
  </>
  );
}
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  color: #ffffff;
  :visited {
    color: #ffffff;
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