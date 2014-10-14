(function () {
    "use strict";
    var express = require("express"),
        router  = express.Router();

    var Q1      = require("./q1");

    /* GET home page. */
    router.get('/', function (req, res) {
        res.render("index", { title: 'Express' });
    });

    router.use("/q1", Q1);

    module.exports = router;
}());
    
