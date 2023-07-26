const modal = document.getElementById("myModal");
const cerrar = document.getElementsByClassName("close")[0];
const parrafoModal = document.querySelector('.nombre-usuario'); //selecciono el parrafo par añadirle el nombre de la persona que es dueña de la tarjeta.
let contador = 0; 
cerrar.onclick = function () {
    modal.style.display = "none";
  };
function abrirModal() {
  modal.style.display = "flex";
}

//Eventos del  DOM
document.getElementById('button-plus').addEventListener('click', function(event){
    contador += 1; 
    document.getElementById("cantidad-pizzas").textContent = `${contador}`
    event.preventDefault();
});

document.getElementById('button-minus').addEventListener('click', function(event){
    if(contador == 0){
        document.getElementById("cantidad-pizzas").textContent = `${contador}`
    event.preventDefault();
    }else{
        
    contador -= 1; 
    document.getElementById("cantidad-pizzas").textContent = `${contador}`
    event.preventDefault();

    }
});