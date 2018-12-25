Working on putting all of the API response information into the HTML tables for the football and basketball pages

---
ALWAYS include your Ocp-Apim-Subscription-Key

Remember: To find a player's id you need to Google "Fantasy data {player first name} {player last name}" because finding it any other way isn't that easy.
Ex: Google search -> fantasy data Theo Riddick

---
Example of response from API call for NFL player details by player, with the playerID as a parameter:
https://api.fantasydata.net/v3/nfl/stats/{format}/Player/{playerid} <- Format: JSON (recommended), playerid: 15126
		```
		{
		  "PlayerID": 15126,
		  "Team": "DET",
		  "Number": 25,
		  "FirstName": "Theo",
		  "LastName": "Riddick",
		  "Position": "RB",
		  "Status": "Active",
		  "Height": "5'10\"",
		  "Weight": 201,
		  "BirthDate": "1991-05-04T00:00:00",
		  "College": "Notre Dame",
		  "Experience": 6,
		  "FantasyPosition": "RB",
		  "Active": true,
		  "PositionCategory": "OFF",
		  "Name": "Theo Riddick",
		  "Age": 27,
		  "ExperienceString": "6th Season",
		  "BirthDateString": "May 4, 1991",
		  "PhotoUrl": "https:\/\/s3-us-west-2.amazonaws.com\/static.fantasydata.com\/headshots\/nfl\/low-res\/15126.png",
		  "ByeWeek": 6,
		  "UpcomingGameOpponent": "MIN",
		  "UpcomingGameWeek": 16,
		  "ShortName": "T.Riddick",
		  "AverageDraftPosition": 224.3,
		  "DepthPositionCategory": "Scrambled",
		  "DepthPosition": "Scrambled",
		  "DepthOrder": 2,
		  "DepthDisplayOrder": 2,
		  "CurrentTeam": "DET",
		  "CollegeDraftTeam": "DET",
		  "CollegeDraftYear": 2013,
		  "CollegeDraftRound": 6,
		  "CollegeDraftPick": 224,
		  "IsUndraftedFreeAgent": false,
		  "HeightFeet": 5,
		  "HeightInches": 10,
		  "UpcomingOpponentRank": 5,
		  "UpcomingOpponentPositionRank": 11,
		  "CurrentStatus": "Scrambled",
		  "UpcomingSalary": 4620,
		  "FantasyAlarmPlayerID": 300084,
		  "SportRadarPlayerID": "62d4e94c-443f-44ed-9404-c6d6bdd9aa64",
		  "RotoworldPlayerID": 8485,
		  "RotoWirePlayerID": 8763,
		  "StatsPlayerID": 508985,
		  "SportsDirectPlayerID": 40505,
		  "XmlTeamPlayerID": 18827,
		  "FanDuelPlayerID": 33465,
		  "DraftKingsPlayerID": 508985,
		  "YahooPlayerID": 26822,
		  "InjuryStatus": "Scrambled",
		  "InjuryBodyPart": "Scrambled",
		  "InjuryStartDate": null,
		  "InjuryNotes": "Scrambled",
		  "FanDuelName": "Theo Riddick",
		  "DraftKingsName": "Theo Riddick",
		  "YahooName": "Theo Riddick",
		  "FantasyPositionDepthOrder": 2,
		  "InjuryPractice": "Scrambled",
		  "InjuryPracticeDescription": "Scrambled",
		  "DeclaredInactive": false,
		  "UpcomingFanDuelSalary": 6198,
		  "UpcomingDraftKingsSalary": 4620,
		  "UpcomingYahooSalary": 12,
		  "TeamID": 11,
		  "GlobalTeamID": 11,
		  "FantasyDraftPlayerID": 508985,
		  "FantasyDraftName": "Theo Riddick",
		  "UsaTodayPlayerID": 2012,
		  "UsaTodayHeadshotUrl": "http:\/\/cdn.usatsimg.com\/api\/download\/?imageID=10466851",
		  "UsaTodayHeadshotNoBackgroundUrl": "http:\/\/cdn.usatsimg.com\/api\/download\/?imageID=10476146",
		  "PlayerSeason": null,
		  "LatestNews": []
		}
		```

---
