const quizdata = [
    {
        question: "Как зовут автора?",
        a: "Светлана",
        b:"Оксана",
        c:"Анна",
        d:"Екатерина",
        correct: "c",
    },{
        question: "Сколько лет автору?",
        a: "18",
        b:"22",
        c:"26",
        d:"35",
        correct: "b",
    },{
        question: "Какое образование у автора?",
        a: "Среднее + курсы",
        b:"Бакалавриат",
        c:"Магистратура",
        d:"Кандидат математических наук",
        correct: "c",
    },{
        question: "Есть ли у автора опыт работы?",
        a: "Нет",
        b:"Да, полгода",
        c:"Да, 1 год",
        d:"Да, 2 года",
        correct: "d",
    },{
        question: "Ну и небольшая проверка на ваши знания 😉. Сколько будет 2+2*2",
        a: "2",
        b:"4",
        c:"6",
        d:"8",
        correct: "c",
    }]

const question = document.getElementById("question");
const ans_a = document.getElementById("ans_a");
const ans_b = document.getElementById("ans_b");
const ans_c = document.getElementById("ans_c");
const ans_d = document.getElementById("ans_d");
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const questionNumber = quizdata[currentQuestion];
    question.innerHTML = questionNumber.question;
    ans_a.innerHTML = questionNumber.a;
    ans_b.innerHTML = questionNumber.b;
    ans_c.innerHTML = questionNumber.c;
    ans_d.innerHTML = questionNumber.d;

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
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.innerText = "🤍";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

function clearClasses(){
    if (quiz.classList.contains("correct")){
        quiz.classList.remove("correct")
    }
    if (quiz.classList.contains("incorrect")){
        quiz.classList.remove("incorrect")
    }
}
setInterval(clearClasses, 2000);

function but(){
    const answer = getSelected();
    if (answer) {
        if (answer === quizdata[currentQuestion].correct) {
            quiz.classList.add("correct")
            score++;
        }else {
            quiz.classList.add("incorrect")
        }
        currentQuestion++;

        if (currentQuestion < quizdata.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Вы ответили правильно на ${score} из ${quizdata.length} вопросов обо мне. Спасибо!</h2>
                <button onclick="location.reload()">Попробовать еще раз</button>`;
        }
    }
}