 function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email == "" || password == "") {

        alert("Email සහ Password ඇතුළත් කරන්න");

    } else {

        document.getElementById("loginBox").style.display = "none";
        document.getElementById("homeBox").style.display = "block";

        document.getElementById("analysis").innerHTML =
        "Gold Fundamental Analysis Loading...";

        document.getElementById("signal").innerHTML =
        "WAIT";

    }

}


// Weekend Market Close System

let day = new Date().getDay();

if(day == 0 || day == 6){

    document.getElementById("marketStatus").innerHTML =
    "🟡 Gold Market Closed (Weekend)";

    document.getElementById("analysis").innerHTML =
    "සෙනසුරාදා සහ ඉරිදා Gold Market වසා ඇත.";

    document.getElementById("signal").innerHTML =
    "No Signal";

}
else{

    document.getElementById("marketStatus").innerHTML =
    "🟢 Gold Market Open";

}
