// definir classe
class Objeto {
    private id: number;
    private nome: string;
    private tamanho: number;


    constructor(nome, tamanho) {
      this.id = (Math.random() * 100000);
      this.nome = nome;
      this.tamanho = tamanho;
    }
  
    setNome(nome) {
      this.nome = nome;
    }
  
    setTamanho(tamanho) {
        this.tamanho = tamanho;
      }

    
    getTamanho() {
        return this.tamanho;
      }
      
    getNome() {
      return this.nome;
    }
  }
  
  // criar objeto
  const objeto = new Objeto('Pedra', 10);
  
  module.exports = objeto;
  
  console.log(objeto.getNome())
  