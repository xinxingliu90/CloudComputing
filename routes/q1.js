(function () {
    "use strict";
    var express = require("express"),
        router  = express.Router();

    //Heartbeat and Authentication (q1)
    router.get("/", function (req, res) {
        var resp = String(req.query.key / process.env.X) + "\n";
        resp += process.env.TEAM_ID + "," + 
                process.env.AWS_ACCOUNT_ID1 + "," + 
                process.env.AWS_ACCOUNT_ID2 + "," + 
                process.env.AWS_ACCOUNT_ID3 + ",\n";
        resp += Date.now() + "\n";

        res.set("Content-Type", "text/plain");
        res.send(resp);
    });


    module.exports = router;
}());
    
