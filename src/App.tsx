import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/button-components';

interface Props {


}
interface State {

  showModal: boolean
  result: number;
  operation:string;
 


}





export default class App extends Component<Props, State> {

  state = {
    showModal: false,
    result: 0,
    operation: "",
  
  }

  handleOpenCloseModal = () => {
    const { showModal, } = this.state;
    this.setState({ showModal: !showModal });
  };
  setOperation = (operation: string) => {
    this.setState({ operation: operation });
  };

  calculate = (operation: string) => {
    const num1 = 7;
    const num2 = 19;
   
    if (operation === "soma") {
      this.setState({ result: num1 + num2 });
      
    } else if (operation === "subtracao") {
      this.setState({ result: num1 - num2 });
    }
  };



  render() {
    const { showModal, result } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
           <p>Escolha um operação para trabalhar com os numeros 7 e 19</p>
           <p>{`Resultado da operação de ${this.state.operation} ${result}`}</p>

          
          <ButtonComponent
            handleOpenCloseModal={this.handleOpenCloseModal}
            showModal={showModal}
            setOperation={(value: string)=>this.setOperation (value)}
            calculate={(value: string)=> this.calculate(value)}
           

          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

