const obterElementoHTML = (elemento) => document.getElementById(elemento);

const getNumeroSecreto = () => Math.floor(Math.random() * 101);
let numeroSecreto = getNumeroSecreto();
let tentativas = 10;
const MAX_TENTATIVAS = 10;

const inputChute = obterElementoHTML("chute");
const divInputContainer = obterElementoHTML("input");
const tentativasRestantes = obterElementoHTML("tentativasRestantes");
const resposta = obterElementoHTML("resposta");
const dicas = obterElementoHTML("dicas");
const fim = obterElementoHTML("fim");
const reiniciarDiv = obterElementoHTML("reiniciar");
const fimDeJogo = (vitoria = false) => {
    divInputContainer.style.display = "none";

    reiniciarDiv.style.display = "block";

    resposta.textContent = "";
    dicas.textContent = "";
    tentativasRestantes.textContent = "";

    if (vitoria) {
        fim.style.color = "#58f758";
        fim.textContent = "🎉 Você acertou!";
    } else {
        fim.style.color = "#ff4a4a";
        fim.textContent = `😢 Você perdeu! O número secreto era ${numeroSecreto}.`;
    }
}

const Chutar = () => {
    let chute = inputChute.value;
    const numeroChutado = parseInt(chute);

    if (isNaN(numeroChutado) || numeroChutado < 0 || numeroChutado > 100) {
        inputChute.value = "";
        return resposta.textContent = "Digite um número válido entre 0 e 100";
    }

    tentativas--;

    if (numeroChutado === numeroSecreto) {
        fimDeJogo(true);
        return;

    } else {
        resposta.textContent = "❌ Tente novamente";

        if (numeroChutado < numeroSecreto) {
            dicas.innerHTML = `Dica: 🔼 O número secreto é <span style="color:#58f758"
            >MAIOR</span>.`;
        } else {
            dicas.innerHTML = `Dica: 🔼 O número secreto é <span style="color:#ff4a4a"
            >MENOR</span>.`;
        }

        if (tentativas === 0) {
            fimDeJogo(false);
            return;
        }
    }

    inputChute.value = "";
    tentativasRestantes.textContent = `Tentativas restantes: ${tentativas} `;
}

addEventListener("keydown", (event) => {
    if (event.key === "Enter" && divInputContainer.style.display !== "none") {
        Chutar();
    }
})

const reiniciar = () => {
    numeroSecreto = getNumeroSecreto();
    tentativas = MAX_TENTATIVAS;

    resposta.textContent = "";
    dicas.textContent = "";
    fim.textContent = "";
    inputChute.value = "";
    tentativasRestantes.textContent = '';

    divInputContainer.style.display = "block";
    inputChute.focus();
}