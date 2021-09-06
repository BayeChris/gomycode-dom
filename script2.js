let btn= document.querySelector('button');
let icons = document.querySelector(".fa-angle-double-left");
let btnparent = document.querySelector('.enfant2')
let text = document.querySelectorAll('.bebe h4')


btn.addEventListener('click',reduction);
function reduction(){
    // le grand parent se reduit apres un click sur le bouton
    btnparent.classList.toggle("toggle");
    // rotation du bouton avec un angle de 180 deg
    icons.style.transform = "rotateZ(180deg)";
    // les titres disparaitre apres le click et comme il ya plusieurs element je fais querySelectorAll afin d'appliquer une ForEach
    text.forEach((Element) => Element.style.visibility = "hidden");
}



