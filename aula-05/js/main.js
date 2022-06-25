function clicou() {
    //alert("obrigado por clicar !!")
    document.getElementById("agradecimento").innerHTML = "Valeu por <b>clicar</b>"
    //alert("valeu")
    
}
function redirecionar(){
    open("https://globallabs.academy/")
    //location.href ="https://globallabs.academy/"
}

/*function soma(n1,n2){
    return n1+n2
}

function validaIdade(idade){
    let validar
    if (idade >= 18){
        validar =true
        alert(`Com a idade de ${idade} anos a pessoa é MAIOR`)}
               
        
    else{
        validar = false
        alert(`Com a idade de ${idade} anos a pessoa é MENOR` )}
    
    return validar }


let idade = prompt("Qual sua idade ? :")

    validaIdade(idade)
    
        

/*function setReplace(frase, nome, novo_nome){
return frase.replace(nome, novo_nome)
}
alert(soma(5,10))
alert(setReplace("vai japao", "japao", "Brasil"))*/