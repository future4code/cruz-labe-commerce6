import React, { Component } from 'react'
import styled from 'styled-components'

const LinhaProduto = styled.div`
    display:flex;
    justify-content: space-evenly;
`

export default class ItemCarrinho extends Component {
    render() {
        const {id, nome, quantidade, preco} = this.props.info
        
        return (
            <LinhaProduto>
                <span>{quantidade}x</span>
                <span>{nome}</span>
                <button onClick={() => this.props.onClickRemoverProduto(id, preco)}>Remover</button>
            </LinhaProduto>
        )
    }
}
