module.exports = Border

var assert = require('assert')

function Border(child){
  this.child = child
  assert(child.width)
  assert(child.height)
  this.width = child.width + 2
  this.height = child.height + 2
}

Border.prototype = {
  render: function(screen){
    screen.position(1, 1)
    screen.write(Array(this.width + 1).join('*'))
    screen.position(1, this.height)
    screen.write(Array(this.width + 1).join('*'))
    this.child.render(screen)
  }
}