function formatInput(input) {
    // Remove qualquer caractere que não seja número
    let value = input.value.replace(/[^0-9]/g, '');
    
    // Adiciona o ponto entre o primeiro e o segundo número se houver dois ou mais números
    if (value.length > 1) {
      value = value[0] + '.' + value.slice(1);
    }
    
    // Atualiza o valor do campo
    input.value = value;
  }

function formatInputWeight(input){
    // Remove qualquer caractere que não seja número
    let value = input.value.replace(/[^0-9]/g, '');
    
    if (value.length > 3) {
        value = value.slice(0, 3) + '.' + value.slice(3);
    }
    else if (value.length > 2) {
        value = value.slice(0, 2) + '.' + value.slice(2);
    }
        
    // Atualiza o valor do campo
    input.value = value;
  }

function calcularIMC(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let imc = (peso/(altura ** 2)).toFixed(2);

    let imcElement = document.getElementById("IMCNumber")

    imcElement.classList.remove("show");

    setTimeout(() => {
        imcElement.innerHTML = imc;
        imcElement.classList.add("show");
    }, 100);
}