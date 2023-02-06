const wrapper = document.querySelector('.wrapper');
const login = document.querySelector('.loginNav');
const register = document.querySelector('.registerNav');


register.addEventListener('click', ()=>{
    wrapper.classList.add('avtive')
})

login.addEventListener('click', ()=>{
    wrapper.classList.remove('avtive')
})