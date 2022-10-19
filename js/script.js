window.onload = () => {
    
    const btnDarkMode = document.querySelector('#mode');

    btnDarkMode.addEventListener('click', () => {
        const principal = document.querySelector('.container-principal');
        const cabecalho = document.querySelector('.cabecalho');
        const buscar = document.querySelector('#buscar');
        const darkMode = document.querySelector('#mode');
        const iconMode = document.querySelector('.icon-mode');
        const funcionalidades = document.querySelector('.funcionalidades');
        const altura = document.querySelector('#altura');
        const peso = document.querySelector('#peso');
        const sobreImc = document.querySelector('.imc-sobre');
        const btnCalcular = document.querySelector('#calcular');
        const cadastroEmail = document.querySelector('#email');
        const btnEmail = document.querySelector('#btn-email');
        const cadastro = document.querySelector('.cadastro');
        const rodape = document.querySelector('.rodape');

        const bemVindo = document.querySelector('.bem-vindo');
        const historicoRemedios = document.querySelector('.historico-remedios');


        const dipirona = document.querySelector('.dipirona');
        const dorflex = document.querySelector('.dorflex');
        const valerimed = document.querySelector('.valerimed');
        const viagra = document.querySelector('.viagra');
        const paracetamol = document.querySelector('.paracetamol');
        const ritalina = document.querySelector('.ritalina');
        const rivotril = document.querySelector('.rivotril');
        const luftal = document.querySelector('.luftal');
        const centrum = document.querySelector('.centrum');
        const seakalm = document.querySelector('.seakalm');


        const tituloMarcas = document.querySelector('.marcas');
        const containerEmpresas = document.querySelector('.empresas');

        const containerImc = document.querySelector('.imc');

        const tituloSobre = document.querySelector('.sobre');
        const sobreWiki = document.querySelector('.sobreWiki');

        const saude = document.querySelector('.saude-todo-dia');
        const containerSaude = document.querySelector('.container-saude');

        const medicamentos = document.querySelector('.medicamentos');
        const containerMed = document.querySelector('.container-med');

        const posto = document.querySelector('.posto-de-saude');
        const containerPosto = document.querySelector('.container-posto');

        const vitamedic = document.querySelector('.vitamedic');
        const bayer = document.querySelector('.bayer');
        const neo = document.querySelector('.neo');
        const boehringer = document.querySelector('.boehringer');
        const biolab = document.querySelector('.biolab');


        
        
        principal.classList.toggle('dark-principal');
        cabecalho.classList.toggle('dark-cabecalho');
        buscar.classList.toggle('dark-buscar');
        darkMode.classList.toggle('dark-mode');

        if (iconMode.textContent == 'mode_night'){
            iconMode.textContent = 'light_mode';
        } else if (iconMode.textContent == 'light_mode'){
            iconMode.textContent = 'mode_night';
        }


        funcionalidades.classList.toggle('dark-funcionalidades');
        altura.classList.toggle('dark-entradaDados');
        peso.classList.toggle('dark-entradaDados');
        sobreImc.classList.toggle('dark-imcSobre');
        btnCalcular.classList.toggle('dark-btnCalcular');

        cadastro.classList.toggle('dark-cadastro')
        cadastroEmail.classList.toggle('dark-email');
        btnEmail.classList.toggle('dark-btnEmail');

        bemVindo.classList.toggle('dark-bottom');
        bemVindo.classList.toggle('dark-right');
        bemVindo.classList.toggle('dark-left');

        historicoRemedios.classList.toggle('dark-border');        
        tituloMarcas.classList.toggle('dark-bottom');
        containerEmpresas.classList.toggle('dark-bottom');



        dipirona.classList.toggle('dark-remedio');
        dipirona.classList.toggle('dark-bottom');
        dipirona.classList.toggle('dark-right');
        dipirona.classList.toggle('dark-left');

        dorflex.classList.toggle('dark-remedio');
        dorflex.classList.toggle('dark-bottom');
        dorflex.classList.toggle('dark-right');
        dorflex.classList.toggle('dark-left');

        valerimed.classList.toggle('dark-remedio');
        valerimed.classList.toggle('dark-bottom');
        valerimed.classList.toggle('dark-right');
        valerimed.classList.toggle('dark-left');

        viagra.classList.toggle('dark-remedio');
        viagra.classList.toggle('dark-bottom');
        viagra.classList.toggle('dark-right');
        viagra.classList.toggle('dark-left');

        paracetamol.classList.toggle('dark-remedio');
        paracetamol.classList.toggle('dark-bottom');
        paracetamol.classList.toggle('dark-right');
        paracetamol.classList.toggle('dark-left');

        ritalina.classList.toggle('dark-remedio');
        ritalina.classList.toggle('dark-bottom');
        ritalina.classList.toggle('dark-right');
        ritalina.classList.toggle('dark-left');

        rivotril.classList.toggle('dark-remedio');
        rivotril.classList.toggle('dark-bottom');
        rivotril.classList.toggle('dark-right');
        rivotril.classList.toggle('dark-left');

        luftal.classList.toggle('dark-remedio');
        luftal.classList.toggle('dark-bottom');
        luftal.classList.toggle('dark-right');
        luftal.classList.toggle('dark-left');

        centrum.classList.toggle('dark-remedio');
        centrum.classList.toggle('dark-bottom');
        centrum.classList.toggle('dark-right');
        centrum.classList.toggle('dark-left');

        seakalm.classList.toggle('dark-remedio');
        seakalm.classList.toggle('dark-bottom');
        seakalm.classList.toggle('dark-right');
        seakalm.classList.toggle('dark-left');





        containerImc.classList.toggle('dark-right');

        tituloSobre.classList.toggle('dark-bottom')
        sobreWiki.classList.toggle('dark-bottom');

        rodape.classList.toggle('dark-rodape');


        saude.classList.toggle('dark-bordaAzul');
        containerSaude.classList.toggle('dark-containerFuncoes');

        medicamentos.classList.toggle('dark-bordaAzul');
        containerMed.classList.toggle('dark-containerFuncoes');

        posto.classList.toggle('dark-bordaAzul');
        containerPosto.classList.toggle('dark-containerFuncoes');

        vitamedic.classList.toggle('dark-bordaAzul');
        bayer.classList.toggle('dark-bordaAzul');
        neo.classList.toggle('dark-bordaAzul');
        boehringer.classList.toggle('dark-bordaAzul');
        biolab.classList.toggle('dark-bordaAzul');


    })
}