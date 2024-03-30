function isPrime(num) {
if (num<=1)
return false ;
if (num %2=== 0||num%3===0)
return false ;
if (num<=3)
return true ;
if (num %2===1)
return true ;
}

//Filter prime numbers from array of numbers
function findPrime(numbers) {
    return numbers.filter(num => isPrime(num)) ;

}

// Declare array andrun to select the prime numbers
const inputArray = [10,11,12,13,14,15,16,17] ;
const primeNumbers = findPrime(inputArray) ;

console.log(primeNumbers);