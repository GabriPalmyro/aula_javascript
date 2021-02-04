//var nome = "Gabriel Palmyro"
//var idade = 19
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo"
//console.log("Nome: " + nome + "\nIdade: " + idade);
//console.log(frase);

//var lista = [15, 5, 3, 7, 2];
//console.log(lista);
//console.log(lista.length);
//console.log(lista.join(" - "));
//console.log(lista.sort());

//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta.nome + fruta.cor);

/*var frutas = [
    {
        nome:"maça", cor:"vermelha"
    },
    {
        nome:"uva", cor: "roxa"
    },
    {
        nome:"laranja", cor: "laranja"
    }
]
console.log(frutas);
*/

/*var idade = prompt("Qual sua idade?");
if(idade < 18){
    alert("menor de idade");
} else {
    alert("maior de idade");
}*/

//var data Atual = new Date();
//alert("Hoje é dia "+ dataAtual.getDay()+ " do " + (dataAtual.getMonth()+1) + " de " + dataAtual.getFullYear());

/*function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5,10));*/

function clicou(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

}

function redirecionar(){
    //window.open("https://github.com/GabriPalmyro/aula_javascript/tree/main");
    window.location.href = "https://github.com/GabriPalmyro/aula_javascript/tree/main";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}