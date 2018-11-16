$(document).ready(function () {
    
// Obj to hold questions and answers
// Narnia themed questions
var triviaQuestions = [{
    questions: "Who was the author of the Narnia series?",  // Q1
    answerList: ["C.J. Parker", "C.S. Lewis", "Don Knotts", "Mary J. Blige", "Robert Ludlum"],
    answer: "C.S Lewis"
},
{
    questions: "Who was the author of the Narnia series?",  // Q2
    answerList: ["C.J. Parker", "C.S. Lewis", "Don Knotts", "Mary J. Blige", "Robert Ludlum"],
    answer: 1
},
{
    questions: "Who was the author of the Narnia series?",  // Q3
    answerList: ["C.J. Parker", "C.S. Lewis", "Don Knotts", "Mary J. Blige", "Robert Ludlum"],
    answer: 1
},
{
    questions: "Who was the author of the Narnia series?",  // Q4
    answerList: ["C.J. Parker", "C.S. Lewis", "Don Knotts", "Mary J. Blige", "Robert Ludlum"],
    answer: 1
},
{
    questions: "Who was the author of the Narnia series?",  // Q5
    answerList: ["C.J. Parker", "C.S. Lewis", "Don Knotts", "Mary J. Blige", "Robert Ludlum"],
    answer: 1
},
{
    questions: "Who was the author of the Narnia series?",  // Q6
    answerList: ["C.J. Parker", "C.S. Lewis", "Don Knotts", "Mary J. Blige", "Robert Ludlum"],
    answer: 1
},
{
    questions: "Who was the author of the Narnia series?",  // Q7
    answerList: ["C.J. Parker", "C.S. Lewis", "Don Knotts", "Mary J. Blige", "Robert Ludlum"],
    answer: 1
},
{
    questions: "Who was the author of the Narnia series?",  // Q8
    answerList: ["C.J. Parker", "C.S. Lewis", "Don Knotts", "Mary J. Blige", "Robert Ludlum"],
    answer: 1
},
{
    questions: "Who was the author of the Narnia series?",  // Q9
    answerList: ["C.J. Parker", "C.S. Lewis", "Don Knotts", "Mary J. Blige", "Robert Ludlum"],
    answer: 1
},
{
    questions: "Who was the author of the Narnia series?",  // Q10
    answerList: ["C.J. Parker", "C.S. Lewis", "Don Knotts", "Mary J. Blige", "Robert Ludlum"],
    answer: 1
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
var time ;
var questionCounter = 1;

var messages = {
    correct: "You got it!",
    incorrect: "Better luck next time.",
    endTime: "Time ran out!!",
    complete: "Let's check out that score!  "
}

// trivia section hidden to start game
$("#triviaSection").hide();

$("#startBtn").on("click", function(){
    $("#gameStart").hide();
    $("#triviaSection").show();
})











});