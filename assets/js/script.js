const playButton = document.getElementById('start-container')
const nextButton = document.getElementById('next-bttn')
const questionContainer = document.getElementById('question-container')

const questionElement = document.getElementById('question')
var awButtons = document.getElementById('answer-button');

let shuffledQuestions, currentQuestionIndex

playButton.addEventListener('click', playGame)

function playGame() {
    console.log('Started')
    playButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
    

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('bttn')
        if (answer.correct) {
            button.dataset = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        awButtons.appendChild(button)
    });
}

function selectAnswer(e) {

}

const question = [
    {
        question: 'Whats my name?',
        answers: [
            { text: 'Anton', correct: true }, 
            { text: 'Daniel', correct: false }
        ]
    },
    {
        question: 'Whats my name?',
        answers: [
            { text: 'Anton', correct: true }, 
            { text: 'Daniel', correct: false }
        ]
    },
    {
        question: 'Whats my name?',
        answers: [
            { text: 'Anton', correct: true }, 
            { text: 'Daniel', correct: false }
        ]
    }
]