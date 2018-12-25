"use strict";

$(function() {       
    // Get the button, and when the user clicks on it, execute myFunction
    document.getElementById("myBtn").onclick = function() {myFunction()};

    /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
 
    // var fdurl = "https://api.fantasydata.net/v3/nba/stats/{format}/DfsSlatesByDate/{date}?";
    function nbaData() {
        // var fdurl = "https://api.fantasydata.net/v3/nba/stats/{format}/DfsSlatesByDate/{date}?";
        var fdurl = "https://api.fantasydata.net/v3/nba/stats/JSON/AllStars/2018";
        var params = { "key": ocpkey, "format": "JSON", "season": "2018" }; // Request paramenters

        $.ajax({
            url: fdurl + $.param(params),
            beforeSend: function(xhrObj){
              xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", ocpkey); // Request header(s)
            },
            type: "GET"
        })
        .done(function(data) {
            console.log("Success: " + JSON.stringify(data[0]));
        })
        .fail(function(e) {
            console.log("Error: "+ e);
        });
    }

    nbaData();
});

/* Example of a result
  {
    "PlayerID": 20000574,
    "Name": "Kyrie Irving",
    "TeamID": 31,
    "Team": "EAST",
    "Position": "Scrambled"
    }
*/