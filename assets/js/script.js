const playButton = document.getElementById('start-container')
const questionContainer = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const awButtonsElement = document.getElementById('answer-bttn');

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
        awButtonsElement.appendChild(button)
    });
}

function selectAnswer() {

}

const question = [
    {
        question: 'Whats my name',
        answers: [
            {text: 'Anton', correct: true}, 
            {text: 'Daniel', correct: false}
        ]
    }
]

