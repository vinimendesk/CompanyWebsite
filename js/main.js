/* documento.querySelector busca o elemento HTML dentro da tag "nav" com classe("ul") */
let ul = document.querySelector('nav ul');

function openMenu(){
    /* adiciona uma classe a uma elemento HTML */
    ul.classList.add('open');
}

function closeMenu(){
    /* remove uma classe a uma elemento HTML */
    ul.classList.remove('open');
}