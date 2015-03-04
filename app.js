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
  var videos = ""; // variable to hold the videos
  var html="";
  $.each(results, function(index,items){ //for each of the results
//debugger;
    
    videos+='<li><iframe src="https://www.youtube.com/embed/' + items.id.videoId + '"></iframe></li>';
    html += '<p>' + items.snippet.title + '</p>'; // create a new paragraph with the title


    //html += '<img src=' + items.snippet.thumbnails.default.url + '>'; 
   // html += '</a>';

    //console.log(items.snippet.thumbnails.default.url);
    console.log(items.id.videoId);
  });
  $('#search-results').append(videos); // display each of those paragraphs on the page
  $('.info').append(html);
}


});

