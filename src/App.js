import React, { Component } from 'react'
import styled from 'styled-components'
import Carrinho from './components/Carrinho/Carrinho'
import Filtros from './components/Filtros/Filtros'
import ListaDeProdutos from './components/ListaDeProdutos/ListaDeProdutos'
import { listaDeProdutos } from './data/dataProdutos'


const ContainerPrincipal = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    
`

export default class App extends Component {
 
  state ={
    inputMin: 100,
    inputMax: 100000,
    inputNome: "",
    carrinho:[]
  }

  componentDidUpdate() {
    localStorage.setItem("listaCarrinho", JSON.stringify(this.state.carrinho));
  }

  componentDidMount() {
    const listaCarrinho = JSON.parse(localStorage.getItem("listaCarrinho"))

    listaCarrinho && this.setState({
      carrinho: listaCarrinho,
    });
  }

  onChangeInputMin = (event)=>{
    this.setState({
      inputMin: Number(event.target.value)
    })
  }
  onChangeInputMax = (event)=>{
    this.setState({
      inputMax: Number(event.target.value)
    })
  }
  onChangeInputNome = (event)=>{
    this.setState({
      inputNome: event.target.value
    })
  }

  onClickAdicionarProduto = (produto)=>{
    if(this.state.carrinho.length === 0){
      this.setState({
        carrinho: [produto]
      })
      return
    }

    if(!this.state.carrinho.find((item)=> item.id === produto.id)){
      this.setState({
        carrinho: [...this.state.carrinho, produto]
      })
    }else{
      const novoArrayCarrinho = this.state.carrinho.map((item)=>{
        if(item.id === produto.id){
          const novaQuantidade = item.quantidade + 1;
          const novoValor = item.valor + produto.valor
          const novoItem = {
            ...item,
            quantidade: novaQuantidade,
            valor: novoValor
          }
          return novoItem
        }else{
          return item
        }
      })

      this.setState({
        carrinho: [ ...novoArrayCarrinho]
      })
    }
  }
  
  onClickRemoverProduto = (id, preco)=>{
   if(this.state.carrinho.find((item)=> item.id === id).quantidade > 1){
    const novoArrayCarrinho = this.state.carrinho.map((item)=>{
      if(item.id === id){
        const novaQuantidade = item.quantidade - 1;
        const novoValor = item.valor - preco
        const novoItem = {
          ...item,
          quantidade: novaQuantidade,
          valor: novoValor
        }
        return novoItem
      }else{
        return item
      }
    })

    this.setState({
      carrinho: [...novoArrayCarrinho]
    })
   } else{
     const novaListaProdutos = this.state.carrinho.filter((item)=>{
       return item.id !== id
     })

     this.setState({
      carrinho: [...novaListaProdutos]
    })
   }

  }

  render() {
    const listaFiltrada = listaDeProdutos()
        .filter((produto)=>{
          return produto.value >= this.state.inputMin
        })
        .filter((produto)=>{
          return produto.value <= this.state.inputMax
        })
        .filter((produto)=>{
          const nomeMinusculo = produto.name.toLowerCase()
          const inputMinusculo = this.state.inputNome.toLowerCase()
          return nomeMinusculo.includes(inputMinusculo)
        })
       


    return (
      <ContainerPrincipal>
        <Filtros 
          inputMin={this.state.inputMin} 
          inputMax={this.state.inputMax} 
          inputNome={this.state.inputNome}
          onChangeInputMin={this.onChangeInputMin}
          onChangeInputMax={this.onChangeInputMax}
          onChangeInputNome={this.onChangeInputNome}
          />
        <ListaDeProdutos onClickAdicionarProduto={this.onClickAdicionarProduto} produtos={listaFiltrada} />
        <Carrinho onClickRemoverProduto={this.onClickRemoverProduto} listaDeProdutos={this.state.carrinho}/>
      </ContainerPrincipal>
    )
  }
}
