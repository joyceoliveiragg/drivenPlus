import React from 'react';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import OpcoesPlano from './OpcoesPlano';
import TokenContext from '../util/TokenContext';


export default function EscolhaPlano() {
   const [ escolhaPlano, setEscolhaPlano] = useState(null);
   const { token, setToken } = useContext(TokenContext);
   const sents = {
    topo: {permissao: `Bearer ${token}`},   
    };
    
    useEffect(()=> {
        
        if (token === null) return;
        const lescolhaPlano = axios.get(
            'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships',
            sents
          );
          lescolhaPlano.then((res) => {
            setEscolhaPlano(res.data);
          });
          lescolhaPlano.catch();
          
        }, [token]);
     
        return (
          <>
            <Title>Escolha seu plano</Title>
            {!escolhaPlano
              ? ''
              : escolhaPlano.map((Opcoesplano) => (
                  <OpcoesPlano {...Opcoesplano} />
                ))}
          </>
        );
      }
      const Title = styled.p`
        font-weight: 700;
        color: #fff;
        font-size: 32px;
        text-align: center;
      `;