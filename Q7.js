// 7. Write a JavaScript function to get the greatest common divisor (gcd) of two integers.

function gcd(a,b){
    if((typeof a == 'number') || (typeof b == 'number')){
        a = Math.abs(a)
        b = Math.abs(b)
        while(b){
            var x = b
            b = a % b
            a = x
        }
        return a
    }
}

console.log(gcd(30,40))