// Require friends data
const friendsData = require("../data/friends.js");

module.exports = (app) => {
  app.get("/api/friends",(req, res) =>{ 
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var userInput = req.body;
    console.log("in post");
      console.log("in api/friends req= " + JSON.stringify(req.body.scores));

    for (i=0; i<friendsData.length; i++){
      for (j=0; j<friendsData[i].scores.length; j++){
        sum += Math.abs(friendsData[i].scores[j] - req.body.scores[j]);
      }
      console.log('sum= ' + sum);
      if ( sum < totalDiff){
        console.log("checking diff sum");
        totalDiff = sum;
        matchIndex = i;
        matchName = friendsData[i].name;
        matchImage = friendsData[i].photo;
      }
      sum = 0;

    // totalDiff = diff.reduce(function(acc, val)  { return acc + val; }, 0);
    }
    console.log('Best matching record index= ' + matchIndex + "..." + JSON.stringify(friendsData[matchIndex]));
    totalDiff = 1000;
    friendsData.push(userInput);
    res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
  });
  

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------


}
  

