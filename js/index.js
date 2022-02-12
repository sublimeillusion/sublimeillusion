const btn = document.getElementById('btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', menu);

function menu(){
    btn.classList.toggle("active");
    nav.classList.toggle("active");
}