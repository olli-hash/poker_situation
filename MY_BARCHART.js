function MY_BARCHART (label, borderWidth) {
    if (! label) label = "---hello barchart---"
    if (! borderWidth) borderWidth = 1

    this.standard_colors = [
        { backgroundColor: 'rgba(255, 99, 132, 0.2)',  borderColor: 'rgba(255, 99, 132, 1)' } ,
        { backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)' } ,
        { backgroundColor: 'rgba(255, 206, 86, 0.2)', borderColor: 'rgba(255, 206, 86, 1)' } ,
        { backgroundColor: 'rgba(75, 192, 192, 0.2)', borderColor: 'rgba(75, 192, 192, 1)' } ,
        { backgroundColor: 'rgba(153, 102, 255, 0.2)', borderColor: 'rgba(153, 102, 255, 1)' } ,
        { backgroundColor: 'rgba(255, 159, 64, 0.2)', borderColor: 'rgba(255, 159, 64, 1)' }
    ]

    this.next_color = 0

    this.config = {
                type: 'bar',
                data: {
                    labels: [],                     //
                    datasets: [{
                        label: label,
                        data: [],                   //
                        backgroundColor: [],        //
                        borderColor: [],            //
                        borderWidth: borderWidth
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
    }
}

MY_BARCHART.prototype.add_bar = function (label, data, backgroundColor, borderColor ) {

    this.config.data.labels.push(label)
    this.config.data.datasets[0].data.push(data)
    this.config.data.datasets[0].backgroundColor.push(backgroundColor)
    this.config.data.datasets[0].borderColor.push(borderColor)

}


MY_BARCHART.prototype.add_bar_c = function (label, data ) {

    var backgroundColor = this.standard_colors[this.next_color].backgroundColor
    var borderColor = this.standard_colors[this.next_color++].borderColor
    if (this.next_color >= this.standard_colors.length) this.next_color = 0
    
    this.add_bar(label, data, backgroundColor, borderColor)

}
