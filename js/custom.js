$(document).ready(function(){

    
//Define our event listener
    //listening for submit event, need to prevent default
    //declare variables to store the artist and song title, aka the form inputs (need to get the values from the inputd)
//Ajax call
    //Get request
    //Input: Two strings from the form, concantenated with our created variables
    //Output: String of lyrics
    //Callback
        //success -->  console log the response
        //error -->  console log the error


//Purpose: Take in two strings from a form, get song lyrics appended to div

//url: "https://www.reddit.com/r/aww/search.json?q=" + userAnimal + "&restrict_sr=true",


    $("#findLyrics").on("submit", function(e){
        e.preventDefault();
        $(".lyricsContainer").text("getting lyrics...");
        var artist = $("#artist").val();
        var song = $("#song").val();

        var url = "https://api.lyrics.ovh/v1/" + artist+ "/" + song + "";
        //in ES5 it will look like this:
        // fetch(url).then(function(response){
        //     var processedLyrics = response.json();
        //     return processedLyrics;
        // })
        //NOTES: fetch does not like calculations on your url, so you have to concatenate or construct the url first
        //NOTES: remember that fetches return promises if the fetch is successful
        // in ES6 it will look like this:
        fetch(url).then(response => {
            var processedLyrics = response.json();
            return processedLyrics;
        }).then(processedLyrics => {
            $(".lyrics-container").html("<p>" + processedLyrics.lyrics + "</p>");
        }).catch(error=> {
            console.log(error);
            alert("Please enter a valid song/artist combo")
        });


        //AJAX call
        // $.ajax({
        //     type: "GET",
        //     url: "https://api.lyrics.ovh/v1/" + artist+ "/" + song + "",
        //     success: function(data) {
        //         $(".lyrics-container").html("<p>" + data.lyrics + "</p>");
        //     },
        //     error: function(xhr, status, e){
        //         console.log(status, e);
        //         //$(".lyrics-container").html("<p>Please enter a valid song and artist combo.</p>");
        //         alert("Please enter valid artist and song combo");
        //     }
        // })

    });
});