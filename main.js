// SECTOR

// Get the modal
var sector_modal = document.getElementById("modal-sector");

// Get the button that opens the modal
var sector_btn = document.getElementById("btn-sector");

//Get the <span> element that closes the modal
var sector_span = document.getElementsByClassName("close") [0];

// When the user clicks on the button, open the modal
sector_btn.onclick = function() {
    sector_modal.style.display = "block";
    document.body.style.overflow = "hidden"
}

// When the user clicks on <span> (x), close the modal
sector_span.onclick = function() {
    sector_modal.style.display = "none";
    document.body.style.overflow = "auto"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if(event.target == sector_modal) {
        sector_modal.style.display = "none";
        document.body.style.overflow = "auto"
    } 
} 

// TRANSITION

// Get the modal
var transition_modal = document.getElementById("modal-transition");

// Get the button that opens the modal
var transition_btn = document.getElementById("btn-transition");

//Get the <span> element that closes the modal
var transition_span = document.getElementsByClassName("close") [1];

// When the user clicks on the button, open the modal
transition_btn.onclick = function() {
    transition_modal.style.display = "block";
    document.body.style.overflow = "hidden"
}

// When the user clicks on <span> (x), close the modal
transition_span.onclick = function() {
    transition_modal.style.display = "none";
    document.body.style.overflow = "auto"

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if(event.target == transition_modal) {
        transition_modal.style.display = "none";
        document.body.style.overflow = "auto"
    } 
} 
 
// CLIENTS

// Get the modal
var clients_modal = document.getElementById("modal-clients");

// Get the button that opens the modal
var clients_btn = document.getElementById("btn-clients");

//Get the <span> element that closes the modal
var clients_span = document.getElementsByClassName("close") [2];

// When the user clicks on the button, open the modal
clients_btn.onclick = function() {
    clients_modal.style.display = "block";
    document.body.style.overflow = "hidden"
}

// When the user clicks on <span> (x), close the modal
clients_span.onclick = function() {
    clients_modal.style.display = "none";
    document.body.style.overflow = "auto"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if(event.target == clients_modal) {
        clients_modal.style.display = "none";
        document.body.style.overflow = "auto"
    } 
} 