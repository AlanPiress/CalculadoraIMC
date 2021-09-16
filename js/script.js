calcular=addEventListener("click", calculoImc);

function calculoImc (){
    const altura= document.getElementById("altura").value;
    const peso= document.getElementById("peso").value;
    const calcular= document.getElementById("calcular");
    const resultado= document.getElementById("resultado");

    if (altura !== "" && peso !== ""){

        const valorImc= (peso/ (altura*altura)).toFixed(1);

        let classificacao = "";

        if (valorImc < 18.5){
            classificacao= "abaixo do peso.";
        }

        else if (valorImc < 25){
            classificacao= "com peso ideal."
        }

        else if (valorImc < 30){
            classificacao= "levemente acima do peso."
        }

        else if (valorImc < 35){
            classificacao= "com obesidade grau I."
        }

        else if (valorImc < 40){
            classificacao= "com obesidade grau II."
        }

        else {
            classificacao= "com obesidade grau III."
        }

        resultado.textContent= `Seu IMC é ${valorImc} e você está ${classificacao}`;

    }

    else{
        resultado.textContent= "Preencha todos os campos!"
    }
}