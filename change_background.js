
$("#submitCity").click(function() {

    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather",
        data: {
            q: $("#city").val(),
            APPID: '61b3cff64285cad2b26550ab28e58fa8'
            },
            dataType: "jsonp",
            type: "post",
            success: function (data) {
                console.log(data['weather'][0]["main"])
                var weather_image = data['weather'][0]["main"]
                $("body").css({"background-image": "url(img/" + weather_image + ".jpg)", "background-size": "100%", "background-repeat": "no-repeat"});
            }
    });

//    $("body").css({"background-image": "url(img/" + weather_image + ".png)", "background-size": "100%", "background-repeat": "no-repeat"});
});



//document.getElementById('sub').addEventListener('click', function () {
//    event.preventDefault();
//    var color = document.getElementById('color').value;
//    document.body.style.backgroundColor = color
//});



//jquery process data
// key = 61b3cff64285cad2b26550ab28e58fa8



//{"coord":
//{"lon":145.77,"lat":-16.92},
//"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
//"base":"cmc stations",
//"main":{"temp":293.25,"pressure":1019,"humidity":83,"temp_min":289.82,"temp_max":295.37},
//"wind":{"speed":5.1,"deg":150},
//"clouds":{"all":75},
//"rain":{"3h":3},
//"dt":1435658272,
//"sys":{"type":1,"id":8166,"message":0.0166,"country":"AU","sunrise":1435610796,"sunset":1435650870},
//"id":2172797,
//"name":"Cairns",
//"cod":200}

//<input id="hex" type="text" pattern="\d{1,3}, \d{1,3}, \d{1,3}"><br>

//https://openweathermap.org/current


/*
.Make a program that changes the background based on the weather
...Do a basic background image change
......Look at angry dice image change
......Change background based on variable
...Get basic information
......Look at Chris's example
......Look at my python code
...Add a button and a text box
......Checkout my color change html
*/


//$.ajax({
//    url: "http://api.openweathermap.org/data/2.5/weather",
//    data: {
//        q: 'London',
//        APPID: '9ef3311b380d2586bf47ff522529e7a9'
//    },
//    dataType: "jsonp",
//    type: "post",
//    success: function (data) {
//        console.log(data)
//    }
//});
