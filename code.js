const obterElementoHTML = (elemento) => document.getElementById(elemento)

const numeroSecreto = Math.floor(Math.random() * 101);
let tentativas = 10;

let tentativasRestantes = obterElementoHTML("tentativasRestantes")
const resposta = obterElementoHTML("resposta")
const dicas = obterElementoHTML("dicas")
const fim = obterElementoHTML("fim")
const input = obterElementoHTML("input")

const Chutar = () => {
    const chute = obterElementoHTML("chute").value

    if (!(chute >= 0 && chute <= 100))
        return resposta.textContent = "Digite um numero entre 0 e 100"

    tentativas--

    if (numeroSecreto == chute) {
        resposta.textContent = "";
        dicas.textContent = "";
        tentativasRestantes.textContent = ""
        input.style.display = "none"
        fim.style.color = "#58f758"
        return fim.textContent = "🎉 Voce acerto!"
    } else {
        resposta.textContent = "❌ Tente novamente"
    }

    if (chute < numeroSecreto) {
        dicas.textContent = "Dica: 🔼 O número secreto é maior.";
    } else {
        dicas.textContent = "Dica: 🔽 O número secreto é menor.";
    }

    if (tentativas == 0) {
        resposta.textContent = "";
        dicas.textContent = "";
        tentativasRestantes.textContent = ""
        input.style.display = "none"
        fim.style.color = "#ff4a4a"
        return fim.textContent = `😢 Você perdeu! O número secreto era ${numeroSecreto}.`
    }
    console.log(numeroSecreto)
    tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`
}

