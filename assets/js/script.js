const playButton = document.getElementById('start-container')
const questionContainer = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const awButton = document.getElementById('answer-button')

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
}

function selectAnswer() {

}

const question = [
    {
        question: 'Whats my name?',
        answers: [
            { text: 'Anton', correct: true }, 
            { text: 'Daniel', correct: false }
        ]
    }
]