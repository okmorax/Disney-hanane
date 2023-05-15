'use strict';

// Annimation du +: quand on click le + devient un -
const plus = document.querySelectorAll('.plus');
const accordionText = document.querySelectorAll('.text');
const titre = document.querySelectorAll('.titre');
for (let i = 0; i < plus.length; i++) {
    titre[i].addEventListener('click', () => {
        plus[i].classList.toggle('active');
        accordionText[i].classList.toggle('active');
        if (!plus[i]) {
            plus[i].classList.remove('active');
        }
    });
}

//afficher le bouton quand on deflie la page
const bouton = document.querySelector(".bouton1");

window.addEventListener("scroll", () => {
    if (window.scrollY> 500)  {
        bouton.classList.remove("bouton1");
    } else {
        bouton.classList.add("bouton1");
    }
});

//afficher le logo disney + quand on deflie la page
window.addEventListener("scroll", function() {
    var header = this.document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 500)
});

//Aller de la page Français à Anglais en un click

const langSelect = document.getElementById("lang-select");
langSelect.addEventListener("change", () => {
    const selectedValue = langSelect.value;
    if (selectedValue !== '') {
        window.location.href = selectedValue;
    }
})