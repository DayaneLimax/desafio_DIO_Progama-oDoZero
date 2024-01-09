//Desafio Calculadora de Partidas ranqueadas.

let saldoVitorias;
let nivelHeroi;

calcularVitorias(68,16);
nivel(saldoVitorias);

console.log("O Herói tem saldo de rankeadas de " + saldoVitorias, "está no nível " + nivelHeroi);

//Função responsável por calcular as vitorias.
function calcularVitorias(vitorias, derrotas) {
  saldoVitorias = vitorias - derrotas;
  return saldoVitorias;
}

//Função responsavem por definir o nivel do Heroi pelo resultado do calculo de vitorias.
function nivel(saldoVitorias) {
  if (saldoVitorias < 10) {
    nivelHeroi = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivelHeroi = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivelHeroi = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivelHeroi = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivelHeroi = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivelHeroi = "Lendário";
  } else if (saldoVitorias >= 101) {
    nivelHeroi = "Imortal";
  }

  return nivelHeroi;
}
