var login = {
    emailAddress: "",
    password: ""
}

var loginCorreto = {
    emailAddress: 'fernanda-bess@hotmail.com',
    password: 'senha1234'
}

 let emailAddress = document.getElementById('emailAddress')
 let password = document.getElementById('password')
 let message = document.getElementById('message')

function login() {
    let checkEmail = emailAddress.value == loginCorreto.emailAddress;
    let checkPassword = password.value == loginCorreto.password;
  console.log(emailAddress.value) 
  if (!checkEmail || !checkPassword) {
        alert("Usuário ou senha incorretos!")
    } else {
        alert("Usuário correto. Logando...")
        location.href="./main.html"
    };
} 
