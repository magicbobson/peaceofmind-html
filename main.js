var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    var header = document.querySelector(".header");
    if (header) {
        header.style.height = window.innerHeight + "px";
    }
})