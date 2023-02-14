
let loginData = {
    emailAddress: "",
    password: ""
}

const loginCorreto = {
    emailAddress: 'fernanda-bess@hotmail.com',
    password: 'senha1234'
}

let emailAddress = document.getElementById('emailAddress');
let password = document.getElementById('password');
let message = document.getElementById("message")

/*function saveData() { 
    localStorage.setItem('emailAddress', emailAddress.value);
    localStorage.setItem('password', password.value);  
} 
    document.onchange = saveData();*/

function login() {
    let checkEmail = emailAddress.value == loginCorreto.emailAddress;
    let checkPassword = password.value == loginCorreto.password;

    localStorage.setItem('emailAddress', emailAddress.value);
    localStorage.setItem('password', password.value); 

  if (checkEmail && checkPassword) {
       alert("Usuário correto. Logando...")
        location.href="./main.html"
    } else {
        message.innerHTML = "Usuário ou senha incorretos. Tente novamente!"
    }
} 

function logout() {
    location.href="./index.html"
}