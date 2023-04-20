let homeScore = document.getElementById("home-point")
let guestScore = document.getElementById("guest-point")

let homePoint =0
let guestPoint = 0

function homeScoreAdd(value)
{
    homePoint += value
    homeScore.textContent = homePoint
}

function guestScoreAdd(value)
{
    guestPoint += value
    guestScore.textContent = guestPoint
}


