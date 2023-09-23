function toggleSideNav() {
    var e = document.getElementById('sidenav');
    if (e.style.display == "block") {
        e.style.display = "none";   
    } else {
        e.style.display = "block";
    }
}

function successBuy() {
    alert('Thank you for the purchase !');
}
