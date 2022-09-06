function showHamburgerMenu() {
    let hamburgerMenuLines = document.getElementsByClassName("straight-line");
    for (let i = 0; i < hamburgerMenuLines.length; i++) {
        if (hamburgerMenuLines[i].className === "straight-line" && i % 2 !== 1) {
            hamburgerMenuLines[i].className += " hide";
        } else {
            hamburgerMenuLines[i].className = "straight-line";
        }
    }
    let topNav = document.getElementById("topNav");
    if (topNav.className === "top-nav") {
        topNav.className += " responsive";
    } else {
        topNav.className = "top-nav";
    }
}
