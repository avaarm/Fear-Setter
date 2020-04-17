$(".uk-button-small").on("click", function () {
  callAPIs();
});


$("#saveFear").on("click", function () {
  callAPIs();
});

function callAPIs() {
  // Inspirational Quote API
  $.ajax({
    url: "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand",
    method: "GET"
  }).then( function(response) {
    var quote = $(response[0].content.rendered);
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