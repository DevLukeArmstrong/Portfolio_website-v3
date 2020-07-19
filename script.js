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

/****** Skills dropdown menus ******/

function dropDown(skill) {
  var childP = skill.getElementsByTagName("P")[0];
  var childImg = skill.getElementsByTagName("IMG")[0];
  
  skill.classList.toggle("skills-active");
  childP.classList.toggle("skills-p-active");

  if (childImg.src.includes("plus.svg"))
  {
    childImg.src="Images/Icons/minus.svg"
  }
  else {
    childImg.src="Images/Icons/plus.svg"
  }

}