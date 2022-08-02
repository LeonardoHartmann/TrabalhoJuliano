// definir classe
class Carrinho {
    private id: number;
    private produtos: string;
    private quant: number;
    

    constructor(produtos: string, quant: number) {
      this.id = (Math.random() * 100000);
      this.produtos = produtos;
      this.quant = quant;
    }
  
    setNome(produtos) {
      this.produtos = produtos;
    }
  
    setPreco(quant):void {
        this.quant = quant;
    }

    
    public getPreco(): number {
        return this.quant;
      }
      
    public getNome(): string {
      return this.produtos;
    }
  }
  
  // criar objeto
  const carrinho = new Produto('Feijao', 2);
  
  module.exports = carrinho;
  
  console.log(carrinho.getNome())
