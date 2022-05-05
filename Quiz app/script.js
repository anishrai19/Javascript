const questions = [
  {
    question: "Which is your country name",
    a: "India",
    b: "Nepal",
    c: "Srilanka",
    d: "USA",
    correct: "a_",
  },
  {
    question: "National Animal of India",
    a: "Elephant",
    b: "Tiger",
    c: "Peacock",
    d: "Deer",
    correct: "b_",
  },
  {
    question: "Capital of India is ?",
    a: "Chandigarh",
    b: "Pune",
    c: "Rachi",
    d: "New Delhi",
    correct: "d_",
  },

  {
    question: "National Bird of India?",
    a: "Ostrich",
    b: "Peacock",
    c: "Sparrow",
    d: "Parrot",
    correct: "b_",
  }
];

const questionH1 = document.getElementById("question");
const quiz = document.getElementById("container");
const a_text = document.getElementById("a");
const b_text = document.getElementById("b");
const c_text = document.getElementById("c");
const d_text = document.getElementById("d");
const submit_btn = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");
const correct_answer = document.getElementById("correct_answer");
let currentQuestion = 0;

startQuiz();

function startQuiz() {
  //   for (const key of questions) {
  //     questionH1.innerHTML = key.question;
  //     a_text.innerHTML = key.a;
  //     b_text.innerHTML = key.b;
  //     c_text.innerHTML = key.c;
  //     d_text.innerHTML = key.d;
  //   }
  deselectAnswers();
  const currentQuizdata = questions[currentQuestion];
  questionH1.innerText = currentQuizdata.question;

  a_text.innerHTML = currentQuizdata.a;
  b_text.innerHTML = currentQuizdata.b;
  c_text.innerHTML = currentQuizdata.c;
  d_text.innerHTML = currentQuizdata.d;
  // const quizQuestion = questions[currentQuestion];

  // questionH1.innerHTML = quizQuestion.question;
}

function getSelected() {
  let answer = undefined;
  answers.forEach((answerE1) => {
    if (answerE1.checked) {
      answer = answerE1.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answers.forEach((answerE1) => {
    answerE1.checked = false;
  });
}
let score = 0;
submit_btn.addEventListener("click", () => {
  // if(a_text.innerHTML===currentQuizdata.correct){
  //    correct_answer.innerHTML=currentQuizdata.correct;
  // }

  //check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === questions[currentQuestion].correct) {
      score+=1;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      startQuiz();
    } else {
      quiz.innerHTML = `<h2>your answer correctly ${score}/${questions.length} question.</h2>
       
      <button  id="reload"onclick="location.reload()">Reload</button>`;
    }
  }
});
