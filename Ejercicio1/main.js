
const mostrarForm = () =>{
    let eleccion = document.getElementById("elegir");
    let expresion = eleccion.value; 
    let mostrado = document.getElementById("result")
    let respuesta; 
    if(expresion == 'a'){
            respuesta = 3/2 + 4/3; 
    }
        mostrado.textContent = `Respuesta : ${respuesta}`
        document.getElementById('expresion-b').style.display = expresion === 'b' ? 'block' : 'none';
        document.getElementById('espacio-c').style.display = expresion === 'c' ? 'block' : 'none';
        document.getElementById('espacio-d').style.display = expresion === 'd' ? 'block' : 'none';
        document.getElementById('espacio-e').style.display = expresion === 'e' ? 'block' : 'none';
        document.getElementById('espacio-f').style.display = expresion === 'f' ? 'block' : 'none';
}
//expresion b
document.getElementById("valor1").addEventListener('submit', function(event){
     // Mostrar los campos de entrada para x e y
    event.preventDefault();
     let res;
     document.getElementById('expresion-b').style.display = 'block';
     const x = parseInt(document.getElementById('x').value);
     const y = parseInt(document.getElementById('y').value);
     res = 1 / (x - 5) - 3 * x * y / 4;
    let mostrado = document.getElementById("result");
    mostrado.textContent = `Respuesta : ${res}`
})
//expresion c
document.getElementById("valor2").addEventListener('submit', function(event){
    // Mostrar los campos de entrada para x e y
   event.preventDefault();
    let res;
                // Mostrar los campos de entrada para a, b, c, d,e,f,g,h,j
                const aC = parseFloat(document.getElementById('a-c').value);
                const bC = parseFloat(document.getElementById('b-c').value);
                const cC = parseFloat(document.getElementById('c-c').value);
                const dC = parseFloat(document.getElementById('d-c').value);
                const eC = parseFloat(document.getElementById('e-c').value);
                const fC = parseFloat(document.getElementById('f-c').value);
                const gC = parseFloat(document.getElementById('g-c').value);
                const hC = parseFloat(document.getElementById('h-c').value);
                const jC = parseFloat(document.getElementById('j-c').value);
                res = aC * aC / (bC - cC) + (dC - eC) / (fC - gC * hC / jC);
   let mostrado = document.getElementById("result");
   mostrado.textContent = `Respuesta : ${res}`
})
//expresion d
document.getElementById("valor3").addEventListener('submit', function(event){
    // Mostrar los campos de entrada para x e y
   event.preventDefault();
    let res;
     // Realiza los cálculos para el ejercicio m, n, p
     const mD = parseFloat(document.getElementById('m-d').value);
     const nD = parseFloat(document.getElementById('n-d').value);
     const pD = parseFloat(document.getElementById('p-d').value); 
     res = (mD / nD) + pD;
   let mostrado = document.getElementById("result");
   mostrado.textContent = `Respuesta : ${res}`
})

//expresion e
document.getElementById("valor4").addEventListener('submit', function(event){
    // Mostrar los campos de entrada para x e y
   event.preventDefault();
    let res;
                  // Realiza los cálculos para el ejercicio m, n, p, q,r,s
                  const mE = parseFloat(document.getElementById('m-e').value);
                  const nE = parseFloat(document.getElementById('n-e').value);
                  const pE = parseFloat(document.getElementById('p-e').value); 
                  const qE = parseFloat(document.getElementById('q-e').value); 
                  const rE = parseFloat(document.getElementById('r-e').value); 
                  const sE = parseFloat(document.getElementById('s-e').value); 
                  res= (mE + nE / pE) / (qE - rE / sE);
   let mostrado = document.getElementById("result");
   mostrado.textContent = `Respuesta : ${res}`
})

//expresion f
document.getElementById("valor5").addEventListener('submit', function(event){
    // Mostrar los campos de entrada para x e y
   event.preventDefault();
    let res;
                    // Realiza los cálculos para el ejercicio a,b,c,d,s,e,f,g,h
                    const aF = parseFloat(document.getElementById('a-f').value);
                    const bF = parseFloat(document.getElementById('b-f').value);
                    const cF = parseFloat(document.getElementById('c-f').value); 
                    const dF = parseFloat(document.getElementById('d-f').value); 
                    const eF = parseFloat(document.getElementById('e-f').value); 
                    const fF = parseFloat(document.getElementById('f-f').value); 
                    const gF = parseFloat(document.getElementById('g-f').value); 
                    const hF = parseFloat(document.getElementById('h-f').value); 
                    res = (3 * aF + bF) / (cF - (dF + 5 * eF) / (fF + gF / (2 * hF))) ;
   let mostrado = document.getElementById("result");
   mostrado.textContent = `Respuesta : ${res}`
})