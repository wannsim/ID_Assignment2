$(document).ready(function(){
    $('.Menu').click(function(){
        $('ul').toggleClass('show')
    })
})









// function saveRecipes(img, rname){
//     var recipe = document.createElement(div);
//     recipe.classList.add(recipebox);
//     var all = getElementsByClassName("recipeContainer")[0];
//     var name  = getElementsByClassName("recipeTitle");
//     for (var i = 0; i < names.length; i++){
//         if (names[i].innerText == title){
//             alert("Recipe has already been added to your saved");
//             return; 
//         }
//     }
//     var r = `
//     <div class = "recipeItem">
//         <div class = "recipebox">
//             <img class = "recipeImg" = ${img} >
//             <p class = "recipeTitle">${rname}</p>
//             <button class = "savebtn" type="button" >Remove</button>
//         </div>
//     `

//     var merchbox = document.createElement("div");
//     merchbox.classList.add("cartbox")
//     var items = document.getElementsByClassName("cartContent")[0];
//     var itemNames = items.getElementsByClassName("productTitle-cart");
//     for (var i = 0; i < itemNames.length; i++){
//         if (itemNames[i].innerText == title){
//             alert("Item has already been added to your cart");
//             return; 
//         }
//     }
//     var cartCont = `
//                 <img  alt = "" class = "cartImg" src = "${img}" >
//                 <div class = "detailBox">
//                     <div class = "productTitle-cart">${title}</div>
//                     <div class = "price-cart">${price}</div>
//                     <input type ="number" value = "1" class = cartQuantity>
//                 </div>
//             </div>
//             <button class = "remove" type="button" >Remove</button>`
// merchbox.innerHTML = cartCont;
// items.append(merchbox);
// merchbox.getElementsByClassName("remove")[0].addEventListener("click", removeItem);
// merchbox.getElementsByClassName("cartQuantity")[0].addEventListener("change", quantityChange);
// }







// //add
// function addToSave(event){
//     var btn = event.target;
//     var products = btn.parentElement;
//     var title = products.getElementsByClassName("recipeTitle")[0].innerText;
//     var img = products.getElementsByClassName("recipeImg")[0].src;
//     addMerchToCart(title, img);
//     updateTotal();
// }
// function addMerchToCart(title, img){
//     var recipebox = document.createElement("div");
//     recipebox.classList.add("savebox")
//     var items = document.getElementsByClassName("saveContent")[0];
//     var itemNames = items.getElementsByClassName("save-cart");
//     for (var i = 0; i < itemNames.length; i++){
//         if (itemNames[i].innerText == title){
//             alert("Item has already been added to your cart");
//             return; 
//         }
//     }
//     var saveCont = `
//                 <img  alt = "" class = "saveImg" src = "${img}" >
//                 <div class = "detailBox">
//                     <div class = "save-cart">${title}</div>
//                 </div>
//             </div>
//             <button class = "removeBtn" type="button" >Remove</button>`
// merchbox.innerHTML = saveCont;
// items.append(merchbox);
// recipebox.getElementsByClassName("removeBtn")[0].addEventListener("click", removeItem);
// }


// function removeItem(event){
//     var buttoncliked = event.target;
//     buttoncliked.parentElement.remove();
// }                                                             







// function saveItem(){
//     var title = document.querySelector('.recipeTitle').innerText;
//     var img = document.querySelector('.recipeImg').src;

//     const saveR = `
//     <div class = "savebox">
//         <img src = ${img} class = "recipeImg" >
//         <p class = "saveTitle">${title}</p>
//         <button class = "removebtn" type="button" >Remove</button>
//     </div>
//     </div>`
//      var container = document.querySelector('.saveContainer')
//      container.innerHTML =  saveR
// }
// // var title = document.querySelector('.recipeTitle').innerText;
// // console.log (title)

// // var recipebox = document.querySelector('.recipebox')
// var saveBtn = document.querySelector('.savebtn')
// saveBtn.addEventListener("click", saveItem());