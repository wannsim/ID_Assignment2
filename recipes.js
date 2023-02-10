//-------------------------nav:
$(document).ready(function(){
    $('.Menu').click(function(){
        $('ul').toggleClass('show')
    })
})

//-------------------------recipes page
//"Save" to "Saved"
$('.savebtn').click(function() {
    $(this).html('Saved');
});
// alert("12")

// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://laoniangcooks-9a89.restdb.io/rest/recipes",
//     "method": "GET",
//     "headers": {
//       "content-type": "application/json",
//       "x-apikey": "63e4e788478852088da67f34",
//       "cache-control": "no-cache"
//     }
//   }
//   alert("3")
  
//   $.ajax(settings).done(function (response) {
//     for (var i = 0; i < response.length; i++) {
//        let background = response[i].background
//        let ingredients =response[i].ingredients
//        let steps = response[i].steps
//        let dishname = response[i].dishName
//        let img = response[i].pic
//        alert("ues");
//         const recipe = `
//         <div class = "recipebox" class = 'firstrecipe'>
//         <a href = "indivdish.html" ><img src = ${img} class = "recipeImg" ></a>
//         <p class = "recipeTitle">${dishname}</p>
//         <button class = "savebtn" type="button" >Save</button>
//         </div>
//         </div>`;
//         $('div .recipeItem').innerHTML(recipe);

//     }
//   });