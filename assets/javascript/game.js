let gameHasStarted = false;

 let playerStats = {
    hansolo : {
        health: 180,
        attack:7,
        enemyAttackBack:25
    },
    r2 : {
        health:150,
        attack:8,
        enemyAttackBack:20
   
    },
    obiWan : {
        health: 100,
        attack:14,
        enemyAttackBack:15
    },
    princessLea : {
        health: 120,
        attack:8,
        enemyAttackBack : 15
    },
 }



 
 var gameStarted = false;
 var villanSelected = false; 
 var playerSelected = false; 
var myCharacter = "";
var myDefender = ""
var character; 
var player; 
var defeated = false
var r2
var obi
var lea
var hanSolo
var attack;
var health
var enemyAttack; 


// determines which player moves into my character and which move into fight
$("#hanSolo").on("click", function() {
    if (myCharacter === "" && playerSelected === false) {
        $(this).appendTo(".myChar");
        $("#lea").appendTo("#fight")
        $("#obi").appendTo("#fight");
        $("#r2").appendTo("#fight")
        playerSelected = true; 
        myChracter = playerStats.hanSolo
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
        myCharacter = playerStats.princessLea
    }if (myCharacter == playerStats.princessLea)
    attack = playerStats.princessLea.attack
    health = playerStats.princessLea.health
    enemyAttack = playerStats.princessLea.enemyAttackBack
})

$("#obi").on("click", function() {
    if (myCharacter === "" && playerSelected === false) {
        $(this).appendTo(".myChar");
        $("#lea").appendTo("#fight")
        $("#hanSolo").appendTo("#fight");
        $("#r2").appendTo("#fight")
        playerSelected = true; 
        myCharacter = playerStats.obiWan
    }
    if (myCharacter === playerStats.obiWan)
        attack = playerStats.obiWan.attack
        health = playerStats.obiWan.health
        enemyAttack = playerStats.obiWan.enemyAttackBack
})

$("#r2").on("click", function() {
    if (myCharacter === "" && playerSelected === false) {
        $(this).appendTo(".myChar");
        $("#lea").appendTo("#fight")
        $("#obi").appendTo("#fight");
        $("#hanSolo").appendTo("#fight")
        playerSelected = true; 
        console.log(playerSelected)
        myCharcter = playerStats.r2
    }
    if (myCharacter == playerStats.r2)
        attack = playerStats.r2.attack
        health = playerStats.r2.health
        enemyAttack = playerStats.r2.enemyAttackBack
    
})

//move characters from enemies to defender 

if (playerSelected == true) {
    $("#hanSolo").on("click", function(){
        myDefender = $(this)
        $(myDefender).appendTo("#Defender")
 })
}




