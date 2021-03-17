import React, { Component } from 'react';
import {} from './style.css';

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = '';
    this.texto = '';
  }

  handleTituloChanged(e) {
    this.titulo = e.target.value;
    console.log(this.titulo);
  }

  handleTextoChanged(e) {
    this.texto = e.target.value;
    console.log(this.texto);
  }

  criarNota(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form
        className="form-cadastro"
        onSubmit={this.criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleTituloChanged.bind(this)}
        />
        <textarea
          rows="15"
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handleTextoChanged.bind(this)}
        />
        <button
          type="submit"
          className="form-cadastro_input form-cadastro_submit"
        >
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
