// 8. Write a JavaScript function to test if a number is a power of 2.

function power(x){
    if(typeof x == 'number'){
    console.log((Math.log(x) / Math.log(2) % 1 === 0))
    }
    else{
        console.log('Invalid Argument')
    }
}

power(8)