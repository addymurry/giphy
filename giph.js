var gifList = ["Spiderman", "Iron Man", "Hulk"];
$("button").on("click", function() {

    var character = $(this).attr("data-character");


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      character + "&api_key=dc6zaTOxFJmzC&limit=10";


    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function(response) {

        var results = response.data;

        for (var i = 0; i < results.length; i++) {


          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
  
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);


            var personImage = $("<img>");


            personImage.attr("src", results[i].images.fixed_height.url);


            gifDiv.prepend(p);
            gifDiv.prepend(personImage);


            $("#gifs").append(gifDiv);
          }
        }
        function renderButtons() {

        $("#stuff").empty();
            for (var i = 0; i< gifList.length; i++){
                var a = $("<button>");
                a.addClass("stuff")
                a.attr("data-name", gifList[i]);
                a.text(gifList[i]);
                $("#stuff").append("#gifs");
            }
        }
    $("addGif").on("click",function(event){
        event.preventDefault();
        var gifView = $("#gifInput").val().trim();
        gifList.push(gifView);
        renderButtons();
    });
    renderButtons();
      });
  });