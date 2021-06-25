const quizData = [{
        question: 'How old is Florin',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'what is the most used programming language in 2019',
        a: 'Java',
        b: 'c',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Who is the president of US?',
        a: 'Usenmfon Uko',
        b: 'Donald Trump',
        c: 'Ivan Saldaem',
        d: 'Hello there',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for',
        a: 'Hypertext Markup Language',
        b: 'Helicopter dash dash',
        c: 'High text mockup Language',
        d: 'Hlllee sss',
        correct: 'a'
    },
    {
        question: 'What does PHP stand for',
        a: 'Hypertext Markup Language',
        b: 'HyperText preprocessor',
        c: 'High text mockup Language',
        d: 'Hlllee sss',
        correct: 'b'
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected() {


    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2> <button
        onclick="location.reload()">Reload</button>`;
    }

});