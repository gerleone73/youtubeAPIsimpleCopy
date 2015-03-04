$(document).ready(function(){

$(function(){



  $('#search-form').submit(function(event){ // when the user clicks submit....
    event.preventDefault(); // prevent the form from submitting
    var searchTerm = $('#query').val(); // take whatever is in the search field and put it in searchTerm
    getRequest(searchTerm); //call the function "getRequest" and pass it the search term
    
  });
});

function getRequest(searchTerm){
  var userQuery = searchTerm;
  //alert(typeof(userQuery));
  var params = {
    part: 'snippet',
    key: 'AIzaSyCv9Nshg35jhWqzLXlHqpAIoPTF6WSqbyc',
    q: userQuery,
    maxResults: 20
  };
  url = 'https://www.googleapis.com/youtube/v3/search'

  $.getJSON(url, params, function(data){
    //debugger;
    showResults(data.items);
    
  });
}

function showResults(results){ //shows the results to the user
  $('#query').val('');
  $('#search-results').empty();
  var html = ""; // variable to hold the html
  $.each(results, function(index,items){ //for each of the results
//debugger;
    html += '<p>' + items.snippet.title + '</p>'; // create a new paragraph with the title
    html+='<li><iframe src="https://www.youtube.com/embed/' + items.id.videoId + '"></iframe></li>';



    //html += '<img src=' + items.snippet.thumbnails.default.url + '>'; 
   // html += '</a>';

    //console.log(items.snippet.thumbnails.default.url);
    console.log(items.id.videoId);
  });
  $('#search-results').append(html); // display each of those paragraphs on the page
}


});

