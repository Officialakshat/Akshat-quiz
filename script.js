const questions = [
  {
      question: "What is the largest animal in the world?",
      answers: [
          { text: "Shark", correct: false },
          { text: "Blue Whale", correct: true },
          { text: "Elephant", correct: false },
          { text: "Giraffe", correct: false },
      ]
  },
  {
      question: "What is the largest city in India by population?",
      answers: [
          { text: "Delhi", correct:  true },
          { text: "Chandigarh", correct: false },
          { text: "Mumbai", correct: false},
          { text: "Pune", correct: false },
      ]
  },
  {
      question: "How many minutes are in a full week",
      answers: [
          { text: "10,080", correct: true },
          { text: "12,330", correct: false },
          { text: "11,460", correct: false },
          { text: "10,200", correct: false },
      ]
  },
  {
      question: "What software company is headquartered in Redmond, Washington?",
      answers: [
          { text: "Apple", correct: false },
          { text: "Microsoft", correct: true },
          { text: "Amazon", correct: false },
          { text: "Birla", correct: false },
      ]
  },
  {
    question: "How many continents are there in the world?",
    answers: [
        { text: "Nine", correct: false },
        { text: "Five", correct:  false},
        { text: "Eight", correct: false },
        { text: "Seven", correct: true },
    ]
},
{
  question: "What is the largest lake in the world?",
  answers: [
      { text: "Caspian Sea", correct: false },
      { text: "Baikal", correct:  true},
      { text: "Lake Superior", correct: false },
      { text: "Ontario", correct: false },
  ]
},
{
  question: " Which planet in the solar system is known as the “Red Planet”?",
  answers: [
      { text: "Venus", correct: false },
      { text: "Earth", correct:  false},
      { text: " Mars", correct: true },
      { text: "Jupitor", correct: false },
  ]
},
{
  question: " What is the capital of Japan?",
  answers: [
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct:  true},
      { text: "Seoul", correct: false },
      { text: "bangkok", correct: false },
  ]
},
{
  question: "Which river is the longest in the world?",
  answers: [
      { text: "Amazon", correct: false },
      { text: "Mississippi", correct:  false},
      { text: "Nile", correct: true },
      { text: "Ganga", correct: false },
  ]
},
{
  question: " What animal is the national symbol of Australia?",
  answers: [
      { text: "Kangaroo", correct: true },
      { text: "Koala", correct:  false},
      { text: "Emu", correct: false },
      { text: "Crocodile", correct: false },
  ]
},

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  resetState();
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) {
          button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
  }
  // Reset visual styles
//  answerButtons.firstChild.style.display = 'true'
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
  } else {
      selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
          button.classList.add("correct");
      }
      button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  resetState();
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
      handleNextButton();
  } else {
      startQuiz();
  }
});

startQuiz();