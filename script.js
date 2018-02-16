$(document).ready(function() {
  $("#recipeSubmit").click(function(e) {
    e.preventDefault();
    var value = $("#recipeInput").val();
      console.log(value);

      var myurl= "http://api.yummly.com/v1/api/recipes?_app_id=1c15de65&_app_key=473327443e538d6ff92f89eeac912c70&q=" + value + "&requirePictures=true";

      $.ajax({
          url : myurl,
          dataType : "json",
          success : function(json) {
        console.log(json);
        var results = "";
        for (var i=0; i<json.matches.length; i++) {
        results += '<h5><br>' + json.matches[i].recipeName + '</h5>';
        results += "<h5>"
        results += '<img src="' + json.matches[i].smallImageUrls + '" />';
        results += "<img>"
        results += '<h4>'+ json.matches[i].ingredients + '</h4>';
        results += "<h4> <hr>"

        }
        
        $("#recipeResults").html(results);
        
        }
      });
    });
})