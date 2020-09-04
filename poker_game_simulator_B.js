

// Kreiere ein Objekt, dass Spielserien verwaltet (genauer: eine konkrete Spielserie):
// "sitandgo"  "sitandgo_multi"  "sitandgo_newusers_accept"   "sitandgo_newusers_accept"
var pgs = new PGAME_SERIES("hello  ==== " + new Date() + " ==== " )
 l(pgs.opening_message, pgs)
// SERIE ~= TISCH / TABLE
// ??: Eine Serie enthält noch etwas mehr "Environment" für den "Table"
// Protokollierung von User-Zugängen und -Abgängen?
// Protokollierung von Gewinnen und Verlusten?
//
// Spielsuche nach Stackgröße
// Statistik-Funktionen (nach Spieler, nach Zeit, nach Tisch, nach Teilnehmer bei __showdown__)
//
// .active_players[]
// .maxplayers_on_table
// .accept_new_players
// .max_players
// .total_registered_players
// .TOURNAMENT
// .close_table()
// .close() ??
// .save()
// Die Serie kann immer auch als "Tournament" gewertet werden.
// Spielregeln für den Table
// Was braucht es außer dem Array noch?

// Kreiere ein "game" und füge es der Serie hinzu:
var game = new POKERGAME()
pgs.games.push(game)

// Kreiere Spieler:
var p1 = new PLAYER("aaa", game)
var p2 = new PLAYER("bbb", game)
var p3 = new PLAYER("ccc", game)

// Kreiere Tournament (+ Spielregeln):
var T1 = new TOURNAMENT("dummy_Tournament", [p1, p2, p3])
