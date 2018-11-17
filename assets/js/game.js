$(document).ready(function () {
    
// Obj to hold questions and answers
// Narnia themed questions
var triviaQuestions = [{
    questions: "Who was the author of the Narnia series?",  // Q1
    answerList: ["C.J. Parker", "C.S. Lewis", "Don Knotts", "Mary J. Blige", "Robert Ludlum"],
    answer: "C.S Lewis"
},
{
    questions: "Who tells the children about Aslan?",  // Q2
    answerList: ["Mr Tumnus", "Mr and Mrs Beaver", "The White Witch", "a Satyr", "Mr T"],
    answer: "Mr and Mrs Beaver"
},
{
    questions: "Who befriends the White Witch?",  // Q3
    answerList: ["Susan", "Peter", "Edmund", "Lucy", "Bob"],
    answer: "Edmund"
},
{
    questions: "What gift does Father Christmas give Susan?",  // Q4
    answerList: ["a Shield", "a Sword", "a Horn", "a Bow", "a Desert Eagle"],
    answer: "a Horn"
},
{
    questions: "Who Where do they plan to meet Aslan?",  // Q5
    answerList: ["at the stone table", "at the witchs house", "at the lamppost", "at the beach", "at a rave"],
    answer: "at the stone table"
},
{
    questions: "What is a faun?",  // Q6
    answerList: ["half man half goat", "half man half dwarf", "half man half centaur half horse", "half bird half snake", "dwarf elf"],
    answer: "half man half goat"
},
{
    questions: "What does he give Lucy?",  // Q7
    answerList: ["a potion", "a bow and arrow", "a crown", "a stick", "a soup bowl"],
    answer: "a potion"
},
{
    questions: "Who is the first to reach Narnia?",  // Q8
    answerList: ["Peter", "Susan", "Lucy", "Edmund", "Tupac"],
    answer: "Lucy"
},
{
    questions: "Who are the children following when they return to the lamppost?",  // Q9
    answerList: ["Aslan", "Mr Tumnus", "the White Stag", "The Mountain", "The Incredible Mr Ripley"],
    answer: "the White Stag"
},
{
    questions: "Why are the children sent to the country?",  // Q10
    answerList: ["their mother is ill", "its summer vacation", "there are air raids in London", "tea time", "to party"],
    answer: "there are air raids in London"
}];

var quotes = [{
    quote1: "Lucy woke out of the deepest sleep you can imagine, with the feeling that the voice she liked best in the world had been calling her name."
},
{
    quote2: "Girls aren't very good at keeping maps in their brains, said Edmund"
},
{
    quote3: "But very quickly they all became grave again: for, as you know, there is a kind of happiness and wonder that makes you serious. It is too good to waste on jokes."
},
{
    quote4: "This was bad grammar of course, but that is how beavers talk when they are excited; I mean, in Narnia--in our world they usually don't talk at all."
},
{
    quote5: "Remember that all worlds draw to an end and that noble death is a treasure which no one is too poor to buy."
},
{
    quote6: "Peter did not feel very brave; indeed, he felt he was going to be sick. But that made no difference to what he had to do."
},
{
    quote7: "One day, you will be old enough to start reading fairytales again"
},
{
    quote8: "A dragon has just flown over the tree-tops and lighted on the beach. Yes, I am afraid it is between us and the ship. And arrows are no use against dragons. And they're not at all afraid of fire."
},
{
    quote9: "This is the land of Narnia,' said the Faun, 'where we are now; all that lies between the lamp-post and the great castle of Cair Paravel on the eastern sea"
},
{
    quote10: "Narnia! It's all in the wardrobe just like I told you!"
},
{
    quote11: "I am [in your world].’ said Aslan. ‘But there I have another name. You must learn to know me by that name. This was the very reason why you were brought to Narnia, that by knowing me here for a little, you may know me better there."
}];

var currentQuestion ;
var correctAnswer ;
var incorrectAnswer ;
var unanswered ;
var time = 30 ;
var questionCounter = 1;

var messages = {
    correct: "You got it!",
    incorrect: "Better luck next time.",
    endTime: "Time ran out!!",
    complete: "Let's check out that score!  "
}

// Hidden sections to start game
$("#triviaSection").hide();
$("#answerSection").hide();
$("#resultSection").hide();

$("#startBtn").on("click", function(){
    $("#gameStart").hide();
    $("#triviaSection").show();
})

questions();
answers();
questionNum();

// Function to start adding questions to first card
function questions() {
    for (var i = 0; i < triviaQuestions.length; i++){
        $(".questions").text(triviaQuestions[i].questions);
        // $(".questionNum").text("Question " + questionCounter + " of 10");
    }
}

// function to start adding answers to second card
function answers(){
    for (var i = 0; i < triviaQuestions.length; i++){
        var apnd = '<input type="radio" id="radioBtn>';
        $(".answers").append(apnd).text(triviaQuestions[i].answerList);
    }
    
}

// function to show correct or incorrect answer
$("#submitBtn").on("click", function(){
    $("#triviaSection").hide();
    $("#answerSection").show();
    questionCounter++;
    console.log(questionCounter);
})

// function to show question number
function questionNum(){
    $(".questionNum").text("Question " + questionCounter + " of 10")
}



});