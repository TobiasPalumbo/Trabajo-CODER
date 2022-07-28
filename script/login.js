
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const button = document.querySelector("#submit");
const formLogin = document.querySelector("#form-login")
const divName = document.querySelector(".login__name")
const divPassword = document.querySelector(".login__password") 
let cuentas = []; 
formLogin.addEventListener(`submit` , (e) => {
    e.preventDefault();
    const data = {
        username: username.value,
        password: password.value
    }
    cuentas.push(data)
    localStorage.setItem("Cuenta", JSON.stringify(data));
    localStorage.getItem(data)
    console.log(data)
    username.className = "d-none";
    password.className = "d-none";

    divName.innerHTML = `<div><i class="fa-solid fa-user fs-1 text-danger"></i> </div>`
    divPassword.innerHTML =`<div>${data.username}</div>`
    
})



 



