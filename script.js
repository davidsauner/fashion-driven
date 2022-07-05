let modelo;
let gola;
let tecido;

function selecionacamisa(borda , nome){
    let camisa = document.querySelector('.selecionado')
    modelo = nome
    if(camisa !== null){
        camisa.classList.remove('selecionado')
    }
    
    borda.classList.add('selecionado')
}
function selecionagola(bgola , nome){
    let camisagola = document.querySelector('.golinha .selecionado')
    gola = nome
    if(camisagola !== null){
        camisagola.classList.remove('selecionado')
        
    }
    
    bgola.classList.add('selecionado')
}

function selecionatecido(tecidin , nome){
    let tecidao = document.querySelector('.tecido .selecionado')
    tecido = nome

    if(tecidao !== null){
        tecidao.classList.remove('selecionado')
        
    }
    
    tecidin.classList.add('selecionado')
}
