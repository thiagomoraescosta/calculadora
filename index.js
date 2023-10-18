let numeroVitoria = 20;
let numeroDerrota = 1;
let saldoRanking = subtrair(numeroVitoria,numeroDerrota);
let novoNivel = "Ferro";


function subtrair(numeroVitoria, numeroDerrota){
    return numeroVitoria - numeroDerrota
}


switch(true) {
    case saldoRanking <=10:
        novoNivel = "Ferro";
        break;
    case saldoRanking <=20:
        novoNivel = "Bronze";
        break;
    case saldoRanking <=50:
        novoNivel = "Prata";
        break;
    case saldoRanking <=80:
        novoNivel = "Ouro";
        break;
    case saldoRanking <=90:
        novoNivel = "Diamante"
    case saldoRanking <=100:
        novoNivel = "Lendário"
    default:
        novoNivel = "Imortal";
        break;
}

console.log(`O Herói tem de saldo ${saldoRanking} e está no nível ${novoNivel}`)