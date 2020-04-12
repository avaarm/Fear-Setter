var fearsOfMonthList = JSON.parse(localStorage.getItem("fearsOfMonthLocal")) || [];
var fearsOfMonthListEl = $("#monthList");
var fearsOfMonthNew = ""
renderFearsOfMonth();

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
function addFearsOfMonth () {
    fearsOfMonthNew = $("#fearsOfMonthText").val();
    console.log(fearsOfMonthNew);
}

$("#fearsOfMonthBtn").on("click", function (event){
    event.preventDefault();
    addFearsOfMonth();
    if (fearsOfMonthList.indexOf(fearsOfMonthNew) === -1) {
        fearsOfMonthList.push(fearsOfMonthNew);
        localStorage.setItem("fearsOfMonthLocal", JSON.stringify(fearsOfMonthList));
    }
    renderFearsOfMonth();

})