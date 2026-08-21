function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartBadge").innerText = cart.length;
}

function showTab(tab) {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const loginTab = document.getElementById("loginTabBtn");
    const signupTab = document.getElementById("signupTabBtn");

    if (tab === "login") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        loginTab.classList.remove("active");
        signupTab.classList.add("active");
    }
}

function showFeedback(id, message, type) {
    const el = document.getElementById(id);
    el.innerText = message;
    el.className = "feedback " + type;
    el.style.display = "block";
}

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    const newUser = { fullName, email, password };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === newUser.email) {
            showFeedback("signupFeedback", "An account with this email already exists.", "error");
            return;
        }
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    showFeedback("signupFeedback", "Account created! You can now log in.", "success");
    signupForm.reset();

    setTimeout(() => showTab("login"), 1500);
});

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            showFeedback("loginFeedback", `Welcome back, ${users[i].fullName}!`, "success");
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);
            return;
        }
    }

    showFeedback("loginFeedback", "Incorrect email or password. Please try again.", "error");
});

updateCartBadge();
