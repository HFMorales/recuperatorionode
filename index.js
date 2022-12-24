const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};
app.get('/', function(req, res) {
 respuesta = {
  error: true,
  codigo: 200,
  mensaje: 'Punto de inicio'
 };
 res.send(respuesta);
});


// mayor de los numeros 
app.post('/endpointuno', function (req, res) {
    
const numeros = req.body;
let max = 0;
for ( let numero of numeros ) {
  if (max < numero)
    max = numero;
}

respuesta = {
mensaje: 'Correcto',
data:'El numero mayor es: ' + max
};
    
    
res.send(respuesta);
});


// menor de os numeros

app.post('/endpointdos', function (req, res) {
    
    const numeros = req.body;
    

    var min = numeros[0];

    for (var i = 0; i < numeros.length ; i++) {
        if (numeros[i] < min) {
            min = numeros[i];
        }
    }
    
    respuesta = {
    mensaje: 'Correcto',
    data:'El numero menor es: ' + min
    };
        
        
    res.send(respuesta);
});



//  numeros pares

app.post('/endpointtres', function (req, res) {  

    const numeros = req.body;
    let pares = [];

    for(let i= 0;i<numeros.length;i++){
        if(numeros[i]%2==0){
            pares.push(numeros[i]);
        }
        

    }   

    respuesta = {
    mensaje: 'Correcto',
    data:'Los numeros pares son: ' + pares
    };
        
        
    res.send(respuesta);
});



//  numeros impares

app.post('/endpointcuatro', function (req, res) {  

    const numeros = req.body;
    let impares = [];

    for(let i= 0;i<numeros.length;i++){
        if(numeros[i]%2!=0){
            impares.push(numeros[i]);
        }
        

    }   

    respuesta = {
    mensaje: 'Correcto',
    data:'Los numeros impares son: ' + impares
    };
        
        
    res.send(respuesta);
});


//  numeros al cuadrado

app.post('/endpointcinco', function (req, res) {  

    const numeros = req.body;
    let cuadrado = [];

    for(let i= 0;i<numeros.length;i++){
        
        cuadrado.push(numeros[i]*numeros[i]);
        

    }   

    respuesta = {
    mensaje: 'Correcto',
    data:'Los numeros elevados al cuadrado son: ' + cuadrado
    };
        
        
    res.send(respuesta);
});

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});


