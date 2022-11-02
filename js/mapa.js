export function abrirMapa() {
    
    const containerPrincipal = document.querySelector('.container-principal');
    const containerMapa = document.querySelector('.container-mapa');

    containerPrincipal.classList.add('ativarOpacidade');
    containerMapa.classList.add('boxMap');
}

export function fecharMapa() {
    const containerPrincipal = document.querySelector('.container-principal');
    const containerMapa = document.querySelector('.container-mapa');

    containerPrincipal.classList.remove('ativarOpacidade');
    containerMapa.classList.remove('boxMap'); 
}