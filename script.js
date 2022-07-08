let nome = "";
let confirmanome;
function verificaNome() {
  while (nome === "") {
    nome = prompt("insira seu nome para montar sua camiseta");
  }
  if (nome === null) {
    confirmanome = confirm(
      "Necessario um nome para executar os pedidos, caso queira colocar um nome para compra clique em Ok"
    );
    if (confirmanome) {
      location.reload();
    }
  }
}
verificaNome();
BuscarCamisas();
let modelo;
let gola;
let tecido;
let roupas;
let md1;
let gl1;
let tc1;
let camisetas;
let newmodelo;
let newneck;
let newmaterial;
let pedidoexistente;

function selecionacamisa(borda, nome, m1) {
  let camisa = document.querySelector(" .camisa .selecionado");
  modelo = nome;
  md1 = m1;
  if (camisa !== null) {
    camisa.classList.remove("selecionado");
  }

  borda.classList.add("selecionado");
}
function selecionagola(bgola, nome, g1) {
  let camisagola = document.querySelector(".golinha .selecionado");
  gola = nome;
  gl1 = g1;
  if (camisagola !== null) {
    camisagola.classList.remove("selecionado");
  }

  bgola.classList.add("selecionado");
}

function selecionatecido(tecidin, nome, t1) {
  let tecidao = document.querySelector(".tecido .selecionado");
  tecido = nome;
  tc1 = t1;
  if (tecidao !== null) {
    tecidao.classList.remove("selecionado");
  }
  unlockbutton();
  tecidin.classList.add("selecionado");
}
function unlockbutton() {
  if (modelo && tecido && gola) {
    const botao = document.querySelector("button");
    botao.disabled = false;
    botao.classList.remove("botaovermelho");
  }
}

function finalizapedido() {
  let url = document.querySelector(".link").value;
  if (url === "") {
    alert("Colocar uma imagem de referência");
    return;
  }
  try {
    let urll = new URL(url);
  } catch (err) {
    alert("Coloque uma url valida");
    return;
  }

  roupas = {
    model: modelo,
    neck: gola,
    material: tecido,
    image: url,
    owner: nome,
    author: nome,
  };
  alert(
    `Pedido de uma camiseta modelo ${md1}, com ${gl1}, e tecido de ${tc1}.`
  );

  enviarmodelo();
  limpacampos();
}
function enviarmodelo() {
  let enviando = axios.post(
    "https://mock-api.driven.com.br/api/v4/shirts-api/shirts",
    roupas
  );
  enviando.then(enviou);
  enviando.catch(naoEnviou);
}
function enviou() {
  alert("Encomenda confirmada");
  BuscarCamisas();
}
function naoEnviou() {
  alert("Erro ao processar a encomenda");
}

function BuscarCamisas() {
  let recebendo = axios.get(
    "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
  );
  recebendo.then(recebeu);
  recebendo.catch(naoRecebeu);
}
function recebeu(resposta) {
  camisetas = resposta.data;
  colocacamisetas();
}
function colocacamisetas() {
  let hello = document.querySelector(".roupas");
  hello.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    hello.innerHTML += `<li class="roupa1" onclick="pegacamiseta('${camisetas[i].model}', '${camisetas[i].neck}','${camisetas[i].material}' , '${camisetas[i].image}', '${camisetas[i].owner} ')" >
        <img src="${camisetas[i].image}" alt="">
        <p><span class="creator">Criador: </span><span class="userc">${camisetas[i].owner}</span></p>
    </li>`;
  }
}

function naoRecebeu() {
  alert("Erro ao processar as camisetas");
}
function limpacampos() {
  document.querySelector(".link").value = "";
  document
    .querySelector(".tecido .selecionado")
    .classList.remove("selecionado");
  document
    .querySelector(".golinha .selecionado")
    .classList.remove("selecionado");
  document
    .querySelector(".camisa .selecionado")
    .classList.remove("selecionado");
}
function pegacamiseta(model1, neck1, material1, image1, owner1) {
  pedidoexistente = {
    model: model1,
    neck: neck1,
    material: material1,
    image: image1,
    owner: owner1,
    author: nome,
  };
  let confirma = confirm(
    `Confirma o pedido da camiseta no modelo ${pedidoexistente.model}, na gola em ${pedidoexistente.neck}, e no materail de ${pedidoexistente.material}`
  );

  if (confirma === true) {
    alert("seu pedido esta sendo processado");
    let enviando = axios.post(
      "https://mock-api.driven.com.br/api/v4/shirts-api/shirts",
      pedidoexistente
    );
    enviando.then(envioupedidoExistente);
    enviando.catch(naoEnviouPedido);
  } else {
    alert("pedido cancelado");
  }
}
function envioupedidoExistente() {
  alert("Pedido feito com sucesso");
  BuscarCamisas();
}
function naoEnviouPedido() {
  alert("Falha em executar o pedido tente novamente");
}
