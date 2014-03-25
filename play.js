var charm = require('charm')()
charm.pipe(process.stdout)
charm.reset()

var Text = require('./text')
var Border = require('./border')

var text = new Text('Hello, \nworld!')
var border = new Border(text)

border.render(charm)

setInterval(function(){}, 1000)