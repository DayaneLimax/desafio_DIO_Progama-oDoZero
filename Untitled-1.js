//Desafio Classificador de nível de Herói

let nomeDoHeroi;
let xp = 5000;
let classeHeroi;


console.log("=== Seja bem vindo ao Classificador de Nivel de Herói ===")
console.log('Digite o nome do Herói: ')
console.log("Olá " + nomeDoHeroi, ", vou classificar o seu nivel")


do{
  // classeHeroi = prompt('Digite o seu xp: ')
}while (xp < 1);

console.log("Você digitou" + xp, "Você não tem Xp suficiente para classificação")

if (xp < 1000){
    classeHeroi = "Ferro";

} else if (xp >=1001 && xp <=2000){
    classeHeroi = "Bronze";

} else if (xp >=2001 && xp <=5000){
    classeHeroi = "Prata";

}else if (xp >=5001 && xp <=7000){
    classeHeroi = "Ouro";
    
}else if (xp >=7001 && xp <=8000){
    classeHeroi = "Platina";

}else if (xp >= 8001 && xp <=9000){
    classeHeroi = "Ascendente";

}else if (xp >=9001 && xp <=10000){
    classeHeroi = "Imortal";

}else if (xp >=10001){
    classeHeroi = "Radiante";

}

console.log("O Herói de nome " + nomeDoHeroi, + " está no nével de " + classeHeroi)   


