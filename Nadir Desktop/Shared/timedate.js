function time() {
    document.getElementById("time").innerText = new Date().toLocaleTimeString();
    setTimeout(time, 60);
}

function date() {
    document.getElementById("date").innerText = new Date().toDateString();
    setTimeout(date, 60);
}