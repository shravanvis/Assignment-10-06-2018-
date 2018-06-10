// 10. Write a JavaScript function to hide email addresses to protect from unauthorized user.

function protect_email(email){
    let splitemail = email.split('@')
    let first = splitemail[0]
    var avg = first/2
    first = first.substring(0, first.length - avg)
    second = splitemail[1]
    console.log(first + "@" + second)
 
}

protect_email("shravan@gmail.com")
