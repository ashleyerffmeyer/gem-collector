$(document).ready(function () {

    //GLOBAL VARIABLES
    //------------------------------------

    //Current and Target Scores
    var targetNumber = 0;
    var score = 0;

    //Wins and Losses
    var wins = 0;
    var losses = 0;

    //Gems - Objects wtih names and values
    var gem = {
        gem1:
        {
            name: "gem1",
            value: 0
        },
        gem2:
        {
            name: "gem2",
            value: 0
        },
        gem3:
        {
            name: "gem3",
            value: 0
        },
        gem4:
        {
            name: "gem4",
            value: 0
        }
    };


    var gem1 = Math.floor(Math.random() * 12) + 1;
    var gem2 = Math.floor(Math.random() * 12) + 1;
    var gem3 = Math.floor(Math.random() * 12) + 1;
    var gem4 = Math.floor(Math.random() * 12) + 1;

    var counter = 0;

    //FUNCTIONS
    //------------------------------------

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


    //MAIN PROCESS
    //------------------------------------
    $(".img-thumbnail").on("click", function () {

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        gem1.attr("data-gem1-value", gem1);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $(".img-thumbnail").append(gem1);

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var gemValue1 = ($(this).attr("data-gem1-value"));
        gemValue1 = parseInt(gemValue1);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        score += gemValue1;
        console.log(score);

        // All of the same game win-lose logic applies. So the rest remains unchanged.
        $("#score").text(score);

        /**if (counter === targetNumber) {
            alert("You win!");
        }

        else if (counter >= targetNumber) {
            alert("You lose!!");
        }*/

    });

});