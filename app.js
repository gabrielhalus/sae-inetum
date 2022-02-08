// Get scroll to top button
mybutton = document.getElementById("btn-scroll-to-top");

/////////////////////////////////
// Modal boxes (From CodePen) //
////////////////////////////////

var modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.getAttribute('data-modal');

        document.getElementById(modal).style.display = 'block';
        document.body.style.overflow = 'hidden';
        mybutton.style.display = "none";
    };
});

var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.closest('.modal').style.display = 'none';
        document.body.style.overflow = 'auto';
        mybutton.style.display = "block";
    };
});

window.onclick = function(e) {
    if(e.target.className === 'modal') {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
        mybutton.style.display = "block";
    }
};

//////////////////////////////////////////
// Button scroll to top (From w3school) //
//////////////////////////////////////////

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

///////////////////////////////
// Accordion (From w3school) //
///////////////////////////////

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = "0 18px"
        } else {
            panel.style.maxHeight = panel.scrollHeight + 20 + "px";
            panel.style.padding = "10px 18px"
    }
  });
}