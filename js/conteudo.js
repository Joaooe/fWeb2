function validaBusca(){
    if(document.querySelector('#inputlupa').value ==''){
            alert('Não podia ter deixado em branco a buscar!');
            return false;
    }else{
        let pesquisar= document.querySelector("inputlupe")
        document.getElementById("botaopesquisar").addEventListener("click",function(){
        window.open("https://www.google.com.br/?hl=pt-BR"+pesquisar.value,"black");
});

}

}


document.querySelector('#form-busca').onsubmit= validaBusca;