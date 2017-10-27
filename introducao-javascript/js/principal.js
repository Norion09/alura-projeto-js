console.log("fui carregado de um arquivo externo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// calcular imc
var pacientes = document.querySelectorAll(".paciente");// pega todos os pacientes
for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoValido = true;
    if(peso <= 0 || peso >= 1000){
        console.log("peso invalido");
        pesoValido = false;
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");//pega a classe no css
        //paciente.style.backgroundColor = "red";
        //paciente.style.color = "red";
    }

    var aulturaValida = true;
    if(altura <= 0 || altura >= 3){
        console.log("altura invalido");
        aulturaValida = false;
        tdIMC.textContent = "Altura invalida";
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = "lightcoral";
    }

    if(aulturaValida == true && pesoValido == true){
        var imc = peso/(altura*altura);
        tdIMC.textContent = imc.toFixed(2);//toFixed imprime só até numero de casa decimais determinadas
    }
}



