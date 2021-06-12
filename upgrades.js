/* Headset upgrades */
function headsetUpgradeOne() {
    if (gameData.killCreds >= 40) {
    gameData.killCreds -= 40
    gameData.headsetLevel = 1
    document.getElementById("headset").style.display = "none"
    document.getElementById("headsetTwo").style.display = "block"
    document.getElementById("killCred").innerHTML = gameData.killCreds + " Dominion KillCredits"
    setInterval(shootBug, 1000)
    }
}

function headsetUpgradeTwo() {
    if (gameData.killCreds >= 300) {
        gameData.killCreds -= 300
        gameData.headsetLevel = 2
        clearInterval(shootBug)
        setInterval(shootBug, 500)
        document.getElementById("headsetTwo").style.display = "none"
        document.getElementById("killCred").innerHTML = gameData.killCreds + " Dominion KillCredits"
    }
}

/* Weapon upgrades */
function wpnUpgradeOne() {
    if (gameData.kills > 100) {
        gameData.bulletsPerShoot = 2
        document.getElementById("wpnUpgradeOne").style.display = "none"
        document.getElementById("wpnUpgradeTwo").style.display = "block"
        document.getElementById("bulletsPerShoot").innerHTML = "Firing " + gameData.bulletsPerShoot + " per trigger pull"
    }
}

function wpnUpgradeTwo() {
    if (gameData.kills > 500) {
        gameData.killsPerBullet = 3
        document.getElementById("wpnUpgradeTwo").style.display = "none"
        document.getElementById("killsPerBullet").innerHTML = "Killing " + gameData.killsPerBullet + " bugs per ammunition"
    }
}

/* Resupply Upgrade */
function upgradeResupply() {
    if (gameData.killCreds >= gameData.bulletsPerResupplyCost) {
        gameData.killCreds -= gameData.bulletsPerResupplyCost
        gameData.bulletsPerResupply *= 2
        gameData.bulletsPerResupplyCost *= 3
        gameData.resupplyCost *= 2
        document.getElementById("killCred").innerHTML = gameData.killCreds + " Dominion KillCredits"
        document.getElementById("upgradeResupply").innerHTML = "Requisition larger ammo dumps (Cost: " + gameData.bulletsPerResupplyCost + " KillCreds)"
        document.getElementById("buyResupply").innerHTML = "Call in an ammunition airdrop (Cost: " + gameData.resupplyCost + " KillCreds)"
        document.getElementById("buyResupply").title = "Thankfully, the military subsidises your ammo usage. Requisitions " + gameData.bulletsPerResupply + " Ammunition."
        document.getElementById("upgradeResupply").title = "You want us to send you HOW much ammo? Doubles ammunition received, and its cost. Currently " + gameData.bulletsPerResupply + " Ammo per drop, next " + (gameData.bulletsPerResupply * 2) + " Ammo per drop." + gameData.bulletsPerResupply + " Ammunition."
        document.getElementById("bulletsPerResupply").innerHTML = gameData.bulletsPerResupply + " Ammunition Per Resupply"
    }
}

/* Promotions */
function promotionOne() {
    if (gameData.kills >= 200) {
        gameData.credsPerKill = 2
        document.getElementById("rank").innerHTML = "Current Rank: Private First Class"
        document.getElementById("credsPerKill").innerHTML = gameData.credsPerKill + " Credits Per Kill"
        document.getElementById("promotionOne").style.display = "none"
        document.getElementById("promotionTwo").style.display = "block"
    }
}

function promotionTwo() {
    if (gameData.kills >= 700) {
        gameData.credsPerKill = 4
        document.getElementById("rank").innerHTML = "Current Rank: Corporal"
        document.getElementById("credsPerKill").innerHTML = gameData.credsPerKill + " Credits Per Kill"
        document.getElementById("promotionTwo").style.display = "none"
        document.getElementById("promotionThree").style.display = "block"
    }
}

function promotionThree() {
    if (gameData.kills >= 1500) {
        gameData.credsPerKill = 10
        document.getElementById("rank").innerHTML = "Current Rank: Sergeant"
        document.getElementById("credsPerKill").innerHTML = gameData.credsPerKill + " Credits Per Kill"
        document.getElementById("promotionThree").style.display = "none"
    }
}