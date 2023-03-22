var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

button.addEventListener("click", function () {
    button.innerText = "It's Working!!!";
    cat.classList.add("show");
});

