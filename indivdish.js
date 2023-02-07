$(document).ready(function(){
    $('.Menu').click(function(){
        $('ul').toggleClass('show')
    })
})

var r = document.querySelector('.rName')
var rName = r.innerText;
rName.replace(' ','')
 r.classList.add(rName.replace(' ',''))


 console.log(r)
console.log(rName.replace(' ',''))
var test = document.getElementsByClassName(rName.replace(' ',''))
console.log(test)