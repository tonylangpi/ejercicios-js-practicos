let contador = 0;
let notas = []
// class nota {
//   constructor(nota) {
//     this.nota = nota;
//   }
// }
// class contar {
//   addNotas(nota) {
//     notas.push(...nota.nota); 
//     console.log(notas);
//     contador += 1;
//     document.getElementById("mensaje").textContent =
//     `Cantidad de Notas ingresadas: ${contador}`; 
//     // const listaProds = document.getElementById("customers");
//     // const element = document.createElement("tr");
//     // element.innerHTML = `
//     //   <td>${nota.nota}</td>
//     //   `;
//     // listaProds.appendChild(element);
//     this.resetForm();
//   }
//   resetForm() {
//     document.getElementById("evaluar").reset();
//   }
// }
function resetTable() {
  location.reload();
}
function calcPromedio(){
    if(notas.length > 5){
        document.getElementById("estado").textContent = "no puedes calcular el promedio pues solo 5 notas se permiten."
    }
    else if(notas.length == 5){
        let promedio ; 
        let sumatoria = notas.reduce(function(acumulador, siguienteValor){ //me suma los elementos del array de int
            return acumulador + siguienteValor;
          }, 0);
        promedio = sumatoria/notas.length; 
        //operador ternario que me valida que el promedio sea mayor a 61 para aprobarlo
        promedio >= 61 ? document.getElementById("estado").textContent = `Haz Aprobado con ${promedio}`: document.getElementById("estado").textContent = `Haz Reprobado con ${promedio}`; 
    const table = document.getElementById("customers");
    notas.forEach((el, index)=>{
        table.innerHTML += "<tr><td>"+ el +"</td></tr>";
      });
    }else{ 
      document.getElementById("estado").textContent = "no puedes calcular el promedio pues solo 5 notas se permiten."
    }
   
}
//Eventos del  DOM
document.getElementById("evaluar").addEventListener("submit", function (event) {
  event.preventDefault();
  const not = parseFloat(document.getElementById("nota").value);
  notas.push(not); 
  contador += 1;
      document.getElementById("mensaje").textContent =
      `Cantidad de Notas ingresadas: ${contador}`; 
      document.getElementById("evaluar").reset();
});
