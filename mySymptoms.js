function clearText() {
    var currenttext = document.getElementById("comments");
console.log("hello")
    if (currenttext.value == "Please enter your comments") {
        currenttext.value = "";
    }
}

function defaultText() {
    var currenttext = document.getElementById("comments");
    if (currenttext.value == "") {
        currenttext.value = "Please enter your comments";
    }
}

// This function should do something with the "mentalHealth" element, or you can remove it if not needed.
function checkMentalHealth() {
    var mentalHealth = document.getElementById("mentalHealth");
    // Add your code to handle "mentalHealth" if necessary.
}
