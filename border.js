module.exports = Border

var assert = require('assert')
var Canvas = require('./canvas')

function Border(child, options){
  options = options || {}
  this.child = child
  assert(child.width)
  assert(child.height)
  this.xpadding = options.xpadding || 0
  this.ypadding = options.ypadding || 0
  this.width = child.width + (2 * this.xpadding) + 2
  this.height = child.height + (2 * this.ypadding) + 2
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
      col: 1 + this.xpadding,
      row: 1 + this.ypadding
    })

    this.child.render(childCanvas)
  }
}