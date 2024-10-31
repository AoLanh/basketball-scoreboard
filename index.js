let mainHomePoint = document.getElementById("home-points")
let mainGuestPoint = document.getElementById("guest-points")

let currentHomePoints = 0
let currentGuestPoints = 0


function add1Home() {
    currentHomePoints += 1
    mainHomePoint.textContent = currentHomePoints
    updateScore()
}

function add2Home() {
    currentHomePoints += 2
    mainHomePoint.textContent = currentHomePoints
    updateScore()
}

function add3Home() {
    currentHomePoints += 3
    mainHomePoint.textContent = currentHomePoints
    updateScore()
}

function add1Guest() {
    currentGuestPoints += 1
    mainGuestPoint.textContent = currentGuestPoints
    updateScore()
}

function add2Guest() {
    currentGuestPoints += 2
    mainGuestPoint.textContent = currentGuestPoints
    updateScore()
}

function add3Guest() {
    currentGuestPoints += 3
    mainGuestPoint.textContent = currentGuestPoints
    updateScore()
}

function resetGame() {
    currentHomePoints = 0
    currentGuestPoints = 0
    mainHomePoint.textContent = 0
    mainGuestPoint.textContent = 0
    document.getElementById('home-points').classList.remove('currentLeader');
    document.getElementById('guest-points').classList.remove('currentLeader');
}

function updateScore() {
    // Remove currentLeader class from both elements
    document.getElementById('home-points').classList.remove('currentLeader');
    document.getElementById('guest-points').classList.remove('currentLeader');
    
    
    if (currentHomePoints > currentGuestPoints) {
        document.getElementById('home-points').classList.add('currentLeader') } 
        else if (currentGuestPoints > currentHomePoints) {
        document.getElementById('guest-points').classList.add('currentLeader')}
}