const playButton = document.getElementById('start-container')
const questionContainer = document.getElementById('question-container')

playButton.addEventListener('click', playGame)

function playGame() {
    console.log('Started')
    playButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    nextQuestion()
}

