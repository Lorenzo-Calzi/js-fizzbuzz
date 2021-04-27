//un programma che stampi i numeri da 1 a 100
var number = 0;

var name_1;
var name_2;
var name_3;

for(i = 1; i <= 100; i++){
    var number = i;

    if( number % 3 === 0){
        number = 'Fizz';
        console.log(number);

    } else if (number % 5 === 0){
        number = 'Buzz';
        console.log(number);

    } else if ( number % 3 === 0 && number % 5 === 0 ){
        number = 'FizzBuzz';
        console.log(number);

    } else{
        console.log(number);
    }
}


//per i multipli di 3 stampi “Fizz” al posto del numero


//per i multipli di 5 stampi Buzz




//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.