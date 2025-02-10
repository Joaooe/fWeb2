let banners=["./aulas/aula12/img/icons8-dinossauro-100.png","aulas/aula12/img/icons8-filhote-de-cachorro-48.png"]
let cont=0;

function trocaBanner(){
cont=(cont+1)%2;
document.querySelector("#imgbanner").src= banners[cont]


}

