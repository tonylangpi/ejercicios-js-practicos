
document.getElementById("evaluar").addEventListener("submit", function(event){
    event.preventDefault(); 
     let num1 = parseFloat(document.getElementById("n1").value);
     let num2 = parseFloat(document.getElementById("n2").value);
     let mostrar = document.getElementById("result"); 
     if(num1>num2) {mostrar.textContent = `el numero mayor es ${num1} y el numero menor es ${num2}`;}
     else if(num2>num1) {mostrar.textContent = `el numero mayor es ${num2} y el numero menor es ${num1}`;}
     else if(num1==num2) {mostrar.textContent = `Ambos números son iguales`;}
})

const limpiar = () => {
    document.getElementById('result').textContent = "";
    document.getElementById('evaluar').reset();
}