
let userName = document.querySelector('.userName')
let passWord = document.querySelector('.passWord')
let mesUser = document.getElementById('userMessage')
let mesPass = document.getElementById('pasMessage')


const ValidationUserName = () => {

    if(userName.value.length < 12){
        mesUser.style.display = 'flex'
    }
    else{
        mesUser.style.background = 'green'
        mesUser.innerHTML = 'congratulations! Your username has been created.'
        mesUser.style.color = 'white'
    }
}

const ValidationPassWord = () => {
    if(passWord.value.length < 8 ){
        mesPass.style.display = 'flex'
    }
    else{
        mesPass.style.background = 'green'
        mesPass.style.color = 'white'
        mesPass.innerHTML = 'ongratulations! Your password has been created.'
    }
}




userName.addEventListener('keydown' , ValidationUserName)
passWord.addEventListener('keydown' , ValidationPassWord)



