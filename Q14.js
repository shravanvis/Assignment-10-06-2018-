// 14. Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

    var i,a,chr
        for(i=1; i<=6; i++){
            for(a=1; a<i; a++){
             chr = chr+('*')
         }
           console.log(chr);
         chr = ''
        }