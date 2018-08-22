let escolha = function() {
     let inputNome = document.getElementById('inputNome');
     let inputEmpresa = document.getElementById('inputEmpresa');
     let inputnotaFis = document.getElementById('inputnotaFis');
     let inputDate = document.getElementById('inputDate');


     document.getElementById("text").innerHTML = "Você selecionou:" + inputNome;
     document.getElementById("legenda").innerHTML = "Você selecionou:" + inputEmpresa;
     document.getElementById("texts").innerHTML = "Você selecionou:" + inputnotaF;
     document.getElementById("txt").innerHTML = "Você selecionou:" + inputData;
 }

 let validation = function() {
     let inputNome = document.getElementById('inputNome');
     let inputEmpresa = document.getElementById('inputEmpresa');
     let inputnotaF = document.getElementById('inputnotaF');
     let inputData = document.getElementById('inputData');


     let formulario = [inputNome, inputEmpresa, inputnotaF, inputData];

     if (formulario[i]).value === '') {

     alert("Preencha os Campos");

 }

 else {

     alert("Dados Enviados");

 }

 }
