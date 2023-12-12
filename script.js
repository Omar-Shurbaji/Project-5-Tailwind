let menu = document.querySelector(".menu");
let list = document.querySelector(".list")
console.log(list)
menu.addEventListener('click', function() {
    list.classList.toggle("hidden")
});