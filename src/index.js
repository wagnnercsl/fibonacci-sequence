'use strict'

const fibonacci = () => {
    let fibonacciSequence = [0,1], currentElement = 0;
    
    for(let i=2; i<=350; i++){
        currentElement = fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i-2];

        if(currentElement > 350) {
            break;
        }
    }
    
    return fibonacciSequence;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
