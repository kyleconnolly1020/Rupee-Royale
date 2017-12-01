$(document).ready(function () {

    //set the variables to be utilized in the game
    var randomNumber = 0;
    var totalScore = 0;
    var greenPoints = 0;
    var bluePoints = 0;
    var redPoints = 0;
    var purplePoints = 0;
    var wins = 0;
    var losses = 0;

    var song = new Audio("assets/images/35 lost woods.mp3");

    $(".anim").hide();

    //Have the computer pick a random number between 19 and 120 
    randomNumber = Math.floor(Math.random() * 102) + 19;

    //display randomNumber in the browser window
    $("#randomNumberScore").text(randomNumber);

    //Have the computer pick a random number for each crystal between 1 and 12
    greenPoints = Math.floor(Math.random() * 12) + 1
    bluePoints = Math.floor(Math.random() * 12) + 1
    redPoints = Math.floor(Math.random() * 12) + 1
    purplePoints = Math.floor(Math.random() * 12) + 1
    
    //Iterate the users score upon clicking the image for each crystal 
    $("#greenRupee").on("click", function () {
        totalScore += greenPoints;
        //Display the updated score
        $("#userTotalScore").text(totalScore);
    });

    $("#blueRupee").on("click", function () {
        totalScore += bluePoints;
        //Display the updated score
        $("#userTotalScore").text(totalScore);
    });

    $("#redRupee").on("click", function () {
        totalScore += redPoints;
        //Display the updated score
        $("#userTotalScore").text(totalScore);
    });

    $("#purpleRupee").on("click", function () {
        totalScore += purplePoints;
        //Display the updated score
        $("#userTotalScore").text(totalScore);
    });

    $("#rupeeContainer").on("click", function () {
        $(".anim").hide();
        song.pause();
        song.currentTime = 0;
        //End the game if total score is equal or greater than the randomNumber
        if (totalScore >= randomNumber) {
            if (totalScore == randomNumber) {
                alert("You've won. Enjoy the GIF");
                //update the wins
                wins++;
                $(".anim").show(1000);
                song.play();
            }
            else {
                alert("You've lost");
                //update the losses
                losses++;
            }

            //The next lines pick new random numbers and reset the total score
            totalScore = 0;
            randomNumber = Math.floor(Math.random() * 102) + 19;
            greenPoints = Math.floor(Math.random() * 12) + 1;
            bluePoints = Math.floor(Math.random() * 12) + 1;
            redPoints = Math.floor(Math.random() * 12) + 1;
            purplePoints = Math.floor(Math.random() * 12) + 1;

            //Update the display to reflect the changes
            $("#randomNumberScore").text(randomNumber);
            $("#userTotalScore").text(totalScore);
            $("#wins").text(wins);
            $("#losses").text(losses);
        }
    });
});