var number = 0;

for(i = 1; i <= 100; i++){
    var number = i;

    if( number % 3 === 0 && number % 5 === 0 ){
        number = 'FizzBuzz';
        console.log(number);

    } else if (number % 5 === 0){
        number = 'Buzz';
        console.log(number);
    
    } else if (number % 3 === 0){
        number = 'Fizz';
        console.log(number);

    } else{
        console.log(number); 
    }
}


/* PARTE BONUS */
var randomNumber = Math.floor(Math.random() * 100);
console.log('Questo numero è random: ' + randomNumber);
document.getElementById('print').innerHTML = '' + randomNumber;

if( randomNumber % 3 === 0 && randomNumber % 5 === 0 ){
    randomNumber = 'Ed è : FizzBuzz';
    console.log(randomNumber);
    document.getElementById('type').innerHTML = 'FizzBuzz';

} else if (randomNumber % 5 === 0){
    randomNumber = 'Ed è : Buzz';
    console.log(randomNumber);
    document.getElementById('type').innerHTML = 'Buzz';

} else if (randomNumber % 3 === 0){
    randomNumber = 'Ed è : Fizz';
    console.log(randomNumber);
    document.getElementById('type').innerHTML = 'Fizz';

} else{
    console.log('é un numero normale : ' + randomNumber);
    document.getElementById('type').innerHTML = 'Generico';
}
