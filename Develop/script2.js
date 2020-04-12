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
            console.log(fearsConqueredNew);
   
    if (fearsConqueredList.indexOf(fearsConqueredNew) === -1) {
        fearsConqueredList.push(fearsConqueredNew);
         localStorage.setItem("fearsConqueredLocal", JSON.stringify(fearsConqueredList));
    }
}
    renderFearsConquered();
    }
    )
});

// Possible drag and drop feature code:

// function allowDrop(ev) {
//     ev.preventDefault();
//   }
  
//   function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//   }
  
//   function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.append($("#data"));
//   }