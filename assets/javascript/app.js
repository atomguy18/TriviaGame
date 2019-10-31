var myQuestions = [{
    "question": "What is the capital of Gerogia?",
    "userinput": ['Birmingham', 'Newark', 'Atlanta', 'Denver'],
    "answer": "Atlanta"
},
{
    "question": "What is the University of Georgia mascot?",
    "userinput": ['Bees', 'Bulldogs', 'Tigers', 'Bears'],
    "answer": ["Bulldogs"]
},
{
    "question": "How many items are in a bakers dozen?",
    "userinput": ['8', '14', '12', '13'],
    "answer": ["13"]
},
{
    "question": "What state is Boston the capital of?",
    "userinput": ['Colorado', 'Texas', 'Washington', 'Massachusetts'],
    "answer": ["Massachusetts"]
},
{
    "question": "What is the 7th planet from the sun?",
    "userinput": ['Mars', 'Uranus', 'Saturn', 'Jupiter'],
    "answer": ["Uranus"]
},
{
    "question": "What kind of weapon is a falchion?",
    "userinput": ['Sword', 'Axe', 'Poleaxe', 'Pen'],
    "answer": ["Sword"]
},
{
    "question": "Who invented the rabies vaccination?",
    "userinput": ['Louis Pastuer', 'Spock', 'George Washington', 'Alf'],
    "answer": ["Louis Pastuer"]
},
{
    "question": "what is the name of the largest freshwater lake?",
    "userinput": ['Titicasa', 'Dead Sea', 'Superior', 'Ontario'],
    "answer": ["Superior"]
},
{
    "question": "What is the diameter of the Earth?",
    "userinput": ['8,000mi', '7,000mi', '7,500mi', '1,000mi'],
    "answer": ["8,000mi"]
},
{
    "question": "Which country is Prague in?",
    "userinput": ['Czech Republic', 'UK', 'Spain', 'Ukraine'],
    "answer": ["Czech Republic"]
}];
var correct = 0;
var wrong = 0;
var UserInput = [];
var submit = false

$("#start").click(startQuiz);

