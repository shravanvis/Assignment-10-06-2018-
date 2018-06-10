// 3. Write a JavaScript function to generate a random integer.

function randomNumbers(numberofrandom){
    for(let i = 0; i<numberofrandom;i++){
        console.log(parseInt(Math.random()*1000))
    }
}

randomNumbers(10)