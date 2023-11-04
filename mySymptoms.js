function clearText () {
    var currenttext = document.getElementById("comments");
 
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