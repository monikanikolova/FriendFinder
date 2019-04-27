// Require friends data
const friendsData = require("../data/friends.js");


module.exports = (app) => {
  app.get("/api/friends", (req, res) => {
    res.json(friendsData);
  });

  app.post("/api/friends", (req, res) => {
    var newFriend = req.body.scores;
    var matchIndex = 100;
    var bestMatch;

    friendsData.forEach((friend) => {
      newFriend.forEach((scores) => {
        var totalDiff = 0;
        totalDiff += (Math.abs(parseInt(friend.scores) - parseInt(scores)));
        if (totalDiff <= matchIndex) {
          matchIndex = totalDiff;
          bestMatch = friend;
        }
      });
    });
    res.json(bestMatch)
    friendsData.push(req.body);
  });
};


