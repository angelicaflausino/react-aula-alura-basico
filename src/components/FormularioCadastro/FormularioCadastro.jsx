import React, { Component } from 'react';
import {} from './style.css';

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = '';
    this.texto = '';
    this.categoria = 'Sem Categoria';
    this.state = {categorias: []}
  }

  componentDidMount() {
    this.props.categorias.inscrever(this.novasCategorias.bind(this));
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this.desinscreverComponente.bind(this));
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
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  handleCategoriaChange(e) {
    e.stopPropagation();
    this.categoria = e.target.value;
    console.log(this.categoria);
  }

  novasCategorias(categorias) {
    this.setState({...this.state.categorias, categorias});
  }

  desinscreverComponente() {
    console.log("Componente Desinscrito");
  }

  render() {
    return (
      <form
        className="form-cadastro"
        onSubmit={this.criarNota.bind(this)}
      >
        <select className="form-cadastro_input"
          onChange={this.handleCategoriaChange.bind(this)}>
          <option>Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option value={categoria} key={index}>{categoria}</option>
          })}
        </select>
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
