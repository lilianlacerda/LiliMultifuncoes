let dado = document.getElementById("dado");
let gifDado = document.getElementById("gifDado");
let resultado = document.getElementById("resultado");
let rolarDado = document.getElementById("rolarDado");

rolarDado.addEventListener("click", () => {
    dado.classList.remove("escondido");
    gifDado.style.display = "block";
    resultado.textContent = "";

    setTimeout(()=> {
        gifDado.style.display = "none";
        let numero = Math.floor(Math.random() * 6) + 1;
        resultado.textContent = numero;
    }, 500);

});

dado.classList.add("escondido");