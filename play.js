var charm = require('charm')()
charm.pipe(process.stdout)
charm.reset()

var Text = require('./text')
var Border = require('./border')
var Column = require('./column')

var text = new Text('Hello, \nworld!')
var border = new Border(text)
var column = new Column()
column.add(border)

var text2 = new Text('Where art thou?')
column.add(text2)

column.render(charm)

setInterval(function(){}, 1000)