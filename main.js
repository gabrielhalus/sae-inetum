// SECTOR

// Get the modal
var modal = document.getElementById("modal-sector");

// Get the button that opens the modal
var btn = document.getElementById("btn-sector");

//Get the <span> element that closes the modal
var span = document.getElementsByClassName("close") [0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    } 
} 

// TRANSITION

// Get the modal
var modal = document.getElementById("modal-transition");

// Get the button that opens the modal
var btn = document.getElementById("btn-transition");

//Get the <span> element that closes the modal
var span = document.getElementsByClassName("close") [1];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    } 
} 

// CLIENTS

// Get the modal
var modal = document.getElementById("modal-clients");

// Get the button that opens the modal
var btn = document.getElementById("btn-clients");

//Get the <span> element that closes the modal
var span = document.getElementsByClassName("close") [2];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    } 
} 