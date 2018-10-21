
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


