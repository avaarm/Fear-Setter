var levelNames = ["Brave Bunny", "Courageous Cat", "Daring Dog", "Fearless Ferret", "Gutsy Gator", "Heroic Hog", "Strong Snake", "Toughest Tiger"]
var bar = $("#myBar");
var newPerc = 0;

$(".uk-button-small").on("click", function () {
  newPerc += 10;
  bar.css("width", newPerc + "%");
  if (newPerc >= 100) {
    newPerc = 0;
    bar.css("width", newPerc + "%");
    var currentLevel = $(".level").text();
    var popped = currentLevel.charAt(currentLevel.length-1);
    $(".level").text("Level - " + (parseInt(popped) + 1));
    $(".levelName").text(levelNames[parseInt(popped)]);
  }
  callAPIs();
});

$("#saveFear").on("click", function () {
  newPerc += 50;
  bar.css("width", newPerc + "%");
  if (newPerc >= 100) {
    newPerc = 0;
    bar.css("width", newPerc + "%");
    var currentLevel = $(".level").text();
    var popped = currentLevel.charAt(currentLevel.length-1);
    $(".level").text("Level - " + (parseInt(popped) + 1));
    $(".levelName").text(levelNames[parseInt(popped)]);
  }
  callAPIs();
});

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

// $(document).ready(function () {
//   var levelNames = ["Brave Bunny", "Courageous Cat", "Daring Dog", "Fearless Ferret", "Gutsy Gator", "Heroic Hog", "Strong Snake", "Toughest Tiger"]
//   var bar = $(".uk-progress");
//   $(".uk-button-small").on("click", function () {
//     bar.value += 10;
//     if (bar.value >= bar.max) {
//       bar.value = 0;
//       var popped = $(".level").text.pop();
//       $(".level").text += (parseInt(popped) + 1);
//       $(".levelName").text = levelNames[parseInt(popped)];
//     }
//   });

//   $("#saveFear").on("click", function () {
//     bar.value += 50;
//     if (bar.value >= bar.max) {
//       bar.value = 0;
//       var popped = $(".level").text.pop();
//       $(".level").text += (parseInt(popped) + 1);
//       $(".levelName").text = levelNames[parseInt(popped)];
//     }
//   });
// });


