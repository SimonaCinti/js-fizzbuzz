
//todo Scrivi un programma che stampi i numeri da 1 a 100,
//todo ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
//todo Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

var numeri = [];
var somma = 0;


for (i= 0; i < 100; i++){

    if ((numeri % 3 == 0) && (numeri % 5 == 0)){
        console.log('FizzBuzz');
    }

    else if (numeri % 3 == 0){
        console.log('Fizz');
    }

    else if (numeri % 5 == 0){
        console.log('Buzz');
    }
    
    else {
        console.log(numeri);
    }
    numeri++;
    
}

