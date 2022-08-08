
 const boton1 = document.getElementById("btnsumar");
 boton1.addEventListener("click", sumar);


 //el boton esyara al pendiente cuando el usuariode click y despues realice la funcion 

 function sumar(){
    //ler la variable de los inputs.
    const varnum1= Number(document.getElementById ("num1").value);
    const varnum2= Number(document.getElementById ("num2").value);
    //leer el cuadro div obtenido del id de html
    const imprimirdivresultado = document.getElementById ("divresultado"); 
    //crea una variable para guardar la suma

    const varresultado = varnum1 + varnum2;

     imprimirdivresultado.innerText = varresultado;
}


const boton2 = document.getElementById("btnrestar");
 boton2.addEventListener("click", restar);


 //el boton esyara al pendiente cuando el usuariode click y despues realice la funcion 

 function restar(){
    //ler la variable de los inputs.
    const varnum1= Number(document.getElementById ("nm1").value);
    const varnum2= Number(document.getElementById ("nm2").value);
    //leer el cuadro div obtenido del id de html
    const imprimirdivresultadoo = document.getElementById ("divresultadoo"); 
    //crea una variable para guardar la resta

    const varresultado = varnum1 - varnum2;

     imprimirdivresultadoo.innerText = varresultado;
}



const boton3 = document.getElementById("btnmultiplicar");
 boton3.addEventListener("click", multiplicar);


 //el boton esyara al pendiente cuando el usuariode click y despues realice la funcion 

 function multiplicar(){
    //ler la variable de los inputs.
    const varnum1= Number(document.getElementById ("n1").value);
    const varnum2= Number(document.getElementById ("n2").value);
    //leer el cuadro div obtenido del id de html
    const res = document.getElementById ("res"); 
    //crea una variable para guardar la multiplicacion

    const varresultado = varnum1 * varnum2;

     res.innerText = varresultado;
}

const boton4 = document.getElementById("btndiv");
 boton4.addEventListener("click", dividir);


 //el boton esyara al pendiente cuando el usuariode click y despues realice la funcion 

 function dividir(){
    //ler la variable de los inputs.
    const varnum1= Number(document.getElementById ("nn1").value);
    const varnum2= Number(document.getElementById ("nn2").value);
    //leer el cuadro div obtenido del id de html
    const div= document.getElementById ("div"); 
    //crea una variable para guardar la division

    const varresultado= varnum1 / varnum2;

     div.innerText = varresultado;
}

const boton5 = document.getElementById("btnmostratnumeros");
boton5 = addEventListener("click", mostrar);
function mostrar(){

for( let x=1; x<=100; x=x+1){
    const listado = document.getElementById("listas");
    listado.innerText = " ";
    //codgio para mostrar errores "console.log(x);"
    const lista= document.createElement("li");
    lista.setAttribute("class", "list-group-item mt-1");
    listado.innerText = x;
    listado.appendChild(lista);       
}
}

const boton6 = document.getElementById("")

function compararcali(){
const calificacion = Number(document.getElementById ("numcali").value);
const resultado = document.getElementById("divimprimircal");
if (calificacion >= 8){
   resultado.innerText = "APROBADO";

}
 else {
   resultado.innerText = " REPROBADO";
   const audio= document.getElementById ("audioreprobado");
   audio.play();
 }
}





