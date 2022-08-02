// definir classe
class Pessoa {
  private id: number;
  private nome: string;

  constructor(nome) {
    this.id = (Math.random() * 100000);
    this.nome = nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getNome() {
    return this.nome;
  }
}

// criar objeto
const pessoa = new Pessoa('Juliano');

module.exports = pessoa;
  
console.log(pessoa.getNome())
