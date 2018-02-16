$(document).ready(function() {
  $("#recipeSubmit").click(function(e) {
    e.preventDefault();
    var value = $("#recipeInput").val();
      console.log(value);

      var myurl= "http://api.yummly.com/v1/api/recipes?_app_id=1c15de65&_app_key=473327443e538d6ff92f89eeac912c70&" + value + "&requirePictures=true";

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
        results += '<h5>'+ json.matches[i].ingredients + ', </h5>';
        results += "<h5> <hr>"

        }
        
        $("#recipeResults").html(results);
        
        }
      });
    });
})
   
        // var results = "";
        // results += '<h5>Weather in ' + json.name + "</h5>";
        // for (var i=0; i<json.weather.length; i++) {
            
        //     results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        // }
        // results += '<h5>' + json.main.temp + " &deg;F</h5>"
        // results += "<h5>"
        // for (var i=0; i<json.weather.length; i++) {
        //     results += json.weather[i].description
        //     if (i !== json.weather.length - 1)
        //   results += ", "
        // results += '<h5>' + json.wind.speed + " mph wind</h5>"
        // results += "<h5>"
        // }
        // results += "</p>";
        // $("#weatherResults").html(results);
