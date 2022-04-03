$(document).ready(function(){
    var $earth = $("#earth");
    $("#btn__start").click(function(){
        $earth.animate({
            left : "480px"
        }, 3000);
    })
})