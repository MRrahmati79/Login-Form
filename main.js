
let userName = document.querySelector('.userName')
let passWord = document.querySelector('.passWord')
let userMesage = document.getElementById('userMesage')
let pasMesage = document.getElementById('pasMesage')



const test = () => {
    let validuser = userName.value
    let Validpass = passWord.value

    if(validuser.length < 12){
        console.log('kjjj')
    }

}

userName.addEventListener('keydown' , test)


