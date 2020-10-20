
//todo Scrivi un programma che stampi i numeri da 1 a 100,
//todo ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
//todo Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

// Variabili
var numeri = [];
var somma = 0;

// Ciclo
for (i= 0; i < 100; i++){
    //Numero divisibile per 3 e per 5
    if ((numeri % 3 == 0) && (numeri % 5 == 0)){
        console.log('FizzBuzz');
    }
    //Numero divisibile per 3
    else if (numeri % 3 == 0){
        console.log('Fizz');
    }
    //Numero divisibile per 5
    else if (numeri % 5 == 0){
        console.log('Buzz');
    }
    
    else {
        console.log(numeri);
    }

    numeri++;
    
}

