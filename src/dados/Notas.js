import Nota from './Nota';

export default class Notas {
    constructor() {
        this.items = [];
        this.inscritos = [];
    }

    adicionarNota(titulo, texto, categoria) {
        const nota = new Nota(titulo, texto, categoria);
        this.items.push(nota);
        this.notificar();
    }

    apagarNota(indice) {
        this.items.splice(indice, 1);
        this.notificar();
    }

    inscrever(func) {
        this.inscritos.push(func);
    }

    desinscrever(func) {
        this.inscritos = this.inscritos.filter(f => f !== func);
    }

    notificar() {
        this.inscritos.forEach(func => {
            func(this.items);
        });
    }
}