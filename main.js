
let humberger = document.querySelector(".humberger")
let xMark = document.querySelector(".x-mark")
let bars = document.querySelector(".bars")
let listItems = document.querySelector("#navbar nav ul")

humberger.addEventListener("click", function () {
    xMark.classList.toggle("active")
    listItems.classList.toggle("active")
    bars.classList.toggle("active")
})