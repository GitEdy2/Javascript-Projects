const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '20',
        c: '30',
        d: '40',
        correct: 'c'
    },

    {
        question: 'What is the programing language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: 'Who is the president of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertextual Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Natation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was Javascript launched?',
        a: '2020',
        b: '2019',
        c: '2018',
        d: 'none of the above',
        correct: 'd'
    },



];

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();


function loadQuiz() {

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

submitBtn.addEventListener("click", () => {
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    }
    else {
        alert("You finished");
    }

    
})