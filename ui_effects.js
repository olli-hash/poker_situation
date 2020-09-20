
$(document).ready(function(){

    $('#button1').on("click", function(){

        alert($(this).prev().val())
    })

    $('#size_barchart').change( function () {
        alert("hi")
    })
})


$( document ).ready(function()  {

    $('.position_relative').mouseenter(function(){
        $(this).css("z-index", "100")
    })

    $('.position_relative').mouseleave(function(){
        $(this).css("z-index", "10")
    })

    // console.log(myChart)

})
