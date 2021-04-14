import React, { Component } from 'react';
import CardNota from '../CardNota';
import {} from './style.css';

class ListaDeNotas extends Component {
  constructor(){
    super();
    this.state = {notas: []};
    this.novasNotas = this.bind(this.novasNotas(this));
  }

  componentDidMount() {
    this.props.notas.inscrever(this.novasNotas);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this.novasNotas);
  }

  novasNotas(notas) {
    this.setState({...this.state.notas, notas});
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index} className="lista-notas_item">
            <CardNota
              apagarNota={this.props.apagarNota}
              titulo={nota.titulo}
              texto={nota.texto}
              categoria={nota.categoria}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default ListaDeNotas;
