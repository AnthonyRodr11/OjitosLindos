function showMessage(message) {
    document.getElementById("popupMessage").textContent = message;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
