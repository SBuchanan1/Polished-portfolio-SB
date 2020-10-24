// const express = require("express");

const toggleButton = document.getElementsById("toggle-button")[0]
const navbarLinks = document.getElementsById("navbar-links")[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');

})