//FUNCION REGULAR//

function getNombre(){
    return console.log("Hola Grupo");
}
getNombre();

/******************/
//FUNCION FLECHA//

const getMensaje = () => {
    console.log("Hola Mundo");
}
getMensaje();

/************************/
function calculadora (){
    function sumar (){
        const suma = 2+2;
        return suma;
    }
    
    
    /***************************/
    
    function multiplicar (){
        const multiplicar = 1*2;
        return multiplicar;
    }
    
    const resultadoMultiplicacion = multiplicar();
    console.log(resultadoMultiplicacion);

    /***************************/

    function restar () {
        const resta = 3-1;
        return resta;
    }

    const resultadoResta = restar();
    console.log(resultadoResta);

    /**************************/

    function dividir (n1,n2){
        const division = n1/n2;
        return division;
    }
    const resultadoDivision = dividir();
    console.log(resultadoDivision);

    

    }
    


    /**************************************/

    function suma (numeroUno,numeroDos){
        const suma = numeroUno + numeroDos;
        console.log(suma);
    }
    const num1 = 10;
    const num2 = 20;


    const suma2 = (numeroUno,numeroDos) => {
        const suma = numeroUno + numeroDos;
        console.log(suma);
    }


