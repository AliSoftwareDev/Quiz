const timeElement = document.querySelector(".time");
const countElement = document.querySelector(".count");
const timerElement = document.querySelector(".timer");
const repeatBtn = document.querySelector(".repeat");
const result = document.querySelector(".result");
const questionElement = document.querySelector(".question");
const optionsElement = document.querySelectorAll(".option");
const resultCorrect = document.querySelector(".result-correct");
const resultWrong = document.querySelector(".result-wrong");
const resultEmpty = document.querySelector(".result-empty");
let correctAnswerTotal = 0;
let wrongAnswerTotal = 0;
let emptyAnswerTotal = 0;
let canSelectOption = true;
let questionNumber = 0;
let interval, sayac, 
time = 60;


const questions = [
    {
        text:" JavaScript'te değişken tanımlamak için hangisi kullanılır?",
        options: ["var", "print", "def", "using"],
        answer: "var"
    },
    {
        text: "Html sayfasında başlık için doğru etiket?",
        options: ["<p>", "<h1>", "<div>",  "<title> içerikte"],
        answer: "<h1>"
    },
    {
        text: "Css'te sınıf seçici nasıl yazılır?",
        options: ["#myClass", ".myClass", "myClass{}", "class: myClass"],
        answer: ".myClass"
    }
];
start();
result.style.display = "none";
optionsElement.forEach((option) => {
    option.addEventListener("click", () => {
if(!canSelectOption) {
    return;
}
    const selectedOption = option.textContent.trim();
    const correctAnswer = questions[questionNumber].answer;

    optionsElement.forEach((el) => {
        if(el.textContent === selectedOption) {
    if(selectedOption === correctAnswer) {
        el.style.backgroundColor = "#739072";
        correctAnswerTotal++;
    } else {
        el.style.backgroundColor = "#AF8455";
        wrongAnswerTotal++;
    }
    } else {
        el.style.backgroundColor = "transparent";
    }
});
    canSelectOption = false;
    setTimeout(() => {
        canSelectOption = true;
        nextQuestion();
    }, 1500);
    
});
});

function start(){
    startTimerLine();
    clearInterval(sayac);
    document.querySelector(".container").style.opacity=1;
    document.querySelector(".container").style.pointerEvents = "all"; 
    result.style.display = "none";
    time = 60;
    timeElement.textContent = time + "sn.";
    timeControl();
    countElement.textContent = `${questionNumber + 1}/${questions.length}`;

    optionsElement.forEach((option, index)=> {
        option.style.backgroundColor = "transparent";
        option.textContent = questions[questionNumber].options[index];
    });
    questionElement.textContent = questions[questionNumber].text;
}

function end(){
    clearInterval(sayac);
    clearInterval(interval);
    document.querySelector('.container').style.opacity = 0.5;
    document.querySelector('.container').style.pointerEvents = "none";
    result.style.display = "block";
    resultCorrect.textContent = `Doğru: ${correctAnswerTotal}`;
    resultWrong.textContent = `Yanlış: ${wrongAnswerTotal}`; 
    resultEmpty.textContent = `Boş: ${emptyAnswerTotal}`;  
}

function nextQuestion(){
    if(questionNumber < questions.length -1) {
        questionNumber++;
    } else {
        end();
        return;
    }
    start();
}
function startTimerLine() {
    timerElement.style.width = "0px";
    clearInterval(interval);

    const targetWidth = 450;
    const totalTime = 60000;
    let currentTime = totalTime;

    interval = setInterval(() => {
        currentTime -=10;

    if(currentTime >= 0){
        const progress = (totalTime - currentTime) / totalTime;
        const currentWidth = progress * targetWidth;
        timerElement.style.width = `${currentWidth}px`;
    } else {
        clearInterval(interval);
    }

    }, 10);
}

function timeControl(){
    sayac = setInterval(() => {
        if(time > 0){
            time -=1;
            timeElement.textContent = time + "sn.";
        }else{
            emptyAnswerTotal++;
            nextQuestion();
        }
        }, 1000);
    }

repeatBtn.addEventListener("click", () => {
    window.location.reload();
});
