saldoVitorias(75, 20)

function saldoVitorias(quantidadeDeVitorias, quantidadeDeDerrotas){
    let vitorias = (quantidadeDeVitorias - quantidadeDeDerrotas)
    

    if(vitorias <= 10){
        console.log("o Herói tem saldo de " + vitorias + " vitórias e está no nível Ferro")
    }else if(vitorias <= 20 && vitorias > 10){
        console.log("o Herói tem saldo de " + vitorias + " vitórias e está no nível Bronze")

    }else if(vitorias <= 50 && vitorias > 20){
        console.log("o Herói tem saldo de " + vitorias + " vitórias e está no nível Prata")
    }else if(vitorias <= 80 && vitorias > 50){
        console.log("o Herói tem saldo de " + vitorias + " vitórias e está no nível Ouro")
    }else if(vitorias <= 90 && vitorias > 80){
        console.log("o Herói tem saldo de " + vitorias + " vitórias e está no nível Diamante")
    }else if (vitorias <= 100 && vitorias > 90){
        console.log("o Herói tem saldo de " + vitorias + " vitórias e está no nível Lendário")
    }else if(vitorias >=101){
        console.log("o Herói tem saldo de " + vitorias + " vitórias e está no nível Imortal")
    }
    return vitorias
}