// 11. Write a JavaScript function to capitalize the first letter of a string.

function splitname(name){
    if(typeof name == 'string'){
        let splitname = name.split(' ')
        console.log(splitname)


        var initials1 = splitname[0]
        var initials2 = splitname[1]
        console.log(initials1[0].toUpperCase() + ' ' + initials2[0].toUpperCase())
    }
    else{
        console.log("Argument Not Valid")
    }
}

splitname('shravan kumar')