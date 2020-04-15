var newUsername = ""
// var modal = document.getElementById("myModal");
var savebtn = document.getElementsByClassName("saveUserbtn");
// Get the button that opens the modal
var usernamebtn = document.getElementById("createUser");
// var btn = $("#createUser");
var cancel = document.getElementsByClassName("cancelbtn")[0];
usernamebtn.onclick = function() {
    $("#usernameModal").css("display", "block");
}

cancel.onclick = function() {
    $("#usernameModal").css("display", "none");
    // $("#usernameModal").style.display = "none";
}
savebtn.onclick = function() {
    // event.preventDefault();
    storeUser();
    $("#usernameModal").css("display", "none");
}

function storeUser () {
    var newUsername = $("usernameInput").val();
    console.log(newUsername);
    // $("#user").text(newUsername);
}
// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == $("#usernameModal")) {
    $("#usernameModal").css("display", "none");
  }
}


var fearsOfMonthList = JSON.parse(localStorage.getItem("fearsOfMonthLocal")) || []; 
var fearsOfMonthListEl = $("#monthList");
var fearsOfMonthNew = ""

var fearOfDayList = JSON.parse(localStorage.getItem("fearOfDayLocal")) || [];
var fearOfDayListEl = $("#dayList");
var fearOfDayNew = ""

var fearsConqueredList = JSON.parse(localStorage.getItem("fearsConqueredLocal")) || [];
var fearsConqueredListEl = $("#conqueredList");
var fearsConqueredNew = ""

renderFearsOfMonth();
renderFearOfDay();
renderFearsConquered();

function renderFearsOfMonth () {
    $("#monthList").empty();
    for (var i = 0; i < fearsOfMonthList.length; i++) {
        fearsOfMonthListEl = fearsOfMonthList.join();
        var fearsOfMonthListItem = $("<li>").html("<input class='uk-checkbox' type='checkbox' />");
        var fearsOfMonthListItemCheckbox = $("<input>").attr({class: "uk-checkbox", type: "checkbox"});
        fearsOfMonthListItem.text(fearsOfMonthList[i]);
        fearsOfMonthListItem.append(fearsOfMonthListItemCheckbox);
        $("#monthList").append(fearsOfMonthListItem);
    }
};

$("#fearsOfMonthBtn").on("click", function (event){
    event.preventDefault();
    fearsOfMonthNew = $("#fearsOfMonthText").val();
    if (fearsOfMonthList.indexOf(fearsOfMonthNew) === -1) {                          //if fearsOfMonthList is empty
        fearsOfMonthList.push(fearsOfMonthNew);                                      //add to list
        localStorage.setItem("fearsOfMonthLocal", JSON.stringify(fearsOfMonthList)); //set localStorage
    }
    renderFearsOfMonth();
})

function renderFearOfDay () {
    $("#dayList").empty();
    for (var i = 0; i < fearOfDayList.length; i++) {
        fearOfDayListEl = fearOfDayList.join();
        var fearOfDayListItem = $("<li>").html("<input class='uk-checkbox' type='checkbox' />");
        var fearOfDayListItemCheckbox = $("<input>").attr({class: "uk-checkbox", type: "checkbox"});
        fearOfDayListItem.text(fearOfDayList[i]);
        fearOfDayListItem.append(fearOfDayListItemCheckbox);
        $("#dayList").append(fearOfDayListItem);
    }
};

$("#fearOfDayBtn").on("click", function (event){
    event.preventDefault();
    fearOfDayNew = $("#fearOfDayText").val();
    if (fearOfDayList.indexOf(fearOfDayNew) === -1) {
        fearOfDayList.push(fearOfDayNew);
        localStorage.setItem("fearOfDayLocal", JSON.stringify(fearOfDayList));
    }
    renderFearOfDay();
})

function renderFearsConquered () {
    $("#conqueredList").empty();
    for (var i = 0; i < fearsConqueredList.length; i++) {
        fearOfDayListEl = fearOfDayList.join();
        var fearsConqueredListItem = $("<li>");
        fearsConqueredListItem.text(fearsConqueredList[i]);
        $("#conqueredList").append(fearsConqueredListItem);
    }
}

$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            fearsConqueredNew = $(this).parent().text();
            fearsConqueredList.push(fearsConqueredNew);
            var fearRemoved = $(this).parent().text();
            $(this).parent().remove();
            $(this).remove();
            fearsOfMonthList = JSON.parse(localStorage.getItem("fearsOfMonthLocal")) || [];
            // console.log(fearsOfMonthList);
            // console.log(fearRemoved);
            fearsOfMonthList.splice(fearRemoved, 1);
            // console.log(fearsOfMonthList);
            localStorage.setItem("fearsOfMonthLocal", JSON.stringify(fearsOfMonthList));
            console.log(fearsOfMonthList);
            // localStorage.removeItem("fearsOfMonthLocal", $(this).parent().text());
            // console.log($(this).parent().text());
            localStorage.setItem("fearsConqueredLocal", JSON.stringify(fearsConqueredList));
}
renderFearsOfMonth();    
renderFearsConquered();
    })
});