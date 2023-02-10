// please tell me why the document.querySelectorAll("") function dont work
document.querySelector("h3").onclick = function () {
    document.querySelector("span").textContent = 1
}
document.querySelectorAll("h3")[1].onclick = function () {
    document.querySelector("span").textContent = 2
}
document.querySelectorAll("h3")[2].onclick = function () {
    document.querySelector("span").textContent = 3
}
document.querySelectorAll("h3")[3].onclick = function () {
    document.querySelector("span").textContent = 4
}
document.querySelectorAll("h3")[4].onclick = function () {
    document.querySelector("span").textContent = 5
}
document.querySelector("form").onsubmit = function (e) {
    document.querySelector(".onsubmit1").style.display = "block"
    document.querySelector(".a").style.display = "none"
    if (document.querySelector("span").textContent.length == 0) {
        document.querySelector(".a").style.display = "none"
        document.querySelector(".onsubmit1").style.display = "none"
        document.querySelector(".alert").style.display = "block"
    }
    e.preventDefault()
}
document.querySelector(".back").onclick = () => location.reload()
for (let i = 0; i < document.querySelectorAll("h3").length; i++) {
    document.querySelectorAll("h3")[i].onclick = function () {
        for (let k =0; k < document.getElementsByClassName("click").length; k++) {
            document.querySelectorAll(".click")[k].classList.remove("click")
        }
        document.querySelectorAll("h3")[i].classList.add("click")
    }
}