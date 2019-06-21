$(document).ready(function () {

    var targetNumber = 0;
    var wins = 0;
    var losses = 0;
    var score = 0;

    /**var gem1 = Math.floor(Math.random() * 12) + 1;
    var gem2 = Math.floor(Math.random() * 12) + 1;
    var gem3 = Math.floor(Math.random() * 12) + 1;
    var gem4 = Math.floor(Math.random() * 12) + 1;*/

    var counter = 0;

    function initializeGame() {

        var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        var wins = "";
        var losses = "";
        var score = 0;

        $("#targetNumber").text(targetNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#score").text(score);

    }
    initializeGame();

});