
/*
1. create players
2. create table and set players & stacks
2a. create game events list
3. give cards (create cards) and start interviewing
*/


// training game mode:   always bet with "1 pot" at least ...




function PGAME_SERIES () {      // for consecutive games on one table
                                // tournament context; multi-game ; multi-table?

    this.games = []
    this.created = new Date()
    this.tags = ["experimental"]
    this.open = true            // when false no more entries are accepted


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
