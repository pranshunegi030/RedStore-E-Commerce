function reg(){
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("regForm").style.display = "block";
    document.getElementById("indicator").style.transform = "translateX(0px)";
}

function login(){
    document.getElementById("regForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("indicator").style.transform = "translateX(100px)";
}