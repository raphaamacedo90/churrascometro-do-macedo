//Carne - 350gr por pessoa + de 6 horas - 750
//linguiça/coração/asas - 200gr por pessoa + de 6 horas - 350
//Cerveja - 2600ml por pessoa + de 6 horas - 3600ml
//Refrigerante/agua - 1500ml por pessoa + 6 horas 2000ml

//crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {

    console.log("calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);    

    let qdtTotalCerveja = cervejaPP(duracao) * adultos;

    let qdtTotalBebida = BebidaPP(duracao) * adultos + (BebidaPP(duracao)/2 * criancas);

    resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`;

    resultado.innerHTML += `<div class="result-block">
    <img src="img/carne.png"/><p>${qdtTotalCarne /1000}Kg de Carne</p></div>`;   
    
    
    resultado.innerHTML += `<div class="result-block">
    <img src="img/cerveja.png"/><p>${Math.ceil(qdtTotalCerveja /355)}Latas de Cerveja</p></div>`;

    resultado.innerHTML += `<div class="result-block">
    <img src="img/refri.png"/><p>${Math.ceil(qdtTotalBebida /2000)}Pets 2L de Bebidas</p></div>`;

    console.log(qdtTotalCarne);   
    console.log(qdtTotalCerveja);
    console.log(qdtTotalBebida);
}

function carnePP(duracao){
    
    if (duracao >= 6){
        return 1100;
    }
    else{
       return 550; 
    }
}


function cervejaPP(duracao){
    
    if (duracao >= 6){
        return 2600;
    }
    else{
       return 1800; 
    }
}

function BebidaPP(duracao){
    
    if (duracao >= 6){
        return 1500;
    }
    else{
       return 1000; 
    }
}