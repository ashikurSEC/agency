'use strict';


/**
 * add event on element
 */ 

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    }else {
        elem.addEventListener(type, callback);
    }
}

/**
 * header active when scroll down 
 */ 


const header = document.querySelector("[data-header]");

const activeHeader = function () {
    window.scrollY >= 50 ? header.classList.add("active") : header.classList.remove("active");
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * Navbar Toggle
 */ 


const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overly = document.querySelector("[data-overlay]");


const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overly.classList.toggle("active");
};


addEventOnElem(navToggler, "click", toggleNavbar);



/**
 * close navbar when click on any navbar links
 */


const navbarLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function () {
    navbar.classList.remove("active");
    overly.classList.remove("active");
};


addEventOnElem(navbarLinks, "click", closeNavbar);


/**
 * Accordion Toggle 
 */ 


document.querySelectorAll('.faq-card .card-action').forEach(action => {
    action.addEventListener('click', () => {
      action.classList.toggle('active');
      const content = action.nextElementSibling;
      content.style.maxHeight = action.classList.contains('active') ? content.scrollHeight + 'px' : '0';
    });
  });
  