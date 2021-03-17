import React, { Component } from 'react';
import CardNota from '../CardNota';
import {} from './style.css';

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index} className="lista-notas_item">
            <CardNota titulo={nota.titulo} texto={nota.texto} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ListaDeNotas;
