import React, { Component } from 'react'
import styled from "styled-components"
import CardProduto from './CardProduto/CardProduto'


const ContainerProduto = styled.div`
    width: 55vw;
    min-height: 100vh;
    background-color: red;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
`

const HeaderListaProduto = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 20px;
`

export default class ListaDeProdutos extends Component {

    state = {
        ordenacao: "crescente"
    }

    onChangeOrdenação = (event)=>{
        this.setState({
            ordenacao: event.target.value
        })
    }

    render() {
        const listaOrdenada = this.props.produtos.sort((produtoA, produtoB)=>{
            if (this.state.ordenacao === "crescente") {
                return produtoA.value - produtoB.value
            } else {
                return produtoB.value - produtoA.value
            }
        })
        return (
            <ContainerProduto>
                <HeaderListaProduto>
                    <span>Quantidade de produtos: {this.props.produtos.length}</span>
                    <label>Ordenação: 
                        <select onChange={this.onChangeOrdenação}>
                            <option value="crescente">Crescente</option>
                            <option value="decrescente">Decrescente</option>
                        </select>
                    </label>
                    
                    
                </HeaderListaProduto>
                {listaOrdenada.map(produto =>{
                    return <CardProduto 
                        key={produto.id} 
                        id={produto.id} 
                        imagem={produto.imageUrl} 
                        nome={produto.name} 
                        valor={produto.value}
                    />
                })}
            </ContainerProduto>
        )
    }
}
