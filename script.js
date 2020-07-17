/****** Navbar Scroll stick and active ******/
window.onscroll = function() {
    navBarStick()
};

// Get navbar and elements
var navbar = document.getElementById("nav-bar")
var navAbout = document.getElementById("nav-about");
var navProjects = document.getElementById("nav-projects");
var navResume = document.getElementById("nav-resume");
var navContact = document.getElementById("nav-contact");

var sticky = navbar.offsetTop;

function navBarStick() {
  if (window.pageYOffset >= sticky)
      {
      navbar.classList.add("sticky")
  }
  else
  {
      navbar.classList.remove("sticky");
  }
}