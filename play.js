var charm = require('charm')()
charm.pipe(process.stdout)
charm.reset()

var Text = require('./text')
var Canvas = require('./canvas')
var Stack = require('./stack')
var Pinboard = require('./pinboard')
var Border = require('./border')
var log = require('npmlog')
var fs = require('fs')
log.stream = fs.createWriteStream('play.log')
/*var stack = new Stack

stack.add(new Text({text: 'hello, world\nbear'}))
stack.add(new Text({text: 'hey there\nmom mom'}))
stack.add(new Text({text: 'kittens are great'}))

var canvas = new Canvas(charm, {col: 2, row: 2, width: 20})
stack.render(canvas)
*/
var window = new Stack

var board = new Pinboard
board.add(new Text('h'), {col: 0, row: 0})
board.add(new Text('e'), {col: 1, row: 1})
board.add(new Text('l'), {col: 2, row: 2})
board.add(new Text('l'), {col: 3, row: 3})
board.add(new Text('o'), {col: 4, row: 4})

var stack = new Stack
var line1 = new Text('hello, world\nbear')
var line2 = new Text('hey there\nmom mom')
var line3 = new Text('yo mama!')

stack.add(line1)
stack.add(line2)
stack.add(line3)

log.info('line1.width: ' + line1.width)
log.info('line2.width: ' + line2.width)
log.info('line3.width: ' + line3.width)

board.add(stack, {col: 0, row: 5})
log.info('stack.width: ' + stack.width)

log.info('board width: ' + board.width)
log.info('board height: ' + board.height)

var border = new Border(board)

window.add(border)

var canvas = new Canvas(charm, {col: 5, row: 2})
window.render(canvas)


setInterval(function(){}, 1000)