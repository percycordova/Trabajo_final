let imagenes = document.querySelectorAll('.galery-img');
let modal = document.querySelector('#modal1');
let img = document.querySelector('#modal1-img');
let boton = document.querySelector('#modal1-boton');

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function(e) {
        modal.classList.toggle("modal-open");
        let src = e.target.src;
        img.setAttribute("src", src);
    });
}
boton.addEventListener('click', function() {
    modal.classList.toggle("modal-open");
});