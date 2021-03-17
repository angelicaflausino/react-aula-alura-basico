import React, { Component } from 'react';
import {} from './style.css';

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <p className="card-nota_texto">{this.props.texto}</p>
        </header>
      </section>
    );
  }
}

export default CardNota;
