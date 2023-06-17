let $ = document

let userName = $.querySelector('.userName')
let passWord = $.querySelector('.passWord')
let mesUser = $.getElementById('userMessage')
let mesPass = $.getElementById('pasMessage')
let submit = $.getElementById('submit')



const ValidationUserName = () => {

    if (userName.value.length < 12) {
        mesUser.style.display = 'flex'
    }
    else {
        mesUser.style.background = 'green'
        mesUser.innerHTML = 'congratulations! Your username has been created.'
        mesUser.style.color = 'white'
    }
}

const ValidationPassWord = () => {
    if (passWord.value.length < 8) {
        mesPass.style.display = 'flex'
    }
    else {
        mesPass.style.background = 'green'
        mesPass.style.color = 'white'
        mesPass.innerHTML = 'ongratulations! Your password has been created.'
    }
}

const Send = () => {
    if (userName.value.length > 12 && passWord.value.length > 8) {
        alert('Your registration was successful')
    }
    else {
        alert('Enter your username or password correctly')
    }
}

userName.addEventListener('keydown', ValidationUserName)
passWord.addEventListener('keydown', ValidationPassWord)
submit.addEventListener('click', Send)



