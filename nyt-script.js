// _Hint, look at the Aricle Search API_
// *Stage 1*
// # New York Times Article Search - Phase 01

// ## Front-End Team
// ![nyt-search](Images/nyt.png)

// * Create the layout for the design above. Feel free to use Bootstrap or to do something more customized of your own.

// * Make sure to organize your code so as to have the necessary IDs.

// * Incorporate text boxes for capturing User Input. Then research how to retrieve the input values in JavaScript

// ## Back-End Team

// * Do preliminary research on the [API](https://developer.nytimes.com/).

// * Register for an API Key.

// * Understand what format the URL should look like to make an Article Call. (Hint: Use the API Console!!)

// * Experiment with console logging various fields. (edited) 

    var apikey = "542bd981a968df5d53d0696fbb59d466"
    var article;
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key="+apikey;

    console.log(queryURL)
    
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

      }