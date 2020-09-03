$( document ).ready(function()  {
    console.log(myChart)            // logs canvas!!! ???????
                                    // should be undefined !!!! ????
})

Chart.defaults.global.animation.duration = 700
Chart.defaults.global.title.fontSize = 33
Chart.defaults.global.title.display = false
console.log(Chart.defaults.global.animation.duration + "---" + Chart.defaults.global.title.display)



$('#size_barchart').change( function () {
    alert("hi")
})










var c1 = new MY_BARCHART("Poker: Bets")

c1.add_bar_c("player1", 100 )
c1.add_bar_c("player2", 200 )
c1.add_bar_c("player3", 400 )

c1.add_bar_c("player4", 400 )

c1.add_bar_c("player5", 400 )

c1.add_bar_c("player6", 400 )

c1.add_bar_c("player7", 400)

c1.add_bar_c("player8", 400)
c1.add_bar_c("player9", 400)

c1.add_bar_c("player1", 300 )
c1.add_bar_c("player2", 200 )



$( document ).ready(function()  {

    myChart = new Chart('myChart', c1.config )

})


$( document ).ready(function()  {

    $('.position_relative').mouseenter(function(){
        $(this).css("z-index", "100")
    })

    $('.position_relative').mouseleave(function(){
        $(this).css("z-index", "10")
    })

    console.log(myChart)

})
