import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerFiltro = styled.div`
    width: 20vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
`



export default class Filtros extends Component {

    


    render() {
        return (
            <ContainerFiltro>
                <h2>Filtros:</h2>
                
                <label>Valor Mínimo:</label>
                <input  type="number" onChange={this.props.onChangeInputMin} value={this.props.inputMin} />

                <label>Valor Máximo:</label>
                <input  type="number" onChange={this.props.onChangeInputMax} value={this.props.inputMax}/>

                <label>Busca do Produto:</label>
                <input type="text" onChange={this.props.onChangeInputNome} value={this.props.inputNome}/>

            </ContainerFiltro>
        )
    }
}
