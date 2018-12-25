"use strict";

$(function() {       
    // var fdurl = "https://api.fantasydata.net/v3/nba/stats/{format}/DfsSlatesByDate/{date}?";
    function nbaData() {
        // var fdurl = "https://api.fantasydata.net/v3/nba/stats/{format}/DfsSlatesByDate/{date}?";
        var fdurl = "https://api.fantasydata.net/v3/nba/stats/JSON/AllStars/2018";
        var ocpkey      = "PLUG IN YOUR KEY IN THIS STRING"; // Ex. var ocpkey = "123456789098765432123456";
        var params = { "format": "JSON", "season": "2018" }; // Request paramenters
        var finalData = "";

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