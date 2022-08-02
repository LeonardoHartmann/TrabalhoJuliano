// definir classe
class Produto {
    private id: number;
    private nome: string;
    private preco: number;
    

    constructor(nome: string, preco: number) {
      this.id = (Math.random() * 100000);
      this.nome = nome;
      this.preco = preco;
    }
  
    setNome(nome) {
      this.nome = nome;
    }
  
    setPreco(preco):void {
        this.preco = preco;
    }

    
    public getPreco(): number {
        return this.preco;
      }
      
    public getNome(): string {
      return this.nome;
    }
  }
  
  // criar objeto
  const produto = new Produto('Maça', 10);
  
  module.exports = produto;
  
  console.log(produto.getNome())
