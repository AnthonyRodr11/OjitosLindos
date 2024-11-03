function showMessage(message) {
    document.getElementById('popupMessage').innerText = message;
    document.getElementById('popup').classList.add('active');
}

function closePopup() {
    document.getElementById('popup').classList.remove('active');
}