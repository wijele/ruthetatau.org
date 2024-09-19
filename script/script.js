function protectpasscode() {
    const result = document.getElementById("tutorial").value;
    let passcode = belt;
    let space = '';
    if (result == space) {
        alert("Type passcode")
    } else {
        if (result == passcode) {
            document.getElementById("imageContainer").style.display = "block";
        } else {
            alert("Incorrect Passcode");
            location.reload();
        }
    }
}
