const questions = [
    {
        question : "What is the largest animal in the world?",
        answers : [
            {text : "Shark" , correct : false},
            {text : "Blue Whale" , correct : true},
            {text : "Elephant" , correct : false},
            {text : "Giraffe" , correct : false}
        ]
    },
    {
        question : "What is the largest city in India by population?",
        answers : [
            {text : "Delhi" , correct : false},
            {text : "Chandigarh" , correct : false},
            {text : "Mumbai" , correct : true},
            {text : "Pune" , correct : false}
        ]
    },
    {
        question : "How many minutes are in a full week",
        answers : [
            {text : "10,080" , correct : true},
            {text : "12,330" , correct : false},
            {text : "11,460" , correct : false},
            {text : "10,200" , correct : false}
        ]
    },
    {
        question : "What software company is headquartered in Redmond, Washington?",
        answers : [
            {text : "Apple" , correct : false},
            {text : "Microsoft" , correct : true},
            {text : "Amazon" , correct : false},
            {text : "Birla" , correct : false}
        ]
    }
]

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")

let currentquestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}


function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button)
    });
}

startQuiz();