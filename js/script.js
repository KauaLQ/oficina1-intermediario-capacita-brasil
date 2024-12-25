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

function resetBorders() {
    const ids = [
        "obesidade3",
        "obesidade2",
        "obesidade1",
        "acima-peso",
        "peso-normal",
        "abaixo-peso"
    ];

    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.remove("stylized");
        }
    });
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

    if (imc > 40) {
      resetBorders();
      let component = document.getElementById("obesidade3");
      component.classList.toggle("stylized");
    }
    else if (imc < 40 && imc >= 35){
      resetBorders();
      let component = document.getElementById("obesidade2");
      component.classList.add("stylized");
    }
    else if (imc < 35 && imc >= 30){
      resetBorders();
      let component = document.getElementById("obesidade1");
      component.classList.add("stylized");
    }
    else if (imc < 30 && imc >= 25){
      resetBorders();
      let component = document.getElementById("acima-peso");
      component.classList.add("stylized");
    }
    else if (imc < 25 && imc >= 18.6){
      resetBorders();
      let component = document.getElementById("peso-normal");
      component.classList.add("stylized");
    }
    else if (imc < 18.6){
      resetBorders();
      let component = document.getElementById("abaixo-peso");
      component.classList.add("stylized");
    }
}