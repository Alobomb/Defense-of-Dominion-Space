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
    headsetGet: 0
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
    }
}

function upgradeResupply() {
    if (gameData.killCreds >= gameData.bulletsPerResupplyCost) {
        gameData.killCreds -= gameData.bulletsPerResupplyCost
        gameData.bulletsPerResupply *= 2
        gameData.bulletsPerResupplyCost *= 3
        gameData.resupplyCost *= 2
        document.getElementById("killCred").innerHTML = gameData.killCreds + " Dominion KillCredits"
        document.getElementById("upgradeResupply").innerHTML = "Requisition larger ammo dumps (Cost: " + gameData.bulletsPerResupplyCost + " KillCreds)"
        document.getElementById("buyResupply").innerHTML = "Call in an ammunition airdrop (Cost: " + gameData.resupplyCost + " KillCreds)"
    }
}

function wpnUpgradeOne() {
    if (gameData.kills > 100) {
        gameData.bulletsPerShoot = 2
        document.getElementById("wpnUpgradeOne").style.display = "none"
        document.getElementById("wpnUpgradeTwo").style.display = "inline"
    }
}

function wpnUpgradeTwo() {
    if (gameData.kills > 500) {
        gameData.killsPerBullet = 3
        document.getElementById("wpnUpgradeTwo").style.display = "none"
    }
}

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

function checkAmmo() {
    if (gameData.bullets == 0) {
        document.getElementById("clickToShoot").innerHTML = "Out of Ammunition!"
    } else {
        document.getElementById("clickToShoot").innerHTML = "Blow a bug's brains out! (Cost: -" + gameData.bulletsPerShoot + " Ammunition)"
    }
}

function checkBugs() {
    document.getElementById("bugsRemaining").innerHTML = gameData.bugCount + " bugs polluting this world"
    if (gameData.turretOneCount != 0 && gameData.turretOneDamage == 1) {
        document.getElementById("turretOneDmgUpgrade1").style.display = "block"
    } else {
        document.getElementById("turretOneDmgUpgrade1").style.display = "none"
    }
}

function headsetUpgradeOne() {
    if (gameData.killCreds >= 40) {
    gameData.killCreds -= 40
    document.getElementById("headset").style.display = "none"
    document.getElementById("headsetTwo").style.display = "inline"
    document.getElementById("killCred").innerHTML = gameData.killCreds + " Dominion KillCredits"
    setInterval(shootBug, 1000)
    }
}

function headsetUpgradeTwo() {
    if (gameData.killCreds >= 300) {
        gameData.killCreds -= 300
        clearInterval(shootBug)
        setInterval(shootBug, 500)
        document.getElementById("headsetTwo").style.display = "none"
        document.getElementById("killCred").innerHTML = gameData.killCreds + " Dominion KillCredits"
    }
}

function promotionOne() {
    if (gameData.kills >= 200) {
        gameData.credsPerKill = 2
        document.getElementById("rank").innerHTML = "Current Rank: Private First Class (2 Credits Per Kill)"
        document.getElementById("promotionOne").style.display = "none"
        document.getElementById("promotionTwo").style.display = "inline"
    }
}

function promotionTwo() {
    if (gameData.kills >= 700) {
        gameData.credsPerKill = 4
        document.getElementById("rank").innerHTML = "Current Rank: Corporal (4 Credits Per Kill)"
        document.getElementById("promotionTwo").style.display = "none"
        document.getElementById("promotionThree").style.display = "inline"
    }
}

function promotionThree() {
    if (gameData.kills >= 1500) {
        gameData.credsPerKill = 10
        document.getElementById("rank").innerHTML = "Current Rank: Sergeant (10 Credits Per Kill)"
        document.getElementById("promotionThree").style.display = "none"
    }
}

function checkKillCreds() {
    document.getElementById("killCred").innerHTML = gameData.killCreds + " Dominion KillCredits"
}



var turretLoop = window.setInterval(function() {
    turretOneShoot()
}, 1200)

var mainGameLoop = window.setInterval(function() {
    checkAmmo()
    checkBugs()
    checkKillCreds()
}, 1000)