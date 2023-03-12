/*  
Objetivo - clicar o botão e alterar a imagem

- passo 1: encontrar o elemento html (botao) w (imagem)

- passo 2: identificar o clique do usuário

- passo 3: desmarcar o botão anterior

- passo 4: marcar o botão atual

- passo 5: esconder a imagem anterior

- passo 6: linkar com a imagem correspondente
*/

// - passo 1: encontrar o elemento html (botao) w (imagem)
const botoesCarossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// - passo 2: identificar o clique do usuário
botoesCarossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        selecionarBotaoCarossel(botao);

        esconderImagemAtiva();

        mostrarImagemSelecionada(indice);
    })
})

function mostrarImagemSelecionada(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}