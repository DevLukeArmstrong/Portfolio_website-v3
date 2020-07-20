/****** Navbar Scroll stick and active ******/
window.onscroll = function() {
    navBarStick()
};

// Get navbar and elements
var navbar = document.getElementById("nav-bar")

var navAbout = document.getElementById("about");
var navProjects = document.getElementById("projects");
var navContact = document.getElementById("contact");

var aboutLink = document.getElementById("nav-about");
var projectsLink = document.getElementById("nav-projects");
var contactLink = document.getElementById("nav-contact");

var sticky = navbar.offsetTop;

var projectsTop = navProjects.offsetTop;
var aboutTop = navAbout.offsetTop;
var contactTop = navContact.offsetTop;

var projectsBottom = projectsTop + navProjects.offsetHeight;
var aboutBottom = aboutTop + navAbout.offsetHeight;
var contactBottom = contactTop + navContact.offsetHeight;

var links = [aboutLink, projectsLink, contactLink]
var activeNavButtonClass = "active-nav-button";

function removeNavActive()
{
  var i;
  for (i = 0; i < links.length; i++) {
    if( links[i].classList.contains(activeNavButtonClass) )
    {
      links[i].classList.remove(activeNavButtonClass);
    }
  }
}

function navBarStick() {
  if (window.pageYOffset >= sticky)
      {
      navbar.classList.add("sticky")
  }
  else
  {
      navbar.classList.remove("sticky");
  }

  if (window.pageYOffset >= projectsTop & window.pageYOffset < projectsBottom)
  {
    removeNavActive();
    projectsLink.classList.add(activeNavButtonClass);
  }
  else if ((window.innerHeight + window.pageYOffset + 10) >= document.body.offsetHeight) {
    removeNavActive();
    contactLink.classList.add(activeNavButtonClass);
  }
  else if (window.pageYOffset >= aboutTop & window.pageYOffset < aboutBottom)
  {
    removeNavActive();
    aboutLink.classList.add(activeNavButtonClass);
  }
  else {
    removeNavActive();
  }
}

var body = document.getElementById("body");
var navOverlay = document.getElementById('nav-overlay');

function openOverlay() {
  navOverlay.classList.toggle('nav-active');
  body.classList.toggle("stop-scrolling");
}

function closeOverlay() {
  navOverlay.classList.toggle('nav-active');
  body.classList.toggle("stop-scrolling");
}

/****** Homepage down button ******/

var enjoy = document.getElementById("enjoy");
var downArrow = document.getElementById("down-arrow");

function mouseOver() {
  enjoy.classList.toggle("green");
  downArrow.src="Images/Icons/Down-Arrow-Green.png";
}

function mouseOut() {
  enjoy.classList.toggle("green");
  downArrow.src="Images/Icons/Down-Arrow.png";
}

function moveDown() {
  window.location="#projects";
}

/****** Projects ******/
function openLink(link) {
  window.open(link);
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