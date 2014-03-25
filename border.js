module.exports = Border

var assert = require('assert')
var Canvas = require('./canvas')

function Border(child){
  this.child = child
  assert(child.width)
  assert(child.height)
  this.width = child.width + 2
  this.height = child.height + 2
}

Border.prototype = {
  render: function(canvas){
    
    canvas.position(1, 1)
    canvas.write(Array(this.width + 1).join('*'))
    for (var i = 1; i < this.height - 1; i++){
      canvas.position(1, 1 + i)
      canvas.write('*')
      canvas.position(this.width, 1 + i)
      canvas.write('*')
    }
    canvas.position(1, this.height)
    canvas.write(Array(this.width + 1).join('*'))
    
    var childCanvas = new Canvas(canvas, {
      col: 1,
      row: 1
    })

    this.child.render(childCanvas)
  }
}