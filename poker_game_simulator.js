// IDEA:    training game mode:   always bet with "1 pot" at least ...

//  EXCERCISE:    send system messages from object to object


/*
1. create players
2. create table and set players & stacks
2a. create 'gametable'
3. give cards (create cards) and start interviewing
*/



//conditions:    .tocall    .minraise   .potodds

//game:    .gametable

PLAYER.prototype.decide = function (message, conditions, callback) {

    this.log.push(message)
    this.state = "thinking"

    if (conditions.tocall < (this.game.stack * 0.09)) var call_is_cheap = true
    if (conditions.minraise <= (conditions.BB * 3)) var raise_is_cheap = true
    if (conditions.potodds >= 3) var potodds_is_nice = true




    var move = "call"
    var amount = conditions.tocall
    this.state = "moved"

    // ?
    callback ({
        move : move + " " + amount,
        invested_percent : amount / this.game.stack

    })
}


function PLAYER(name, game) {
    this.name = name
    this.color = getcolor()
    this.personality = {}

    this.game = game

    this.state = "object created; in game"

    this.log = [this.state]

    function getcolor () {

        if (    Math.random() < 0.5      ) {}

        if (    Math.random() <= (1 / 3)    )  {}




        return "rgb( 200, 44, 222 )"
        function getbright () {}
    }
}





function PGAME_SERIES (opening_message, nextbreak_function) {      // for consecutive games on one table
                                // tournament context; multi-game ; multi-table?

    this.games = []
    this.created = new Date()
    this.tags = ["experimental"]
    this.open = true            // when false no more entries are accepted

    this.tournament_mode = "sitandgo"


    this.closing_message = ""
    this.opening_message = opening_message

    this.spectators = []        // mailing them?



    this.players = []

    this.nextbreak = 0
    this.nextbreak_function = nextbreak_function

}

function TOURNAMENT (name, players) {
    this.name = name
    this.state = "object created; wait for start"
    this.tags = [ "dummy", "save_tournament"]
    this.created = new Date()
    this.max_players = 45
    this.allow_newplayers = true
    this.allow_rebuys = 0
    this.players = players
    this.money_is_real = false
    this.buyin_is_real = true
    this.buyin = 100
    this.start_stack = 5000
    this.currency_display = "€"
}


function POKERGAME () {
    this.game_moves = []

    this.add_move({
        move : "sys_new_game",     // hello + please register for new game

        // start tournament
        // start game with fresh context

        // (2do: start game with given context)

        // look for players now (?)
        tournament : "sitandgo",
        time : new Date(),
        sb : 50,
        bb : 100,
        min_step : 100,
        stack: 5000,
        timeout : 20,       // seconds
        after_timeout : this.startgame ,
        max_players : 9,
        min_players : 2
    })
}

POKERGAME.prototype.add_move = function(m) {
    this.game_moves.push(m)

}





/*
interview-chain:

1,2,3,4,5,6
1,2,4 --> 1,2,3
1,2,3
1,3 --> 1,2
1,2
2 --> Winner (originally: 4)


__cards1__ 3,1,2 (call, call, check)

__cards2__ 1,2,3 (check, raise, _______ ) 3,1 (call, call)

__cards3__ 1,2,3 (check, check, raise) 1,2 (call, fold)

__cards4__ 1,2 (check, check)

__showdown__




*/
