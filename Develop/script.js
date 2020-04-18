var levelNames = ["Brave Bunny", "Courageous Cat", "Daring Dog", "Fearless Ferret", "Gutsy Gator", "Heroic Hog", "Strong Snake", "Toughest Tiger"]
var bar = $("#myBar");

if (localStorage.getItem("levelObj") !== null) {
  var levelObj = JSON.parse(localStorage.getItem("levelObj"));
  bar.css("width", levelObj[0].progress + "%");
  $(".level").text("Level - " + levelObj[0].level)
  $(".levelName").text(levelObj[0].levelName);
} else {
  var levelObj = [{progress: 0, level: 1, levelName: "Brave Bunny"}]
}

function fearConq() {
  levelObj[0].progress += 25;
  changeProgress();
  callAPIs();
};

$("#saveFear").on("click", function () {
  callAPIs();
});

function changeProgress() {
  bar.css("width", levelObj[0].progress + "%");
  if (levelObj[0].progress >= 100) {
    levelObj[0].progress = 0;
    bar.css("width", levelObj[0].progress + "%");
    var currentLevel = $(".level").text();
    var popped = currentLevel.charAt(currentLevel.length-1);
    $(".level").text("Level - " + (parseInt(popped) + 1));
    $(".levelName").text(levelNames[parseInt(popped)]);
    levelObj[0].level = (parseInt(popped) + 1);
    levelObj[0].levelName = levelNames[parseInt(popped)];
  }
  
  localStorage.setItem("levelObj", JSON.stringify(levelObj));
}

function callAPIs() {
  $(".quote").empty();
  $(".gif").empty();
  $(".wellDoneHeader").text("");

  var wellDone = $("<h1>").attr("class", "wellDoneHeader").text("Well Done!")
  $(".headerPosition").append(wellDone);

  // Inspirational Quote API
  $.ajax({
    url: "https://type.fit/api/quotes",
    method: "GET"
  }).then(function (response) {
    response = JSON.parse(response);
    var randNum = Math.floor(Math.random() * 689);
    while (response[randNum].author == "Donald Trump") {
      randNum = Math.floor(Math.random() * 689);
    }
    if (response[randNum].author == null) {
      response[randNum].author = "unknown";
    }
    var quote = $("<p>").text(response[randNum].text + " - " + response[randNum].author);
    $(".quote").append(quote);
  });

  // Giphy API
  $.ajax({
    url: "https://api.giphy.com/v1/gifs/random?api_key=" + config.giphyAPI + "&tag=cute",
    method: "GET"
  }).then(function (response) {
    var imageUrl = response.data.image_original_url;
    var randGIF = $("<img>");
    randGIF.attr("src", imageUrl).attr("alt", "random image");
    $(".gif").append(randGIF);
  });
}

$(document).on("click", "#fearConqueredBtn", fearConq);