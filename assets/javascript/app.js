
// Change to update articlesearch variable based on html div-inut value
// var queryURL = url + startDate + sDate + endDate + eDate + search + articlesearch + apiKey;
$('#submit-button').on('click', function(){
  var queryURL = url + startDate + sDate + endDate + eDate + search + articlesearch + apiKey
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  var apiKey = "&api-key=GcR8QqnLL0kLEyVO8JdrwzVAGj0osRA4";
  var search = "&q="
  // var year = "2012";
  // https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20170101&end_date=20181231&q=mushrooms&api-key=GcR8QqnLL0kLEyVO8JdrwzVAGj0osRA4
  var sDate = $('#start-year').val();
  var eDate = $('#end-year').val();
  var startDate = "begin_date=" + sDate + "0101&";
  var endDate = "end_date=" + eDate + "1231&";
  var articlesearch = $('.fa-newspaper').val(); 

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    // $(':input').change(function();
    var newArt = $('<div>');

    for (var i = 0; i < response.length; i++) {

    var webLink = response.docs[i].web_url;
    var author = response.docs[i].byline.original;
    var articleDate = response.docs[i].pub_date;
    var articleTitle = response.docs[i].headline.main;

    newArt.prepend(author);
    newArt.prepend(articleTitle);
    newArt.prepend(articleDate);
    newArt.prepend(webLink);

    $('#top-results').prepend(newArt);
    }

    // $('#clear-button').loca

    
  });
});

// getResponse();