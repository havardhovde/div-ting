function scroll() {
    var scrollPos = window.scrollY;
    var viewHeight = window.innerHeight;
    
    document.getElementById("box").style.opacity = scrollPos/viewHeight;
}