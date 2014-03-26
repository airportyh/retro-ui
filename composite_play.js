var charm = require('charm')()
charm.pipe(process.stdout)
charm.reset()

var Text = require('./text')
var Border = require('./border')
var Column = require('./column')
var Row = require('./row')

var row = new Row
row.add(makeTab())
row.add(makeTab())
row.add(makeTab())
row.add(makeTab())

row.render(charm)

setInterval(function(){}, 1000)

function makeTab(){
  var column = new Column

  var browser = new Text('Chrome 24')
  column.add(browser)

  var row = new Row({gap: 1})
  var text = new Text('4/7')
  var text2 = new Text('/')
  row.add(text)
  row.add(text2)
  column.add(row)

  var border = new Border(column, {
    xpadding: 1
  })
  return border
}