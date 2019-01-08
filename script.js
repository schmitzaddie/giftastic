var topics = ["dog", "gerbil", "llama"]

for (let i = 0; i < topics.length; i++) {
    var button = $("<button>" + topics[i] + "</button>")
    button.attr("data-name", topics[i]);
    button.appendTo("#buttons");
}

$("button").on("click", function () {
    var name = $(this).attr("data-name");
    console.log(name);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=nZpylXIi5BdBkzLymfwq2VUv0Wngi0VR&limit=10&q=" + name;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var animal = $("<div>");
        var results = response.data;
        for (let i = 0; i < results.length; i++) {
            //console.log(i);
            var p = $("<p>").text("Rating: " + results[i].rating);
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height_still.url);
            //console.log(results[i].images.fixed_height_still.url);
            $(animalImage).on("click", function(){
                animalImage.attr("src", results[i].images.fixed_height.url);
            });
            $("#gifs").append(p);
            $("#gifs").append(animalImage);
        };
    });
});

