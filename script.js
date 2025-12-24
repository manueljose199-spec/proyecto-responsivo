const botonTema=document.getElementById('botonTema');
const body=document.body;
const iconoTema=document.querySelector('.icono-tema');

botonTema.addEventListener('click', ()=>{
    body.classList.toggle('ligth');

    iconoTema.textContent=body.classList.contains('light')?'☀️' : '🌙';
});