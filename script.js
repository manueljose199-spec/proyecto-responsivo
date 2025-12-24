const botonTema=document.getElementById('botonTema');
const body=document.body;
const iconoTema=document.querySelector('.icono-tema');

botonTema.addEventListener('click', ()=>{
    body.classList.toggle('ligth');

    iconoTema.textContent=body.classList.contains('light')?'☀️' : '🌙';
});



const bannerCookies=document.getElementById('bannerCookies');
const aceptarCookies=document.getElementById('ceptarCookies');

if (!localStorage.getItem('cookiesAceptadas')){
    setTimeout(()=>{
        bannerCookies.classList.add('mostrar')
    },10000
    )
}

aceptarCookies.addEventListener('click', ()=>{
    localStorage.setItem('cookiesAceptadas', 'true');
    bannerCookies.classList.remove('mostrar')
})