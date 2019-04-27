// Require friends data
const friendsData = require("../data/friends.js");


module.exports = (app) => {
  app.get("/api/friends", (req, res) => {
    res.json(friendsData);
  });

  app.post("/api/friends", (req, res) => {
    var newFriend = req.body.scores;
    var totalDiff = 0;
    var matchIndex;
    var bestMatch;

    friendsData.forEach((friend) => {
      newFriend.forEach((scores) => {
        totalDiff += (Math.abs(parseInt(friend.scores) - parseInt(scores)));
        if (totalDiff <= matchIndex) {
          matchIndex = totalDiff;
          bestMatch = friend;
        }
      });
    });
    friendsData.push(req.body);
  });
};


