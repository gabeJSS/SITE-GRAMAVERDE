import React from 'react';
import leaf_blur from '../assets/leaf_blur.png'
import nookphone from '../assets/nookphone.png'
import windwaker from '../assets/windwaker.png'
import imagemtorta from '../assets/torto.png'

export default function Home(){
    return(
        <div>
            <img src={leaf_blur}
            id='folha'
            />
            <h1
            id='titulo'
            >
              Grama Verde Finanças
            </h1>
            <div id='barra'></div>
            <div
            id='degrade'
            style={{backgroundImage: `url(${windwaker})`}}
            >
            <h2
            id='subtitulo'
            >
                Suas finanças na palma da sua mão!
            </h2>
            <img
            id='nook'
            src={nookphone}
            />
            <p
            id='texto0'
            >O projeto Grama Verde tem como principal objetivo facilitar a vida financeira de nosso usuário!
            </p>
            <p
            id='texto1'
            >
            Com o auxílio do Grama Verde você poderá criar orçamentos e metas para atingir seus objetivos,
            </p>
            <p
            id='texto2'
            >
            também registrar seus gastos mensais e ainda te dar algumas dicas de como controlar suas entradas e saídas.
            </p>
            <p
            id='texto3'
            >
            O projeto está sendo desenvolvido em React Native, com o Expo como framework, apreciamos qualquer tipo de feedback sobre o projeto (qualquer mesmo!1!!)
            </p>
            <img
            id='torto'
            src={imagemtorta}
            />
            <p
            id='equipe'
            >
            Os integrantes do grupo e suas funções são:
            </p>
            <p
            id='cristian'
            >
                Cristian - Design e Front-End
            </p>
            <p
            id='gabriel'
            >
                Gabriel - Back-End e maior gamer do mundo
            </p>
            <p
            id='berti'
            >
                Arthur Berti - Back-End e Banco de Dados
            </p>
            <p
            id='davi'
            >
                Davi Erthal - Design e Front-End
            </p> 
            </div>
        </div>
    )
}