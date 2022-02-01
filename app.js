var modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.getAttribute('data-modal');

        document.getElementById(modal).style.display = 'block';
        document.body.style.overflow = 'hidden';
    };
});

var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.closest('.modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    };
});

window.onclick = function(e) {
    if(e.target.className === 'modal') {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Button scroll to top (From w3school)

//Get the button:
mybutton = document.getElementById("scroll-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}