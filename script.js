function login() {
    alert("FX SAVI Login System - Coming Soon");
}


// Weekend Market Close System

let today = new Date().getDay();

if (today === 0 || today === 6) {
    document.getElementById("market").innerHTML =
    "Gold Market Closed (Weekend)";

    document.getElementById("signal").innerHTML =
    "No Signal Available";
}
else {
    document.getElementById("market").innerHTML =
    "Gold Market Open";
}
