$(".uk-button-small").on("click", function () {
  callAPIs();
});

$("#saveFear").on("click", function () {
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

