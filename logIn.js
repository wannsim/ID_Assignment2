//  const wrapper = document.querySelector('.wrapper');
//  const login = document.querySelector('.loginNav');
//  const register = document.querySelector('.registerNav');

// register.addEventListener("click", function(){
//     wrapper.classList.add('active');
// })

// login.addEventListener('click', function(){
//     wrapper.classList.remove('active');
// })




// onclick= "location.href = 'Profilepage.html'"
// const loginBtn = `<button onclick= "location.href = 'Profilepage.html'" type = "submit" class = "submitLogin">Login</button>`
// var input = $(' div .loginBtnInput')
// input.append(loginBtn)

// var btn = $('.submitLogin')
// btn.on("click", function(){
//     let clicked = true
//     console.log("hello")
// })

// if (clicked = true){
//     var btn = $('nav .checklogin');
//     btn.on("click", function(){
//         alert("You are already logged in.")
//     })
// }




$(document).ready(function(){
    getMember();
    $('.submitRegister').on("click", function(e){
        e.preventDefault();
        let memberuserN = $(".userNLabel");
        let memberemail = $(".emailLabel");
        let memberpw = $(".pwLabel");
    
        let jsondata = {
            "user" : memberuserN,
            "email": memberemail,
            "pw": memberpw
        };
    
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://laoniangcooks-9a89.restdb.io/rest/member",
            "method": "POST",
            "headers": {
              "content-type": "application/json",
              "x-apikey": "63e4e788478852088da67f34",
              "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata),
            "beforeSend":function(){
                //lottie??
                $(".submitRegister").prop("disabled", true);
                $(".registerForm").trigger("reset");
            }
          }
    
          $.ajax(settings).done(function (response) {
            console.log(response);
            
            $(".submitRegister").prop( "disabled", false);
    
            // $("#add-update-msg").show().fadeOut(3000);
      
            getContacts();
          });
        });

    function getMember(){
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://laoniangcooks-9a89.restdb.io/rest/member",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": "63e4e788478852088da67f34",
              "cache-control": "no-cache"
            }
          }

          $.ajax(settings).done(function (response) {
            let content = "";
            //input of username and pw
            let userNinput = $("#emailInput").val()
            console.log(userNinput)
            let pwinput = $("#pw").val()
            console.log(pwinput)
            for (var i = 0; i < response.length; i++) {
                if (response[i].email == userNinput){
                    console.log(response[i].username);
                    if (response[i].password == pwinput){
                        // const exit = `onclick= "location.href = 'Profilepage.html'" `
                        $(".loginBtnInput button").attr("onclick", "location.href = 'Profilepage.html'")
                    }
                    else{
                        alert("Incorrect Password. Please try again.")
                    }
                }
                // else{
                //     alert("Account does not exist. Register an account.")
                // }
                
                //[METHOD 1]
                //let's run our loop and slowly append content
                //we can use the normal string append += method
                /*
                content += "<tr><td>" + response[i].name + "</td>" +
                  "<td>" + response[i].email + "</td>" +
                  "<td>" + response[i].message + "</td>
                  "<td>Del</td><td>Update</td</tr>";
                */
        
                //[METHOD 2]
                //using our template literal method using backticks
                //take note that we can't use += for template literal strings
                //we use ${content} because -> content += content 
                //we want to add on previous content at the same time
                // content = `${content}<tr id='${response[i]._id}'><td>${response[i].name}</td>
                // <td>${response[i].email}</td>
                // <td>${response[i].message}</td>
                // <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-msg='${response[i].message}' data-name='${response[i].name}' data-email='${response[i].email}'>Update</a></td></tr>`;
        
              }
          });
    }
})




// api





function getMember(){

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