// To work with scroll icon ..
window.onscroll = function() {
    var scrollButton = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
        scrollButton.disabled = false;
    }
};
