
let userName = document.querySelector('.userName')
let passWord = document.querySelector('.passWord')
let mesUser = document.getElementById('userMessage')
let mesPass = document.getElementById('pasMessage')

console.log(mesPass)




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

userName.addEventListener('keydown' , ValidationUserName)



