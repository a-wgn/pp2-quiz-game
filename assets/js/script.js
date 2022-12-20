const playButton = document.getElementById('start-container')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answer-bttn')
const nextButton = document.getElementById('next-bttn')


let shuffelQuestion, currentQuestion

playButton.addEventListener('click', playGame)
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

function playGame() {
console.log('Started')
playButton.classList.add('hide')
shuffelQuestion = questions.sort(() => Math.random() - .5)
currentQuestion = 0
questionContainer.classList.remove('hide')
nextQuestion()
}

function nextQuestion() {
    resetState()
    showQuestion(shuffelQuestion[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button') 
        button.innerText = answer.text
        button.classList.add('bttn')  
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }   
        button.addEventListener('click', choseAnswer)
        answerButton.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function choseAnswer(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStatus(document.body, correct)
    Array.from(answerButton.children).forEach(button => {
        setStatus(button, button.dataset.correct)
    })
    if (shuffelQuestion.length > currentQuestion + 1) {
        nextButton.classList.remove('hide')
    } else {
        playButton.innerText = 'Restart'
        playButton.classList.remove('hide')
    }  
}

function setStatus(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Anton is cool?',
        answers: [
            { text: '2', correct: true },
            { text: '2', correct: false },
            { text: '2', correct: false },
            { text: '2', correct: false }
        ]
    },
    {
        question: 'Anton is cool? tegdhghf',
        answers: [
            { text: '2', correct: true },
            { text: '2', correct: false },
            { text: '2', correct: false },
            { text: '2', correct: false }
        ]
    }
]