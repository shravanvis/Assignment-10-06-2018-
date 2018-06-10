// 6. Write a JavaScript function to find the lowest value in an array. *

function min(arr){
    var min = Math.min.apply(null, arr);
    console.log(min) 
}

min([4,12,3,80,0,22,56]);