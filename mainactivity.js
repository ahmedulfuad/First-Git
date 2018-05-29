var questionNum = 0;
var question = '<h1>Hi! I am Neo. <br> What is your name?</h1>';

var output = document.getElementById('output');
output.innerHTML = question;

function bot() {
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
        output.innerHTML = '<h1>Hello ' + input + '!</h1>';
        document.getElementById("input").value = "";
        question = '<h1>How old are you?</h1>';
        setTimeout(timedQuestion, 2000);
    }

    else if (questionNum == 1) {
        output.innerHTML = '<h1>That means you were born in ' + (2018 - input) + '</h1>';
        document.getElementById("input").value = "";
        question = '<h1>Where are you from?</h1>';
        setTimeout(timedQuestion, 2000);
    }
}

function timedQuestion() {
    output.innerHTML = question;
}


$(document).keypress(function(e) {
    if (e.which == 13) {
        bot();
        questionNum++;
    }
});
