let form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
    let fullName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        fullName,
        email,
        password
    }

    console.log(user);
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify(user));
    let dataFromLocalStorage = localStorage.getItem("userData");
    console.log(dataFromLocalStorage);

})
