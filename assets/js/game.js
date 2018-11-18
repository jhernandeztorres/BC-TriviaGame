$(document).ready(function () {

            // Obj to hold questions and answers
            // Narnia themed questions
            var triviaQuestions = [{
                    questions: "Who was the author of the Narnia series?", // Q1
                    answerList: ["C.J. Parker", "C.S. Lewis", "Don Knotts", "Mary J. Blige", "Robert Ludlum"],
                    answer: "C.S. Lewis"
                },
                {
                    questions: "Who tells the children about Aslan?", // Q2
                    answerList: ["Mr Tumnus", "Mr and Mrs Beaver", "The White Witch", "a Satyr", "Mr T"],
                    answer: "Mr and Mrs Beaver"
                },
                {
                    questions: "Who befriends the White Witch?", // Q3
                    answerList: ["Susan", "Peter", "Edmund", "Lucy", "Bob"],
                    answer: "Edmund"
                },
                {
                    questions: "What gift does Father Christmas give Susan?", // Q4
                    answerList: ["a Shield", "a Sword", "a Horn", "a Bow", "a Desert Eagle"],
                    answer: "a Horn"
                },
                {
                    questions: "Where do they plan to meet Aslan?", // Q5
                    answerList: ["at the stone table", "at the witchs house", "at the lamppost", "at the beach", "at a rave"],
                    answer: "at the stone table"
                },
                {
                    questions: "What is a faun?", // Q6
                    answerList: ["half man half goat", "half man half dwarf", "half man half centaur half horse", "half bird half snake", "dwarf elf"],
                    answer: "half man half goat"
                },
                {
                    questions: "What does Father Christmas give Lucy?", // Q7
                    answerList: ["a potion", "a bow and arrow", "a crown", "a stick", "a soup bowl"],
                    answer: "a potion"
                },
                {
                    questions: "Who is the first to reach Narnia?", // Q8
                    answerList: ["Peter", "Susan", "Lucy", "Edmund", "Tupac"],
                    answer: "Lucy"
                },
                {
                    questions: "Who are the children following when they return to the lamppost?", // Q9
                    answerList: ["Aslan", "Mr Tumnus", "the White Stag", "The Mountain", "The Incredible Mr Ripley"],
                    answer: "the White Stag"
                },
                {
                    questions: "Why are the children sent to the country?", // Q10
                    answerList: ["their mother is ill", "its summer vacation", "there are air raids in London", "tea time", "to party"],
                    answer: "there are air raids in London"
                }
            ];

            var quotes = [
                "Lucy woke out of the deepest sleep you can imagine, with the feeling that the voice she liked best in the world had been calling her name.",

                "Girls aren't very good at keeping maps in their brains, said Edmund",

                "But very quickly they all became grave again: for, as you know, there is a kind of happiness and wonder that makes you serious. It is too good to waste on jokes.",

                "This was bad grammar of course, but that is how beavers talk when they are excited; I mean, in Narnia--in our world they usually don't talk at all.",

                "Remember that all worlds draw to an end and that noble death is a treasure which no one is too poor to buy.",

                "Peter did not feel very brave; indeed, he felt he was going to be sick. But that made no difference to what he had to do.",

                "One day, you will be old enough to start reading fairytales again",

                "A dragon has just flown over the tree-tops and lighted on the beach. Yes, I am afraid it is between us and the ship. And arrows are no use against dragons. And they're not at all afraid of fire.",

                "This is the land of Narnia,' said the Faun, 'where we are now; all that lies between the lamp-post and the great castle of Cair Paravel on the eastern sea",

                "Narnia! It's all in the wardrobe just like I told you!",

                "I am [in your world].’ said Aslan. ‘But there I have another name. You must learn to know me by that name. This was the very reason why you were brought to Narnia, that by knowing me here for a little, you may know me better there."

            ];

            var currentQuestion = -1;
            var correctAnswer = 0;
            var incorrectAnswer = 0;
            var unanswered = 0;
            var timeLeft = 16;
            var questionCounter = 0;
            var gameState = false;
            var currentQuote = -1;
            var timerId;

            var messages = {
                correct: "You got it!",
                incorrect: "Better luck next time.",
                missed: "You didn't answer that question.",
                endTime: "Time ran out!!",
                complete: "Let's check out that score!  "
            }

            // Hidden sections when game starts
            $("#triviaSection").hide();
            $("#answerSection").hide();
            $("#resultSection").hide();
            gameState = false;
            displayQuote();

            // Event to start game
            $("#startBtn").on("click", function () {
                $("#gameStart").hide();
                $("#triviaSection").show();
                questionCounter++;
                console.log("Question counter @ startBtn: "+ questionCounter);
                displayQuestions();
                answers();
                gameState = true;
                displayQuote();
                timerId = setInterval(countDown, 1000);
            })

            // GAME FUNCTIONS //


            // Function to add questions to first card
            function displayQuestions() {
                //gets the current question from global variable currentQuestion
                // display a question
                currentQuestion++;
                $(".questions").text(triviaQuestions[currentQuestion].questions);
                console.log("Question counter @ displayQuestion: "+ questionCounter);
            }

            // function to add answers to second card
            function answers() {
                // for loop through answerlist
                for (var i = 0; i < triviaQuestions[currentQuestion].answerList.length; i++) {
                    var choice = $("<input>")
                    choice.attr("type", "radio")
                    choice.attr("id", triviaQuestions[currentQuestion].answerList[i])
                    choice.attr("name", triviaQuestions[currentQuestion].answerList)
                    choice.attr("value", triviaQuestions[currentQuestion].answerList[i])
                    var label = $("<label>")
                    label.attr("for", triviaQuestions[currentQuestion].answerList[i])
                    label.html(triviaQuestions[currentQuestion].answerList[i])
                    $(".answers").append(choice, label);
                }
            }

            // function to show correct or incorrect answer
            $("#submitBtn").on("click", function () {

                    var selValue = $('input[name="' + triviaQuestions[currentQuestion].answerList + '"]:checked').val();
                    console.log(selValue);

                    if (selValue === triviaQuestions[currentQuestion].answer) {
                        $(".correctAnswer").text(messages.correct)
                        correctAnswer++;
                        console.log("Correct Answer: " + correctAnswer);
                    } else if (selValue === undefined) {
                        unanswered++;
                        $(".correctAnswer").text(messages.missed)
                        console.log("Unanswered Questions: " + unanswered);
                    } else {
                        $(".correctAnswer").text(messages.incorrect)
                        incorrectAnswer++;
                        console.log("Incorrect Answer: " + incorrectAnswer);
                    }

                    if (questionCounter <= 10) {
                        $("#triviaSection").hide();
                        $("#answerSection").show();
                        questionCounter++;
                        setTimeout(function () {
                            $("#answerSection").hide();
                            $("#triviaSection").show();
                        }, 4000);
                        questionNum();
                        displayQuestions();
                        displayQuote();
                        $(".answers").empty();
                        answers();
                        timeLeft = 19;
                        gameState = false;
                    } else {
                        $("#triviaSection").hide();
                        $("#answerSection").hide();
                        $("#resultSection").show();
                        var nweDiv = $("<div>");
                        $(".results").append(nweDiv).text("You got: " + correctAnswer + " correct!" + "'\'" + "You got: " + incorrectAnswer + " incorrect." + '\
                            ' + "You left: " + unanswered + " unanswered questions");
                        }

                    })

                // Replay game
                $("#resetBtn").on("click", function () {
                    location.reload();
                })

                // EXTRA FUNCTIONS //

                // Function to show the different quotes
                function displayQuote() {
                    currentQuote++;
                    $(".quote").text(quotes[currentQuote]);
                }

                // function to show question number
                function questionNum() {
                    $(".questionNum").text("Question " + questionCounter + " of 10");
                }

                // Timer countdown function

                function countDown() {
                    if (timeLeft === -1) {
                        clearInterval(timerId);
                    } else {
                        $("#timer").html("Time remaining: " + timeLeft + " seconds");
                        timeLeft--;
                    }
                    runOut();
                }

                // Function for when time runs out
                function runOut() {
                    if (timeLeft === 0 && questionCounter === 10) {
                        $("#triviaSection").hide();
                        $("#answerSection").hide();
                        $("#resultSection").show();
                        var nweDiv = $("<div>");
                        $(".results").append(nweDiv).text("You got: " + correctAnswer + " correct!" + "'\'" + "You got: " + incorrectAnswer + " incorrect." + "'\'" + "You left: " + unanswered + " unanswered questions")
                    } else if (timeLeft === 0) {
                        $("#triviaSection").hide();
                        $("#answerSection").show();
                        questionCounter++;
                        unanswered++;
                        setTimeout(function () {
                            $("#answerSection").hide();
                            $("#triviaSection").show();
                        }, 4000);
                        questionNum();
                        displayQuestions();
                        displayQuote();
                        $(".answers").empty();
                        answers();
                        timeLeft = 19;
                        gameState = false;
                        $(".correctAnswer").text(messages.endTime);
                        console.log("time ran out and I ran");
                    }
                }

            });