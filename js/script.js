
//todo Scrivi un programma che stampi i numeri da 1 a 100,
//todo ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
//todo Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

// Ciclo
for (i= 1; i <= 100; i++){
    //Numero divisibile per 3 e per 5
    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log('FizzBuzz');
    }
    //Numero divisibile per 3
    else if (i % 3 == 0){
        console.log('Fizz');
    }
    //Numero divisibile per 5
    else if (i % 5 == 0){
        console.log('Buzz');
    }
    
    else {
        console.log(i);
    }


    
}

