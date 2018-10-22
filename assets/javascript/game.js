
$(document).ready(function(){
    $("#hanSolo").on("click", function() {
        $(".villanContainer").removeClass()
       $("#lea").toggle()
       $("#obi").toggle()
       $("#r2").toggle()
    })
})

$(document).ready(function(){
    $("#lea").on("click", function() {
        $(".villanContainer").removeClass()
       $("#hanSolo").toggle()
       $("#obi").toggle()
       $("#r2").toggle()
    })
})

$(document).ready(function(){
    $("#obi").on("click", function() {
        $(".villanContainer").removeClass()
       $("#lea").toggle()
       $("#hanSolo").toggle()
       $("#r2").toggle() 
    })
})

$(document).ready(function(){
    $("#r2").on("click", function() {
        $(".villanContainer").removeClass()
       $("#lea").toggle()
       $("#obi").toggle()
       $("#hanSolo").toggle()
    })
})


$("#darth").on("click", function() {
    var darth = $("#darth")
    $("#defend").append(darth)
})

var gameHasStarted = false;


var princessLea = {
    health: 120,
    attack:8,
    enemyAttackBack : 15
}

 var obiWan = {
     health: 100,
     attack:14,
     enemyAttackBack:15
 }

 var r2 = {
     health:150,
     attack:8,
     enemyAttackBack:20

 }

 var hansolo = {
     health: 180,
     attack:7,
     enemyAttackBack:25
 }

 var darth = {
     health:100, 
 }

 $("button").on("click",function(){
     startGame()
 })

 function startGame() {
    /// your character attacks defender 
    playerAttack = function () {

    }
    // health is subtracted for both character and defender 
    // on each attack press attack adds character +10
    // 
 }                                    