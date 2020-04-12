// var fearsOfMonthList = JSON.parse(localStorage.getItem("fearsOfMonthLocal")) || [];
// var fearsOfMonthListEl = $("#fearsOfMonth");
// // var fearsOfMonthNew = ""

// function renderFearsOfMonth () {
//     for (var i = 0; i < fearsOfMonthList.length; i++) {
//         fearsOfMonthListEl = fearsOfMonthList.join();
//         var fearsOfMonthListItem = $("<li>").addClass("uk-checkbox");
//         fearsOfMonthListItem.text(fearsOfMonthList[i]);
//         fearsOfMonthListEl.append(fearsOfMonthListItem);
//     }
// };
function addFearsOfMonth () {
    var fearsOfMonthNew = $("#fearsOfMonthText").val();
    console.log(fearsOfMonthNew);
}