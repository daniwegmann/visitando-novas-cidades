const turista = prompt("Qual é o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("você já visitou alguma cidade? (Sim/Não")

while (continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade?" (Sim/Não))
}

alert(
    "Turista: " + turista +
    "\nQuantidades de cidades visitadas: " + contagem +
    "\nCidades visitadas: " + cidades
)