$(document).ready(function () {
    document.getElementById("score").innerHTML = 0;
    var globalTime = 5000;

    /*Initial changing the color*/
    ChangeColor();

    /*after every 5 second change another div color*/
    var gTimer = setInterval(function () { ChangeColor(); }, parseInt(globalTime));

    /*set the timer for 5 seconds*/
    SetTimer();

    /*ReSet timer and color on click*/
    $('.clickable').click(function (e) {
        if (document.getElementById("score").innerHTML < 10) {
            var color = this.style.backgroundColor;

            if (color == "red") {
                clearInterval(gTimer);
                ChangeColor();
                addScore();
                SetTimer();
                gTimer = setInterval(function () { ChangeColor(); }, parseInt(globalTime));
            }
            else {
                removeScore();
            }
        }
        else {
            alert("ÿou have completed the task successfully");
            window.location.href = "SecondLevel.html";
        }
        
    });
})

function SetTimer() {

    document.getElementById('timer').innerHTML = 0;
    document.getElementById('timer').innerHTML =
          00 + ":" + 05;
    startTimer();

    function startTimer() {
        var presentTime = document.getElementById('timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if (s == 0) { s = s + 05; m = 0 }

        document.getElementById('timer').innerHTML =
          m + ":" + s;
        setTimeout(startTimer, 1000);
    }

    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) { sec = "0" + sec };
        return sec;
    }
}

function ChangeColor() {
    var elems = $(".clickable");
    if (elems.length) {
        var keep = Math.floor(Math.random() * elems.length);
        for (var i = 0; i < elems.length; ++i) {
            if (i == keep) {
                $(elems[i]).css('background', "red");
            }
            if (i !== keep) {
                $(elems[i]).css('background', "white");
            }
        }
    }
}

function addScore() {
    var score = document.getElementById("score").innerHTML;
    document.getElementById("score").innerHTML = parseInt(score) + 1;
}

//var add = (function () {
//    var score = 0;
//    return function () {
//        score += 1; return score;
//    }
//})();

function removeScore() {
    var score = document.getElementById("score").innerHTML;
    document.getElementById("score").innerHTML = score - 1;
}





