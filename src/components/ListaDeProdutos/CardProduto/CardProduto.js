import React, { Component } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    width: 15vw;
    border: 1px solid black;
    height: 300px;  

    img{
        max-width:100%
    }

`

export default class CardProduto extends Component {
    render() {
        return (
            <CardContainer>
                <img src={"https://picsum.photos/200/200?a=1"} alt="Imagem Produto"/>
                <p>Foguete da Missão Apollo 11</p>
                <p>R$ 10000,00</p>
            </CardContainer>
        )
    }
}
