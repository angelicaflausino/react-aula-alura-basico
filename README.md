# react-aula-alura-basico
App Notas da Aula Alura

Iniciando Projeto


npx: É o executador de pacotes, ele é diferente do npm que instala o pacote.

```
npx create-react-app my-app-name
```

eslint: Ferramenta para padronizar o projeto

```
npx eslint --init
```

Ao criarmos nosso projeto com o create-react-app podemos ver que o arquivo public/index.html não contém nada em seu <body>, além de uma div="root", mas quando executamos o projeto, sem alterarmos nada de dentro dele, vemos um projeto padrão criado pela aplicação do npx.
O React utiliza esse arquivo index.js para inserir todo o conteúdo JSX do App.js no index.html, tornando possível que esse template seja exibido no navegador.
Ele faz isso através de um método interno do ReactDOM chamado render() (que também utiliza JSX ao passar < App /> como parâmetro).

Componentes


Declaração

```
import React, { Component } from 'react';

class NomeDoComponente extends Component { 
  render() { 
    return ( 
      //html 
    ); 
  } 
} 
export default NomeDoComponente;
```

Integrando Javascript no render

Para declarar javascript dentro do render do elemento é necessário utilizar chave {}
```
import React, { Component } from 'react';
import CardNota from './CardNota';
class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of('Trabalho', 'Trabalho', 'Estudos').map((categoria) => (
          <li>
            <h3>{categoria}</h3>
            <CardNota />
          </li>
        ))}
      </ul>
    );
  }
}
export default ListaDeNotas;
```

- map itera sobre uma lista e retorna a também uma lista
- não utilizar forEach ou for dentro do corpo do componente pois eles somente iteram e não retornar nada
- adicionar atributo key  a cada elemento da lista, que é um propriedade do jsx, pois facilita o react entender qual os elementos sofreram alteração e precisa redesenhar

```
import React, { Component } from 'react'; 
import CardNota from './CardNota'; 
class ListaDeNotas extends Component { 
  render() { 
    return ( 
      <ul> 
        {Array.of('Trabalho', 'Trabalho', 'Estudos').map((categoria, index) => ( 
          // eslint-disable-next-line react/no-array-index-key 
          <li key={index}> 
            <h3>{categoria}</h3> 
            <CardNota /> 
          </li> 
        ))} 
      </ul> 
    ); 
  } 
} 
export default ListaDeNotas;
```

Estrutura da Pasta

- NomeDoComponente
	- NomeDoComponente.jsx
	- style.css
	- index.js

index.js

```
import NomeDoComponente from './components/NomeDoComponente';

export default NomeDoComponente;
```


OBS: A index.js serve somente para exportar o componente sem que seja necessário duplicar no caminho da pasta o nome do componente: import Componente from  './Componente/Componente'...


Estilizando Components


Utilizar a palavra-chave className como atributo invés do class 

```
import React, { Component } from 'react'; 
import {} from './style.css';

class CardNota extends Component { 
  render() { 
    return ( 
      <section className="card-nota"> 
        <header> 
          <h3>Título</h3> 
          <p>Escreva sua Nota</p> 
        </header> 
      </section> 
    ); 
  } 
} 
export default CardNota;
```

Lidando com Eventos


- this no javascript é dinâmico, quando chamamos o this dentro de um função ele não é "localizado" no contexto dentro da função, pois dependendo do contexto onde será chamado a função, é possível que o this seja undefined.
- Para contornar isso é necessário utilizar o método bind, pois o método associado o evento a instância.
- Utilizar arrow functions também resolve esse problema de contexto, pois o this nessas funções não é dinâmico.

```
class pessoa {
    constructor() {
        this.fala = "oi";
    }
    
    falar() {
        return this.fala;
    }
}

let p = new pessoa();
p.falar();
//oi

//armazena somente a referencia do método
let evento = p.falar();
evento();
//TypeError: this is undefined

//passando o this para o contexto
let evento2 = p.falar.bind(p)
evento2();
//oi

```

Quando trabalhamos com eventos no JavaScript e no React é muito comum passarmos como callback do evento uma função que será executada apensa quando o evento for disparado.

Isso só é possível porque no JavaScript são cidadãos de primeira ordem ou first-class citizens como costumamos ouvir.

Dada essa característica das funções, marque as alternativas que indiquem o que podemos fazer com elas no JavaScript.

- Por serem first-class funções podem retornar outras funções e isso é muito utilizado para fazermos a composição de funções e é utilizado em padrões da programação funcional.
- Podemos passar funções como parâmetros para outras funções e isso também é muito utilizado em programação funcional.
- No JS podemos salvar funções dentro de variáveis.

States e Props


State: Serve para guardar valores/estado que podem vir a mudar com a interação do usuário com o componente, tendo efeito na renderização do mesmo, o state pode ser passado como props!
Props: Valores para a configuração de um componente, essas props são passadas pelo elemento acima (que utiliza o componente que irá receber) e são imutáveis, utilizado para a comunicação de componentes.
