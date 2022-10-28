export function calcularImc(){

    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;

    const alterarResultado = document.querySelector('.resultado-imc');
    const alterarMinMax = document.querySelector('.minmax-imc');
    const alterarTipo = document.querySelector('.tipo-peso');
    const alterarTexto = document.querySelector('.texto-de-atencao');
    const alterarObservacao = document.querySelector('observacao');


    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        alterarResultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}`;
        alterarMinMax.innerHTML = "IMC abaixo de 18.5";
        alterarTipo.innerHTML = "Abaixo do Peso";
        alterarTexto.innerHTML = "Você está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico.";
        alterarObservacao.innerHTML = "* Cálculos válidos apenas para pessoas adultas.";  
    } else if (imc >= 18.5 && imc <= 24.99) {
        alterarResultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}`;
        alterarMinMax.innerHTML = "IMC entre 18.5 e 24.9";
        alterarTipo.innerHTML = "Peso Normal";
        alterarTexto.innerHTML = "Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.";
        alterarObservacao.innerHTML = "* Cálculos válidos apenas para pessoas adultas."; 
    } else if (imc >= 25 && imc <= 29.99) {
        alterarResultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}`;
        alterarMinMax.innerHTML = "IMC entre 25.0 e 29.9";
        alterarTipo.innerHTML = "Sobrepeso";
        alterarTexto.innerHTML = "Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.";
        alterarObservacao.innerHTML = "* Cálculos válidos apenas para pessoas adultas."; 
    } else if (imc >= 30 && imc <= 39.99) {
        alterarResultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}`;
        alterarMinMax.innerHTML = "IMC entre 30.0 e 39.9";
        alterarTipo.innerHTML = "Obesidade";
        alterarTexto.innerHTML = "Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você.";
        alterarObservacao.innerHTML = "* Cálculos válidos apenas para pessoas adultas."; 
    } else if (imc >= 40) {
        alterarResultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}`;
        alterarMinMax.innerHTML = "IMC acima de 40";
        alterarTipo.innerHTML = "Obesidade Grave";
        alterarTexto.innerHTML = "Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo.";
        alterarObservacao.innerHTML = "* Cálculos válidos apenas para pessoas adultas."; 
    }
}