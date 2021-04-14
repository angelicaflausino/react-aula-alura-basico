import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import { } from './assets/App.css';
import { } from './assets/index.css';
import Categorias from './dados/Categorias';
import Notas from './dados/Notas';

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }

  /*criarNota = (titulo, texto, categoria) => {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  deletarNota = () => {
    console.log('Deletar');
  }

  adicionarCategoria = (categoria) => {
    const novaCategorias = [...this.state.categorias, categoria];
    const novoEstado = {...this.state, novaCategorias};
    this.setState(categorias);
  }*/

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          adicionarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas
            notas={this.notas.items}
            apagarNota={this.notas.apagarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;
