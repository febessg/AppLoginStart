
const accountData = {
    name: 'Fernanda Gonçalves',
    emailAddress: 'fernanda-bess@hotmail.com',
    password: 'senha1234',
    profilePicture: 'https://github.com/febessg'
}

let emailAddress = document.getElementById('emailAddress');
let password = document.getElementById('password');
let message = document.getElementById("message")

function login() {
    let checkEmail = emailAddress.value == accountData.emailAddress;
    let checkPassword = password.value == accountData.password;

    localStorage.setItem('name', accountData.name);
    localStorage.setItem('emailAddress', accountData.emailAddress);
    localStorage.setItem('password', accountData.password);localStorage.setItem('fotoDePerfil', accountData.profilePicture); 

  if (checkEmail && checkPassword) {
       alert("Usuário correto. Logando...")
        location.href="./main.html"
    } else {
        message.innerHTML = "Usuário ou senha incorretos. Tente novamente!"
    }
} 

function changeInfo() {
    let info = prompt("Qual informação você deseja alterar? [1] Foto de perfil, [2] Email, [3] Nome")
    if (info == 1) {
        localStorage.removeItem('fotoDePerfil')
        let newPic = prompt("Digite a url da nova foto")
        localStorage.setItem('fotoDePerfil', newPic)
    } else if (info == 2) {
        localStorage.removeItem('emailAddress');
        let newEmail = prompt("Digite o novo email");
        localStorage.setItem('emailAddress', newEmail)
    } else if (info == 3) {
        localStorage.removeItem('name');
        let newName = prompt('Digite um nome');
        localStorage.setItem('name', newName);
    } else {
        alert('Operação não reconhecida. Tente novamente.')
    }
}

function logout() {
    location.href="./index.html"
}