// 12. Write a JavaScript program that accept two integers and display the larger.

function integer(a,b){
   if((typeof a == 'number') || (typeof b == 'number')){
    if(a>b){
        console.log(a)
    }else{
        console.log(b)
    }
}
}

integer(6,5)