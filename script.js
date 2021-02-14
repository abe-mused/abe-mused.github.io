const quizData = [
    {
        questionText: "What is the most used programming language in 2020?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "option-d",
    },
    {
        questionText: "Who is the President of US?",
        a: "Abe Mused",
        b: "Donald Trump",
        c: "Joe Biden",
        d: "Chris Cristie",
        correct: "option-a",
    },
    {
        questionText: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "option-a",
    },
    {
        questionText: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "option-b",
    },
];

const questionElement = document.getElementById("question-text");
const answerElements = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit-button");
const quizPage = document.getElementById("quiz-header");
let score = 0;
let currentQuestionIndex = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuestion = quizData[currentQuestionIndex]
    questionElement.innerHTML = currentQuestion.questionText;
    a_text.innerText = currentQuestion.a;
    b_text.innerText = currentQuestion.b;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;
}
function getSelected(){
    let answer = undefined;
    answerElements.forEach((answerElement) =>{
        if(answerElement.checked){
            answer =  answerElement.id;
        }
    });
    return answer;
}
function deselectAnswers(){
    answerElements.forEach((answerElement) =>{
        answerElement.checked = false;
    });
}
submitButton.addEventListener("click", () =>{

    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuestionIndex].correct){
            score++;
            console.log(score);
        }
        if(currentQuestionIndex < quizData.length-1){
            currentQuestionIndex++;
            loadQuiz();
        }else{
            submitButton.parentElement.removeChild(submitButton);
            quizPage.style.textAlign = "center";
            quizPage.style.padding = "0";
            quizPage.style.paddingTop = "2rem";
            quizPage.innerHTML = 
                score >= (quizData.length/2)?`<h2>Congrats! you passed with score of ${score}/${quizData.length}` : `<h2>Sorry, you failed with score of ${score}/${quizData.length}`;
            quizPage.innerHTML += 
                '<br><button id="reload-button"onclick="location.reload()">Take Again</button>';

        }
    }
    
    
});