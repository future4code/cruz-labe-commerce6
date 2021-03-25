import React, { Component } from 'react'
import styled from 'styled-components'
import { transformaEmMoeda } from '../../utils/transformaEmMoeda'
import ItemCarrinho from './ItemCarrinho/ItemCarrinho'

const ContainerCarrinho = styled.div`
    width: 22vw;
    min-height: 100vh;
    padding: 10px;
`



export default class Carrinho extends Component {
    render() {
        
        const valorTotal = this.props.listaDeProdutos.reduce((acc, curr)=>{
            return acc + curr.valor
        }, 0)
       

        return (
            <ContainerCarrinho>
              <h2>Carrinho:</h2>

              {
                  this.props.listaDeProdutos.map((item)=>{
                      return <ItemCarrinho onClickRemoverProduto={this.props.onClickRemoverProduto} key={item.id} info={item}/>
                  })
              }
              
              <p>Valor Total: {transformaEmMoeda(valorTotal)}</p>
            </ContainerCarrinho>
        )
    }
}