"use strict";

$(function() {      
    function nflData() {
        var fdurl       = "https://api.fantasydata.net/v3/nfl/stats/json/player/";
        var playerID    = [18878, 13337, 12109, 17960, 15126]; // PLUG IN ANY 5 PLAYER IDS IN THIS ARRAY. THESE 5 ARE EXAMPLES
        var ocpkey      = "PLUG IN YOUR KEY IN THIS STRING"; // Ex. var ocpkey = "123456789098765432123456";
        var finalData = "";


      // Where the real fun begins!
        playerID.forEach(function(playerIDNum, playerArrIndex) { 
            $.ajax({
              url: fdurl + playerIDNum,
              beforeSend: function(xhrObj){
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", ocpkey); // Request header(s)
              },
              type: "GET"
            })
            .done(function(data) {
              var domElFinder = "table#football_table tr#player" + playerArrIndex + " td:first";
              var playerName = "<span>"+ data["FirstName"] + " " + data["LastName"] + "</span>"
              var tableForData = $(domElFinder);
              tableForData.append( playerName );
            })
            .fail(function(e) {
              console.log("Error: "+ e);
            });
        });
    }

    nflData();
});


// Simulation -> https://api.fantasydata.net/v3/nfl/scores/JSON/SimulatedScores/5?key=
/*
Alvin Kamara   <- 18878
Mark Ingram    <- 13337
Ted Ginn       <- 12109
Michael Thomas <- 17960
Theo Riddick   <- 15126
*/