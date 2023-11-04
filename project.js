$(document).ready(function () {

     $("#addNewMed").click(function() {
      $("#medications").append("<li>medication</li>");
    });

    $("#med1").click(function(){
        $("#medsGeneral p").toggle();
     });
     $("#AddListItem").click(function() {
        let i = $("#labList li").length;
        $("#labList").append("<li>List item " + (i + 1) + "</li>");
      });
     // Problem 5 (10 pts): lookup another jquery method and use this code on the "Toggle Text"
     // link to show/hide the text:
  
     $("#toggleText").click(function(){
        $("#showHideBlock p").toggle();
     });


});