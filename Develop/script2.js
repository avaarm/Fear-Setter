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
renderUser();

function renderFearsOfMonth () {
    $("#monthList").empty();
    for (var i = 0; i < fearsOfMonthList.length; i++) {
        fearsOfMonthListEl = fearsOfMonthList.join();
        var fearsOfMonthListItem = $("<li>")
        fearsOfMonthListItem.html("-<button class='fearsOfMonthListBtn uk-button uk-button-primary uk-button-small' id='fearConqueredBtn'>Fear Conquered!</button>");
        fearsOfMonthListItem.prepend(fearsOfMonthList[i]);
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
    location.reload();
})

function renderFearOfDay () {
    $("#dayList").empty();
    for (var i = 0; i < fearOfDayList.length; i++) {
        fearOfDayListEl = fearOfDayList.join();
        var fearOfDayListItem = $("<li>");
        fearOfDayListItem.html("-<button class='fearOfDayListBtn uk-button uk-button-primary uk-button-small' id='fearConqueredBtn'>Fear Conquered!</button>");
        fearOfDayListItem.prepend(fearOfDayList[i]);
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
    location.reload();
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

$(".fearsOfMonthListBtn").on("click", function (event){
    event.preventDefault();
    fearsConqueredNew = $(this).parent().text().split("-")[0];                          //returns text without button text
    fearsConqueredList.push(fearsConqueredNew);
    fearsOfMonthList = JSON.parse(localStorage.getItem("fearsOfMonthLocal")) || [];
    const filteredfearsOfMonthList = fearsOfMonthList.filter(ele => ele !== fearsConqueredNew); //filter out fearsConqueredNew. New array is filteredFearsOfMonthList
    fearsOfMonthList = filteredfearsOfMonthList;       
    localStorage.setItem("fearsOfMonthLocal", JSON.stringify(fearsOfMonthList));
    localStorage.setItem("fearsConqueredLocal", JSON.stringify(fearsConqueredList));
    renderFearsOfMonth();    
    renderFearsConquered();
    // location.reload();
})                                  

$(".fearOfDayListBtn").on("click", function (event){
    event.preventDefault();
    fearsConqueredNew = $(this).parent().text().split("-")[0];
    fearsConqueredList.push(fearsConqueredNew);
    fearOfDayList = JSON.parse(localStorage.getItem("fearOfDayLocal")) || [];
    const filteredfearOfDayList = fearOfDayList.filter(ele => ele !== fearsConqueredNew);
    fearOfDayList = filteredfearOfDayList;       
    localStorage.setItem("fearOfDayLocal", JSON.stringify(fearOfDayList));
    localStorage.setItem("fearsConqueredLocal", JSON.stringify(fearsConqueredList));
    renderFearOfDay();    
    renderFearsConquered();
    // location.reload();
})   

// Code for username modal
var newUsername = JSON.parse(localStorage.getItem("userLocal"))
var savebtn = document.getElementsByClassName("saveUserbtn")[0];
var usernamebtn = document.getElementById("createUser");
var cancel = document.getElementsByClassName("cancelbtn")[0];
usernamebtn.onclick = function() {
    $("#usernameModal").css("display", "block");
}
cancel.onclick = function() {
    $("#usernameModal").css("display", "none");
}
savebtn.onclick = function() {
    storeUser();
    $("#usernameModal").css("display", "none");
}

function storeUser () {
    newUsername = $("#usernameInput").val();
    localStorage.setItem("userLocal", JSON.stringify(newUsername));
    renderUser ();
}
function renderUser () {
    newUsername = JSON.parse(localStorage.getItem("userLocal"));
    console.log(newUsername);
    $("#user").text(newUsername);
}