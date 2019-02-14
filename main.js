var nbr = 0;

function display() {
    var lblCtrl = document.getElementById("lbl");
    lblCtrl.textContent = nbr;

    lblCtrl.style.color = "black";
    lblCtrl.style.fontWeight = "normal";
    lblCtrl.style.fontStyle = "normal";

    if(nbr % 2 == 0) {
        lblCtrl.style.color = "red";
    }
    if(nbr % 3 == 0) {
        lblCtrl.style.fontWeight = "bold";
    }
    if(nbr % 5 == 0) {
        lblCtrl.style.fontStyle = "italic";
    }
}
function minus_click() {
    // This is when the minus button is clicked
    nbr = nbr - 1;
    display();
}
function plus_click() {
    // This is when the plus button is clicked
    nbr = nbr + 1;
    display();
}
