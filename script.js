const toggle = document.getElementById("toggle")
const body = document.querySelector("body")
var div = document.getElementById("DSEGClock")
var seconds = document.getElementById("seconds-front")
var session = document.getElementById("sessin")

function time() {
    div.innerHTML = ""
    var d = new Date()
    var s = d.getSeconds()
    var m = d.getMinutes()
    var h = d.getHours()
    var sesn = "AM"

    if (h == 0) {
        h = 12
    }

    if (h > 12) {
        h = h - 12
        sesn = "PM"
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    div.innerHTML = h + ":" + m
    seconds.innerHTML = s
    session.innerHTML = sesn
}

toggle.onclick = function () {
    toggle.classList.toggle("active")
    body.classList.toggle("active")
}

setInterval(time, 1000)



