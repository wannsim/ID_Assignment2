const wrapper = document.querySelector('.wrapper');
const login = document.querySelector('.loginNav');
const register = document.querySelector('.registerNav');

register.addEventListener("click", function(){
    wrapper.classList.add('active')
})

login.addEventListener('click', function(){
    wrapper.classList.remove('active')
})



// onclick= "location.href = 'Profilepage.html'"
const loginBtn = `<button onclick= "location.href = 'Profilepage.html'" type = "submit" class = "submitLogin">Login</button>`
var input = $(' div .loginBtnInput')
input.append(loginBtn)

var btn = $('button .submitLogin')
btn.on("click", function(){
    let clicked = true
    console.log("hello")
})

if (clicked = true){
    var btn = $('nav .checklogin');
    btn.on("click", function(){
        alert("You are already logged in.")
    })
}



// // onclick= "location.href = 'Profilepage.html'"
// const loginBtn = `<button type = "submit" class = "submitLogin">Login</button>`
// var input = $(' div .loginBtnInput')
// input.append(loginBtn)
// var btn = $('button .submitLogin')
// btn.addEventListener("click", loginPage);

// function loginPage(){
//     alert("Login Successfully!")
//     windows.location.href = "Profilepage.html"
// }



// let loggedIn = false;
// var clicked = document.querySelector('.checklogin')
// clicked.addEventListener('click', loginPage)