var gameData = {
    bullets: 10,
    bulletsPerShoot: 1,
    killsPerBullet: 1,
    kills: 0,
    credsPerKill: 1,
    killCreds: 0,
    resupplyCost: 5,
    bulletsPerResupply: 15,
    bulletsPerResupplyCost: 15,
    bugCount: 10000000,
    killsPerStab: 0.5,
    rank: 1,
    rankCost: 100,
    turretOneCount: 0,
    turretOneDamage: 1,
    turretOneCost: 10,
    turretOneInterval: 5000,
    turretOneKills: 0,
    headsetGet: 0,
    killIncome: 0,
    killCredIncome: 0,
    headsetLevel: 0,
    nests: 0,
    bugGrowth: 0.001,
    oldBugCount: 10000000,
    savedAgo: 15
}

function shootBug() {
    if (gameData.bullets >= gameData.bulletsPerShoot) {
        gameData.kills += (gameData.killsPerBullet * gameData.bulletsPerShoot)
        gameData.bugCount -= (gameData.killsPerBullet * gameData.bulletsPerShoot)
        gameData.killCreds += (gameData.credsPerKill * (gameData.killsPerBullet * gameData.bulletsPerShoot))
        gameData.bullets -= gameData.bulletsPerShoot
        document.getElementById("bugsKilled").innerHTML = gameData.kills + " Bugs Fumigated"
        document.getElementById("killCred").innerHTML = gameData.killCreds + " Dominion KillCredits"
        document.getElementById("ammoCount").innerHTML = gameData.bullets + " Ammunition Left"
    }
}

function knifeBug() {
    gameData.kills += gameData.killsPerStab
    gameData.killCreds += (gameData.credsPerKill * gameData.killsPerStab)
    gameData.bugCount -= gameData.killsPerStab
    document.getElementById("bugsKilled").innerHTML = gameData.kills + " Bugs Fumigated"
    document.getElementById("killCred").innerHTML = gameData.killCreds + " Dominion KillCredits"
}

function buyResupply() {
    if (gameData.killCreds >= gameData.resupplyCost) {
        gameData.killCreds -= gameData.resupplyCost
        gameData.bullets += gameData.bulletsPerResupply
        document.getElementById("killCred").innerHTML = gameData.killCreds + " Dominion KillCredits"
        document.getElementById("ammoCount").innerHTML = gameData.bullets + " Ammunition Left"
        document.getElementById("buyResupply").title = "Thankfully, the military subsidises your ammo usage. Requisitions " + gameData.bulletsPerResupply + " Ammunition."
    }
}

function checkAmmo() {
    document.getElementById("ammoCount").innerHTML = gameData.bullets + " Ammunition Left"
    document.getElementById("bulletsPerResupply").innerHTML = gameData.bulletsPerResupply + " Ammunition Per Resupply"
    if (gameData.bullets == 0) {
        document.getElementById("clickToShoot").innerHTML = "Out of Ammunition!"
    } else {
        document.getElementById("clickToShoot").innerHTML = "Blow a bug's brains out! (Cost: -" + gameData.bulletsPerShoot + " Ammunition)"
    }
}

function checkBugs() {
    document.getElementById("bugsRemaining").innerHTML = gameData.bugCount + " bugs polluting this world"
    if (gameData.turretOneCount != 0 && gameData.turretOneDamage == 1) {
        document.getElementById("turretOneDmgUpgrade1").style.display = "inline-block"
    } else {
        document.getElementById("turretOneDmgUpgrade1").style.display = "none"
    }
}

function checkKillCreds() {
    document.getElementById("killCred").innerHTML = gameData.killCreds + " Dominion KillCredits"
}

function incomeCheck() {
    gameData.killIncome = ((gameData.turretOneCount * gameData.turretOneDamage) + ((gameData.killsPerBullet * gameData.bulletsPerShoot) * gameData.headsetLevel))
    gameData.killCredIncome = (((gameData.turretOneCount * gameData.turretOneDamage) + ((gameData.killsPerBullet * gameData.bulletsPerShoot) * gameData.headsetLevel)) * gameData.credsPerKill)
    document.getElementById("killIncome").innerHTML = gameData.killIncome + " Passive Kills Per Second"
    document.getElementById("killCredIncome").innerHTML = gameData.killCredIncome + " Passive KillCreds Per Second"
    document.getElementById("credsPerKill").innerHTML = gameData.credsPerKill + " Credits Per Kill"
}

function bugBreed() {
    gameData.bugCount += (Math.round(gameData.bugCount * 0.0000123))
}

var mainGameLoop = window.setInterval(function() {
    checkAmmo()
    checkKillCreds()
    incomeCheck()
}, 1000)

var bugBreedLoop = window.setInterval(function() {
    bugBreed()
    checkBugs()
}, 100)

function incrementTimer() {
    gameData.savedAgo -= 1
    document.getElementById("savedAgo").innerHTML = "Last saved " + gameData.savedAgo + " seconds ago."
}

function resetTimer() {
    gameData.savedAgo = 15
    document.getElementById("savedAgo").innerHTML = "Last saved " + gameData.savedAgo + " seconds ago."
}

var timerLoop = window.setInterval(function() {
    incrementTimer()
}, 1000)

/* var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("DoDSSave", JSON.stringify(gameData))
    resetTimer()
  }, 15000)

  var savegame = JSON.parse(localStorage.getItem("DoDSSave"))
if (savegame !== null) {
  gameData = savegame
} */