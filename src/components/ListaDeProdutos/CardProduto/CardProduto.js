import React, { Component } from 'react'
import styled from 'styled-components'
import { transformaEmMoeda } from '../../../utils/transformaEmMoeda'

const CardContainer = styled.div`
    width: 15vw;
    border: 1px solid black;
    height: 350px;  
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        max-width:100%
    }

`

    

export default class CardProduto extends Component {
    adicionaAoCarrinho = () =>{
        const item ={
            id: this.props.id,
            nome: this.props.nome,
            preco:this.props.valor,
            valor: this.props.valor,
            quantidade: 1
        }

        this.props.onClickAdicionarProduto(item)
    }
    render() {
        return (
            <CardContainer>
                <img src={this.props.imagem} alt="Imagem Produto"/>
                <p>{this.props.nome}</p>
                <p>{transformaEmMoeda(this.props.valor)}</p>
                <button onClick={this.adicionaAoCarrinho}>Adicionar ao Carrinho</button>
            </CardContainer>
        )
    }
}
