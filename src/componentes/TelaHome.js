import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../util/UserContext";
import axios from "axios";
import uUser from '../assets/img/user.png'
import { useNavigate } from "react-router-dom";
import TokenContext from "../util/TokenContext";
import EscolhaPlanoContext from "../util/EscolhaPlanoContext";

//import plano1 from '../assets/img/plano1'
export default function TelaHome() {
    const navigate = useNavigate();
    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);
    const { EscolhaPlano, setEscolhaPlano } = useContext(EscolhaPlanoContext)
    const sents = {
        topo: {permissao: `Bearer ${token}`},   
    };
    useEffect(() => {
        if (token === null) return;
        const lescolhaPlano = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/' +
        user.membership.id,
        sents
        );
        lescolhaPlano.then();
       lescolhaPlano.catch();
    }, [token]);

    function cancelando(){
        const aCancelar = axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions',
            sents
        );
        aCancelar.then(res=>{navigate('/escolha-plano')});
    }
    console.log(user)
    if (!user) return '';
    return(
        <Container>
          <Logo src={EscolhaPlano.image
          } />
          <User onClick={() => navigate(`/users/${user.id}`)} src={uUser} />
    
          <Buttons>
            <div className='beneficios'>
              <div>
                <p>Olá, {user.name}</p>
              </div>
              {EscolhaPlano.beneficios.map((perk) => (
                <a href={perk.link}>{perk.title}</a>
              ))}
            </div>
    
            <div className='adminintrando'>
              <button onClick={cancelando}> Mudar Plano</button>
              <button className='cancel' onClick={cancelando}>
                Cancelar Plano
              </button>
            </div>
          </Buttons>
        </Container>
    );

}
const Container = styled.div`
      color: #fff;
      p {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 53px;
      }
    `;
    const Logo = styled.img`
      position: fixed;
      top: 32px;
      left: 38px;
      height: 50.8px;
    `;
    const User = styled.img`
      position: fixed;
      top: 22px;
      right: 22px;
    `;
    const Buttons = styled.div`
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding-top: 95px;
      button,
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 299px;
        height: 52px;
        text-decoration: none;
        background: #ff4791;
        color: #fff;
        border: 0;
        border-radius: 8px;
        margin-bottom: 8px;
      }
      a:visited {
        color: #fff;
      }
      .beneficios {
        display: flex;
        flex-direction: column;
      }
      .adminintrando {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .cancel {
        background: #ff4747;
      }
    `;
   