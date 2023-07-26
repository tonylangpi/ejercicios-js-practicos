
let sueldito = 0;

function resetTable() {
  location.reload();
}
function calcAumento() {
  let aumento = 0;
  
  if(sueldito >= 3500 && sueldito <= 6000){
      aumento = sueldito * 0.03; 
      sueldito += aumento; 
      const table = document.getElementById("customers");
      table.innerHTML += "<tr><td> Q."+ sueldito +"</td></tr>";
      document.getElementById("estado").textContent = `Este sueldo si fue sujeto a un aumento de Q. ${aumento} (3%)`
  }else if(sueldito >= 6001 && sueldito <= 10000){
    aumento = sueldito * 0.07; 
    sueldito += aumento; 
    const table = document.getElementById("customers");
    table.innerHTML += "<tr><td> Q."+ sueldito +"</td></tr>";
    document.getElementById("estado").textContent = `Este sueldo si fue sujeto a un aumento de ${aumento} (7%)`
  }else if(sueldito >= 10001 && sueldito <= 15000){
    aumento = sueldito * 0.09; 
    sueldito += aumento; 
    const table = document.getElementById("customers");
    table.innerHTML += "<tr><td> Q."+ sueldito +"</td></tr>";
    document.getElementById("estado").textContent = `Este sueldo si fue sujeto a un aumento de Q. ${aumento} (9%)`
  }else{
    const table = document.getElementById("customers");
    table.innerHTML += "<tr><td> Q."+ sueldito +"</td></tr>";
    document.getElementById("estado").textContent = `Este sueldo No fue sujeto a un aumento`;
  }
}
//Eventos del  DOM
document.getElementById("evaluar").addEventListener("submit", function (event) {
  event.preventDefault();
  const sueldo = parseFloat(document.getElementById("sueldo").value);
  sueldito = sueldo;
  document.getElementById(
    "mensaje"
  ).textContent = `El sueldo ingresado fue Q. ${sueldo}`;
});
