

/* Turret one stuff */

function callTurretOne() {
    if (gameData.killCreds >= gameData.turretOneCost) {
        gameData.turretOneCount += 1
        gameData.killCreds -= gameData.turretOneCost
        gameData.turretOneCost *= 2
        document.getElementById("killCred").innerHTML = gameData.killCreds + " Dominion KillCredits"
        document.getElementById("turretOneCount").style.display = "block"
        document.getElementById("turretOneKills").style.display = "block"
        document.getElementById("turretOneCount").innerHTML = "You currently have " + gameData.turretOneCount + " Small Caliber Autoturrets"
        document.getElementById("turretOne").innerHTML = "Call down a small caliber autoturret from orbit (Cost: " + gameData.turretOneCost + " KillCreds)"
    }
}

function upgradeTurretOne1() {
    if (gameData.killCreds >= 125) {
        gameData.turretOneDamage = 2
        gameData.killCreds -= 125
        document.getElementById("turretOneDmgUpgrade1").style.display = "none"
    }
}

function turretOneShoot() {
    gameData.kills += (gameData.turretOneDamage * gameData.turretOneCount)
    gameData.turretOneKills += (gameData.turretOneDamage * gameData.turretOneCount)
    gameData.bugCount -= (gameData.turretOneDamage * gameData.turretOneCount)
    gameData.killCreds += (gameData.credsPerKill * (gameData.turretOneDamage * gameData.turretOneCount))
    document.getElementById("turretOneKills").innerHTML = "They have gotten " + gameData.turretOneKills + " kills"
    document.getElementById("bugsKilled").innerHTML = gameData.kills + " Bugs Fumigated"
    document.getElementById("killCred").innerHTML = gameData.killCreds + " Dominion KillCredits"
}

/* Turret two stuff */






var turretLoop = window.setInterval(function() {
    turretOneShoot()
}, 1000)