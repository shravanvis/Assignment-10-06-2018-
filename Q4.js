// 4. Write a JavaScript function to format a number up to specified decimal places.

function format_decimals(a,b){
    if((typeof a !== 'number') || (typeof b !== 'number'))
        return false
            a = parseFloat(a)
            return a.toFixed(b)
    }


console.log(format_decimals(12.23334,3))


