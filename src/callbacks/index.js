function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

 console.log(calc(6,2,sum));


 //trabajar con tiempos 

 function date(callback){
     console.log(new Date);
     setTimeout(function(){
        let date = new Date;
        callback(date);
     },8000)
 }
//ahora la funciona para imprimir los valores: 
function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);

//para trabajar en node:
//npm install xmlhttprequest --save  
