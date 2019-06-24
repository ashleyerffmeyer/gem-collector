$(document).ready(function () {

    //GLOBAL VARIABLES
    //------------------------------------

    //Current and Target Scores
    var targetScore = 0;
    var score = 0;

    //Wins and Losses
    var wins = 0;
    var losses = 0;

    //Gems - Objects with names and values
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

    //------------------------------------
    //FUNCTIONS
    //------------------------------------

    // Function to produce a random number between two values (a minimum value and a maximum value)
    var getRandomNum = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Function to start/initialize game logic
    var initializeGame = function () {

        //Reset current score back to 0
        score = 0;

        //Set a new target score, a random number between 19 and 120
        targetScore = getRandomNum(19, 120);

        //Set new values for each gem, random numbers between 1 and 12
        gem.gem1.value = getRandomNum(1, 12);
        gem.gem2.value = getRandomNum(1, 12);
        gem.gem3.value = getRandomNum(1, 12);
        gem.gem4.value = getRandomNum(1, 12);

        //Update HTML to show start/initial values
        $("#score").html(score);
        $("#targetScore").html(targetScore);
    }

    //Function to add values of gems together
    var addvalues = function (gem) {

        //Calculates current score
        score = score + gem.value;

        //Update HTML to show new current score value
        $("#score").html(score);

        //Call checkWin function to check if user won or lost
        checkWin();
    }

    //Function to check if user won or lost and reset game
    var checkWin = function () {
        //Determine if user's score is greater than the target score
        if (score > targetScore) {

            //Tell the user they lost
            alert("You lost - your score is great than the target score! Please try again!");

            //Add the loss to the lost counter
            losses++

            //Update HTML to show new loss value
            $("#losses").html(losses);

            //Call initializeGame function to start game logic again
            initializeGame();
        }

        //If the user's score is not greater than the target score, then check to see if the score is equal to the target score
        else if (score == targetScore) {

            //Tell the user they won!
            alert("Congratulations! You've won!!");

            //Add the win to the win counter
            wins++

            //Update HTML to show new wins value
            $("#wins").html(wins);

            //Call initializeGame function to start game logic again
            initializeGame();
        }
    }


    //------------------------------------
    //MAIN PROCESS
    //------------------------------------
    $("#gem1").on("click", function () {
        addvalues(gem.gem1);

    });

    $("#gem2").on("click", function () {
        addvalues(gem.gem2);
    });

    $("#gem3").on("click", function () {
        addvalues(gem.gem3);
    });

    $("#gem4").on("click", function () {
        addvalues(gem.gem4);
    });

    initializeGame();

});