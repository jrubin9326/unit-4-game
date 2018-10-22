let gameHasStarted = false;

 let playerStats = {
    hansolo : {
        name: "hanSolo",
        health: 180,
        attack:7,
        enemyAttackBack:25
    },
    r2 : {
        name:"r2",
        health:150,
        attack:8,
        enemyAttackBack:20
   
    },
    obiWan : {
        name:"obiWan",
        health: 100,
        attack:14,
        enemyAttackBack:15
    },
    princessLea : {
        name: "princess lea",
        health: 120,
        attack:8,
        enemyAttackBack : 15
    },
 }



 
 var gameStarted = false;
 var villanSelected = false; 
 var playerSelected = false; 
var myCharacter = ""
var myDefender = ""
var character; 
var player; 
var defeated = false
var r2
var obi
var lea
var hanSolo
var fight 
var health
var enemyAttack; 
var enemyHealth; 



// determines which player moves into my character and which move into fight
$("#hanSolo").on("click", function() {
    if (myCharacter === "" && playerSelected === false) {
        $(this).appendTo(".myChar");
        $("#lea").appendTo("#fight")
        $("#obi").appendTo("#fight");
        $("#r2").appendTo("#fight")
        playerSelected = true; 
        myChracter = playerStats.hanSolo.name
    }
    if (myCharacter === playerStats.hansolo)
        attack = playerStats.hansolo.attack
        health = playerStats.hansolo.health
        enemyAttack = playerStats.hansolo.enemyAttackBack
})

$("#lea").on("click", function() {
    if (myCharacter === "" && playerSelected === false) {
        $(this).appendTo(".myChar");
        $("#hanSolo").appendTo("#fight")
        $("#obi").appendTo("#fight");
        $("#r2").appendTo("#fight")
        playerSelected = true;
        myCharacter = playerStats.princessLea.name
    }if (myCharacter == playerStats.princessLea)
    attack = playerStats.princessLea.attack
    health = playerStats.princessLea.health
})

$("#obi").on("click", function() {
    if (myCharacter === "" && playerSelected === false) {
        $(this).appendTo(".myChar");
        $("#lea").appendTo("#fight")
        $("#hanSolo").appendTo("#fight");
        $("#r2").appendTo("#fight")
        playerSelected = true; 
        myCharacter = playerStats.obiWan.name
    }
    if (myCharacter === playerStats.obiWan)
        attack = playerStats.obiWan.attack
        health = playerStats.obiWan.health
})

$("#r2").on("click", function() {
    if (myCharacter === "" && playerSelected === false) {
        $(this).appendTo(".myChar");
        $("#lea").appendTo("#fight")
        $("#obi").appendTo("#fight");
        $("#hanSolo").appendTo("#fight")
        playerSelected = true; 
        console.log(playerSelected)
        myCharacter = playerStats.r2.name
        console.log(myCharacter)
    }
    if (myCharacter == playerStats.r2.name)
        health = playerStats.r2.health
        fight = playerStats.r2.attack; 
        console.log(health, fight)
    
})

//move characters from enemies to defender 

if (playerSelected === true && myCharacter === playerStats.r2.name) {
    $("#hanSolo").on("click", function(){
        myDefender = playerStats.hansolo.name
        console.log(myDefender)
        // enemyHealth = playerStats.hansolo.health
        // enemyAttack = playerStats.hansolo.enemyAttackBack
        // $(myDefender).appendTo("#Defender")
        console.log(myCharacter)
 })

} 

var r2HP = $(".playerHealthr2")
var soloHP = $(".playerHealthSolo")
var leaHP = $(".playerHealthLea")
var obiHP = $(".playerHealthObi")
var playerHP;
var defenderHP
// when attack button is pressed deduct health from player and defender
$("button").on("click", function(){
    if (myDefender === playerStats.hansolo && myCharacter == playerStats.r2.name) {
        playerHP = health - enemyAttack
        $(r2HP).text(playerHP)
        defenderHP = enemyHealth - attack; 
        if (playerHP < 0) {
            $(".myChar").text("you are defeated")
        }
    } else if (myDefender === playerStats.princessLea && myCharacter === playerStats.r2.name) {
        playerHP = health - enemyAttack
        $(r2HP).text(playerHP)
        defenderHP = enemyHealth - attack; 
        if (playerHP < 0) {
            $(".myChar").text("you are defeated")
        }
    } else if (myDefender === playerStats.obiWan && myCharacter === playerStats.r2.name) {
        playerHP = health - enemyAttack
        $(r2HP).text(playerHP)
        defenderHP = enemyHealth - attack; 
        if (playerHP < 0) {
            $(".myChar").text("you are defeated")
        }
    }
})



