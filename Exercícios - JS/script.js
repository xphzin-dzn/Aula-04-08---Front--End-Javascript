let nome;
let sobrenome;
let junta;
let vezes;

window.alert("Olá! Esse exercício é muito legal");
if (window.confirm("Podes dizer seu nome?")) {
    nome = window.prompt("Qual seu nome?");
    sobrenome = window.prompt("Qual seu sobrenome?");
    junta = nome + " " + sobrenome
    vezes = window.prompt("How many times do you want to repeat your name my friend?")
    for (c = 0; c < vezes; c++) {
        document.write("<br>" + junta + " ");
    }
}
//Aqui começa exercício 2

else {
    function declarationMed() {
        let n1 = Number(prompt("Digite um Número"));
        let n2 = Number(prompt("Digite mais um número"));
        let n3 = Number(prompt("Digite another number friend"));
        let media = (n1 + n2 + n3) / 3;
        return media;
    }
    window.alert("Calculadora de média");
    let resp = declarationMed();
    document.write(resp);

    function anonimaMed() {
        let n1 = Number(prompt("Digite um Número"));
        let n2 = Number(prompt("Digite mais um número"));
        let n3 = Number(prompt("Digite another number friend"));
        let media = (n1 + n2 + n3) / 3;
        return media;
    }
    alert(anonimaMed);

    function arrowMed(){
        let n1 = Number(prompt("Digite um Número"));
        let n2 = Number(prompt("Digite mais um número"));
        let n3 = Number(prompt("Digite another number friend"));
        let media = (n1 + n2 + n3) / 3;
        return media;
    }
    let console_resp=arrowMed
    console.log(console_resp);
}