function displayImage() {
    $("#buttons").remove();
    $("#image-holder").append("<div id = timer>")
    $("#image-holder").append("<p>" + myQuestions[0].question + "<p>");
    $("#image-holder").append("<input type = 'radio' name = 'answer1'>" + myQuestions[0].userinput[0]);
    $("#image-holder").append("<input type = 'radio' name = 'answer1'>" + myQuestions[0].userinput[1]);
    $("#image-holder").append("<input type = 'radio' name = 'answer1'>" + myQuestions[0].userinput[2]);
    $("#image-holder").append("<input type = 'radio' name = 'answer1'>" + myQuestions[0].userinput[3]);

    $("#image-holder").append("<p>" + myQuestions[1].question + "<p>");
    $("#image-holder").append("<input type = 'radio' name = 'answer2'>" + myQuestions[1].userinput[0]);
    $("#image-holder").append("<input type = 'radio' name = 'answer2'>" + myQuestions[1].userinput[1]);
    $("#image-holder").append("<input type = 'radio' name = 'answer2'>" + myQuestions[1].userinput[2]);
    $("#image-holder").append("<input type = 'radio' name = 'answer2'>" + myQuestions[1].userinput[3]);

    $("#image-holder").append("<p>" + myQuestions[2].question + "<p>");
    $("#image-holder").append("<input type = 'radio' name = 'answer3'>" + myQuestions[2].userinput[0]);
    $("#image-holder").append("<input type = 'radio' name = 'answer3'>" + myQuestions[2].userinput[1]);
    $("#image-holder").append("<input type = 'radio' name = 'answer3'>" + myQuestions[2].userinput[2]);
    $("#image-holder").append("<input type = 'radio' name = 'answer3'>" + myQuestions[2].userinput[3]);

    $("#image-holder").append("<p>" + myQuestions[3].question + "<p>");
    $("#image-holder").append("<input type = 'radio' name = 'answer4'>" + myQuestions[3].userinput[0]);
    $("#image-holder").append("<input type = 'radio' name = 'answer4'>" + myQuestions[3].userinput[1]);
    $("#image-holder").append("<input type = 'radio' name = 'answer4'>" + myQuestions[3].userinput[2]);
    $("#image-holder").append("<input type = 'radio' name = 'answer4'>" + myQuestions[3].userinput[3]);

    $("#image-holder").append("<p>" + myQuestions[4].question + "<p>");
    $("#image-holder").append("<input type = 'radio' name = 'answer5'>" + myQuestions[4].userinput[0]);
    $("#image-holder").append("<input type = 'radio' name = 'answer5'>" + myQuestions[4].userinput[1]);
    $("#image-holder").append("<input type = 'radio' name = 'answer5'>" + myQuestions[4].userinput[2]);
    $("#image-holder").append("<input type = 'radio' name = 'answer5'>" + myQuestions[4].userinput[3]);

    $("#image-holder").append("<p>" + myQuestions[5].question + "<p>");
    $("#image-holder").append("<input type = 'radio' name = 'answer6'>" + myQuestions[5].userinput[0]);
    $("#image-holder").append("<input type = 'radio' name = 'answer6'>" + myQuestions[5].userinput[1]);
    $("#image-holder").append("<input type = 'radio' name = 'answer6'>" + myQuestions[5].userinput[2]);
    $("#image-holder").append("<input type = 'radio' name = 'answer6'>" + myQuestions[5].userinput[3]);

    $("#image-holder").append("<p>" + myQuestions[6].question + "<p>");
    $("#image-holder").append("<input type = 'radio' name = 'answer7'>" + myQuestions[6].userinput[0]);
    $("#image-holder").append("<input type = 'radio' name = 'answer7'>" + myQuestions[6].userinput[1]);
    $("#image-holder").append("<input type = 'radio' name = 'answer7'>" + myQuestions[6].userinput[2]);
    $("#image-holder").append("<input type = 'radio' name = 'answer7'>" + myQuestions[6].userinput[3]);

    $("#image-holder").append("<p>" + myQuestions[7].question + "<p>");
    $("#image-holder").append("<input type = 'radio' name = 'answer8'>" + myQuestions[7].userinput[0]);
    $("#image-holder").append("<input type = 'radio' name = 'answer8'>" + myQuestions[7].userinput[1]);
    $("#image-holder").append("<input type = 'radio' name = 'answer8'>" + myQuestions[7].userinput[2]);
    $("#image-holder").append("<input type = 'radio' name = 'answer8'>" + myQuestions[7].userinput[3]);

    $("#image-holder").append("<p>" + myQuestions[8].question + "<p>");
    $("#image-holder").append("<input type = 'radio' name = 'answer9'>" + myQuestions[8].userinput[0]);
    $("#image-holder").append("<input type = 'radio' name = 'answer9'>" + myQuestions[8].userinput[1]);
    $("#image-holder").append("<input type = 'radio' name = 'answer9'>" + myQuestions[8].userinput[2]);
    $("#image-holder").append("<input type = 'radio' name = 'answer9'>" + myQuestions[8].userinput[3]);

    $("#image-holder").append("<p>" + myQuestions[9].question + "<p>");
    $("#image-holder").append("<input type = 'radio' name = 'answer10'>" + myQuestions[9].userinput[0]);
    $("#image-holder").append("<input type = 'radio' name = 'answer10'>" + myQuestions[9].userinput[1]);
    $("#image-holder").append("<input type = 'radio' name = 'answer10'>" + myQuestions[9].userinput[2]);
    $("#image-holder").append("<input type = 'radio' name = 'answer10'>" + myQuestions[9].userinput[3] + "<br>");

    $("#image-holder").append("<button id = 'submit' <h2> Submit");

};

function nextImage() {
    $("#image-holder").empty();
    $("#image-holder").append("<p>Sorry You Ran Out of Time!!!<p>");
};
function submitted() {
    $("#image-holder").empty();
    $("#image-holder").append("<p>Congrats<p>");
};

function startQuiz() {
    setTimeout(displayImage, 500);
    displayImage = setInterval(nextImage, 5000)
};
//Could not get an if else statement to work with the submit button.
    //I tried   function startQuiz() {
    //          {setTimeout(displayImage, 500);    
    //          if (submit = false) {
    //          displayImage = setInterval(nextImage, 5000)}
    //          else
    //          $("#start").click(function)
    //          function submitted();

    //    $("input[type ='radio']").each(function () {
    //    var response = $(this).is(checked);
    //    UserInput.push(response);
    //    Then I was going to compare the push UserInput responses with the array of answer reponses
    // 
