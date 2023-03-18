import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo){
    if(campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    if(campo.name == "aniversario" && campo.value == !""){
        ehMaiorDeIdade(campo);
    }
}

function validaNumerosRepetidos(cpf){
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    numerosRepetidos.includes(cpf);
}