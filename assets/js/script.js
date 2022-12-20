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
        question: 'In which Italian city can you find the Colosseum?',
        answers: [
            { text: 'Venice', correct: false },
            { text: 'Rome', correct: true },
            { text: 'Naples', correct: false },
            { text: 'Mila', correct: false }
        ]
    },
    {
        question: 'What city hosted the 2002 Olympic Games?',
        answers: [
            { text: 'Tokyo', correct: false },
            { text: 'Beijing', correct: false },
            { text: 'Sydney', correct: true },
            { text: 'Munich', correct: false }
        ]
    },
    {
        question: 'Which city is home to the Brandenburg Gate?',
        answers: [
            { text: 'Berlin', correct: true },
            { text: 'Frankfurt', correct: false },
            { text: 'Cologne', correct: false },
            { text: 'Munich', correct: false }
        ]
    },
    {
        question: 'Where was the first example of paper money used?',
        answers: [
            { text: 'China', correct: true },
            { text: 'Turkey', correct: false },
            { text: 'Greece', correct: false },
            { text: 'Thailand', correct: false }
        ]
    },
    {
        question: 'Where was tea invented?',
        answers: [
            { text: 'England', correct: false },
            { text: 'China', correct: true },
            { text: 'USA', correct: false },
            { text: 'France', correct: false }
        ]
    },
    {
        question: 'If you were looking at Iguazu Falls, on what continent would you be?',
        answers: [
            { text: 'Asia', correct: false },
            { text: 'Africa', correct: false },
            { text: 'Europe', correct: false },
            { text: 'South America', correct: true }
        ]
    },
    {
        question: 'Which of the following languages has the longest alphabet?',
        answers: [
            { text: 'Greek', correct: false },
            { text: 'Russian', correct: true },
            { text: 'German', correct: false },
            { text: 'Arabic', correct: false }
        ]
    },
    {
        question: 'How long did dinosaurs live on the earth?',
        answers: [
            { text: '50-100 million years', correct: false },
            { text: '100-150 million years', correct: false },
            { text: '150-200 million years', correct: true },
            { text: '200+ million years', correct: false }
        ]
    },
    {
        question: 'What spirit is used in making a Tom Collins?',
        answers: [
            { text: 'Vodka', correct: false },
            { text: 'Gin', correct: true },
            { text: 'Tequila', correct: false },
            { text: 'Rum', correct: false }
        ]
    },
    {
        question: 'How many plays do people (generally) believe that Shakespeare wrote?',
        answers: [
            { text: '27', correct: false },
            { text: '37', correct: true },
            { text: '47', correct: false },
            { text: '57', correct: false }
        ]
    }
]