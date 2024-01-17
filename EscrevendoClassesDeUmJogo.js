
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
          case "mago":
            ataque = "magia";
            break;
          case "guerreiro":
            ataque = "espada";
            break;
          case "monge":
            ataque = "artes marciais";
            break;
          case "ninja":
            ataque = "shuriken";
            break;
          default:
            ataque = "ataque inválido";
        }

    console.log(`O ${this.nome} ${this.tipo} atacou usando ${ataque}.`);
    }
  }

let Heroi1 = new Heroi ("Broken", 25, "guerreiro");
Heroi1.atacar();

let Heroi2 = new Heroi ("Afrodite", 22, "mago");
Heroi2.atacar();

