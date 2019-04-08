const password = document.querySelector('.pass')

password.addEventListener('click',(event)=>{
    let message = document.querySelector('.message')
    message.style.display = 'flex'
})

function isValid(){
      
    const lowerCase = /[a-z]/g;
    const upperCase = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const special = /[!@#\$%\^&]/g;
        
    if(password.value.length >= 8 && password.value.match(lowerCase) && password.value.match(upperCase) && password.value.match(numbers)  && password.value.match(special)) { 
        console.log('true');
        return true;
    } 
    else {
        console.log('false');
        return false;
    }
}

password.addEventListener('keyup', isValid);

// function isConfirmed(){
    
//     let pass1 = event.target.password.value
//     let pass2 = event.target.confirm.value
//     console.log(pass1, pass2)

//     if(pass1===pass2){
//         return true;
//     }
//     else{
//         document.querySelector('.message').innerHTML='*password does not match'
//         return false;
//     }
// }

document.querySelector('.myForm').addEventListener('submit',(event) => {
    event.preventDefault()

    // if(isConfirmed()) {
    //     console.log('confirmed')
    //     return;
    // } else {
    //     console.log('not-confirmed')
    // }
    
    if(isValid()) {
        console.log('correct')
        document.querySelector('.message').innerHTML='you did it!'
        return;
    } else {
        console.log('incorrect')
        document.querySelector('.message').innerHTML='not ready yet!'
    }  
})


