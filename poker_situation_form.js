

$( document ).ready(function()  {

    var today = new Date()
    var today_string = today.getFullYear() + "-" + getMonth(today) + "-" + today.getDate()
    //console.log(today_string)
    $('input[name=date]').attr("value", today_string)

    function getMonth(m) {
        var x = m.getMonth() + 1
        if (x < 10) return "0" + x
        else return x
    }

    //  ------- ------- ------- ------- ------- ------- ------- ------- -------

    $('.cards input').mouseenter(function(){
        $(this).css("z-index", "100")
    })
    $('.cards input').mouseleave(function(){
        $(this).css("z-index", "10")
    })





})
