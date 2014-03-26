module.exports = Row

var assert = require('assert')
var Canvas = require('./canvas')

function Row(options){
  options = options || {}
  this.gap = options.gap || 0
  this.children = []
}

Row.prototype = {
  add: function(child){
    this.children.push(child)
    this.calculateDimensions()
  },
  calculateDimensions: function(){
    var width = 0
    var height = 0
    for (var i = 0; i < this.children.length; i++){
      var child = this.children[i]
      assert(child.width)
      assert(child.height)
      var lastChild = i === this.children.length - 1
      width += child.width + (lastChild ? 0 : this.gap)
      height = Math.max(height, child.height)
    }
    this.width = width
    this.height = height
  },
  render: function(canvas){
    var colOffset = 0
    for (var i = 0; i < this.children.length; i++){
      var child = this.children[i]
      var childCanvas = new Canvas(canvas, {
        row: 0,
        col: colOffset
      })
      child.render(childCanvas)
      var lastChild = i === this.children.length - 1
      colOffset += child.width + (lastChild ? 0 : this.gap)
    }
  }
}