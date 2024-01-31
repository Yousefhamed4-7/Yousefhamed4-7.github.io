let btn = document.querySelector("#btn")
let span = document.querySelector("#btn span i")
btn.onclick = function () {
    let responsiveNav = document.querySelector(".responsiveNav")
    responsiveNav.classList.toggle("vis")
    if (responsiveNav.classList.contains("vis")) {
        span.classList.remove("fa-bars")
        span.classList.add("fa-x")
    } else {
        span.classList.remove("fa-x")
        span.classList.add("fa-bars")
    }
}


