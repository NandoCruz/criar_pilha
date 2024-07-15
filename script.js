const btn_limpar = document.querySelector('.btn_limpar_pilha')
const btn_adicionar = document.querySelector('.btn_push')
const btn_remover = document.querySelector('.btn_pop')
const btn_valor_topo = document.querySelector('.btn_peek')

let nome = document.querySelector('#name')
let pilha1 = document.querySelector('.pilha1')
let pilha2 = document.querySelector('.pilha2')
let pilha3 = document.querySelector('.pilha3')
let pilha4 = document.querySelector('.pilha4')
let pilha5 = document.querySelector('.pilha5')

const topo = document.querySelector('.topo')

let lista = []
let novaLista = [0]

function adicionarNumeroLista(){

    if(novaLista == ""){
        alert('Digite um número')
    } else if(novaLista <= 4){
        const valor_nome = nome.value
        novaLista = lista.push(valor_nome)
    } else {
        alert('Não pode mais adicionar na lista.')
    }

    pilha1.textContent = lista[0]
    pilha2.textContent = lista[1]
    pilha3.textContent = lista[2]
    pilha4.textContent = lista[3]
    pilha5.textContent = lista[4]
}

function removerNumeroLista(){

    novaLista = lista.pop()

    if(novaLista == undefined){
        lista = [];
        novaLista = [0];
        topo.textContent = ''
        nome.value = ''
    }

    pilha1.textContent = lista[0]
    pilha2.textContent = lista[1]
    pilha3.textContent = lista[2]
    pilha4.textContent = lista[3]
    pilha5.textContent = lista[4]
}

function mostrarValorTopo(){

    for(let i = 0; i < lista.length; i++){
        topo.textContent = lista[lista.length -1]   
    }
}

function limparTudo(){
    pilha1.textContent = ''
    pilha2.textContent = ''
    pilha3.textContent = ''
    pilha4.textContent = ''
    pilha5.textContent = ''
    lista = []
    novaLista = [0]
    topo.textContent = ''
    nome.value = ''
}

btn_adicionar.addEventListener("click", adicionarNumeroLista)
btn_remover.addEventListener("click", removerNumeroLista)
btn_valor_topo.addEventListener("click", mostrarValorTopo)
btn_limpar.addEventListener("click", limparTudo)
