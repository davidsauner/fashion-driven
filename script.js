// let nome = prompt("insira seu nome para montar sua camiseta")
// function verificaNome(){
//     if(nome === ""){
//         alert("insira um nome")
//         location.reload()
//     }
// }
// verificaNome()

let modelo;
let gola;
let tecido;
let roupas;
let md1;
let gl1;
let tc1;

function selecionacamisa(borda , nome ,m1){
    let camisa = document.querySelector(' .camisa .selecionado')
    modelo = nome;
    md1 = m1;
    if(camisa !== null){
        camisa.classList.remove('selecionado')
    }
    
    borda.classList.add('selecionado')
    
}
function selecionagola(bgola , nome , g1){
    let camisagola = document.querySelector('.golinha .selecionado')
    gola = nome;
    gl1 = g1;
    if(camisagola !== null){
        camisagola.classList.remove('selecionado')
        
    }
    
    bgola.classList.add('selecionado')
}

function selecionatecido(tecidin , nome , t1){
    let tecidao = document.querySelector('.tecido .selecionado')
    tecido = nome;
    tc1 = t1;
    if(tecidao !== null){
        tecidao.classList.remove('selecionado')
        
    }
    unlockbutton()
    tecidin.classList.add('selecionado')
}
function unlockbutton(){
    if(modelo && tecido && gola){
   const botao = document.querySelector("button")
   botao.disabled = false
   botao.classList.remove("botaovermelho")
 
}
console.log(modelo)
console.log(gola)
console.log(tecido)
}



function finalizapedido(){
   let url = document.querySelector(".link").value 
    if(url === ""){
        alert("colocar uma imagem de refencia")
        return
    } try {
        let urll = new URL(url)
        console.log("Valid URL!")
      } catch(err) {
          console.log("Invalid URL!")
          alert("coloque uma url valida")
          return
      }

     roupas = {
     model: modelo,
	 neck: gola,
	 material: tecido,
	 image: url,
     owner: nome,
     author: nome
    }
    console.log(roupas)

    alert(`Pedido de uma camiseta modelo ${md1}, com ${gl1}, e tecido de ${tc1}.`)

 enviarmodelo()
}
function enviarmodelo(){
let enviando  = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', roupas)
enviando.then(enviou)
enviando.catch(naoEnviou)
}
function enviou(){
    alert("encomenda confirmada")
}
function naoEnviou(){
    alert("Erro ao processar a encomenda")
}