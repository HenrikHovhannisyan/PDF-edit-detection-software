function success() {
    if(document.getElementById("login").value==="" || document.getElementById("pas").value==="" ) {
        document.getElementById('continue').disabled = true;
    } else {
        document.getElementById('continue').disabled = false;
    }
}