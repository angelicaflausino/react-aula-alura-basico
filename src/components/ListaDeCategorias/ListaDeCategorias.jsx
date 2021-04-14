import React, { Component } from 'react';

class ListaDeCategorias extends Component {
    
    constructor() {
        super();
        this.state = { categorias: [] }
        this.novasCategorias = this.novasCategorias.bind(this);
    }
    
    //Quando terminou de criar o componente mas ainda não foi renderizado
    componentDidMount() {
        this.props.categorias.inscrever(this.novasCategorias);
    }

    //Quando irá remover o ambiente da árvore de renderização
    componentWillUnmount() {
        this.props.categorias.desinscrever(this.novasCategorias);
    }

    handleEventoInput(e) {
        if(e.key === 'Enter') {
            this.props.adicionarCategoria(e.target.value);
        }
    }

    novasCategorias(categorias) {
        this.setState({...this.state, categorias });
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => {
                       return <li className="lista-categoria_item" key={index}>{categoria}</li>
                    })}
                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this.handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;