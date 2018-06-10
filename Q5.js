// 5. Write a JavaScript function to find the highest value in an array.

function max(arr){
    var max = Math.max.apply(null, arr);
    console.log(max) 
}

max([4,12,3,80,0,22,56]);