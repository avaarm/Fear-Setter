var fearsOfMonthList = JSON.parse(localStorage.getItem("fearsOfMonthLocal")) || [];
var fearsOfMonthListEl = $("#monthList");
var fearsOfMonthNew = ""

var fearOfDayList = JSON.parse(localStorage.getItem("fearOfDayLocal")) || [];
var fearOfDayListEl = $("#dayList");
var fearOfDayNew = ""


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
    if (fearsOfMonthList.indexOf(fearsOfMonthNew) === -1) {
        fearsOfMonthList.push(fearsOfMonthNew);
        localStorage.setItem("fearsOfMonthLocal", JSON.stringify(fearsOfMonthList));
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