
//import onscroll from "./scroll.js";
//import message from "./index.js";

//When user clicks button, scroll to top of page
function topFunction() {
  document.body.scrollTop = 0; //For Safari
  document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
}
// scroll to top button
const topButton = document.getElementById("scroll-button");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

//When user clicks button, scroll to top of page
function topFunction() {
  document.body.scrollTop = 0; //For Safari
  document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//end scroll to top function

/* Hamburger Menu- Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


/* current home for messaging will move later

I want to be able to click the phone icon button and have a prompt appear that requests the sender's info 
  and return contact info with a prepopulated message. There will be editing capabilities for all of the things
  then the message will send to me as a text message from my Twilio number. Giving me the opportunity to reach out
  to the interested indivual immediately. Plus I think this is a cool and useful tool!! :)
 
*/
