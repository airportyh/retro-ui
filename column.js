module.exports = Column

var assert = require('assert')
var Canvas = require('./canvas')

function Column(options){
  options = options || {}
  this.gap = options.gap || 0
  this.children = []
}

Column.prototype = {
  add: function(child){
    this.children.push(child)
    this.calculateDimensions()
  },
  calculateDimensions: function(){
    var height = 0
    var width = 0
    for (var i = 0; i < this.children.length; i++){
      var child = this.children[i]
      assert(child.height)
      assert(child.width)
      var lastChild = i === this.children.length - 1
      height += child.height + (lastChild ? 0 : this.gap)
      width = Math.max(child.width, width)
    }
    this.height = height
    this.width = width
  },
  render: function(canvas){
    var rowOffset = 0
    for (var i = 0; i < this.children.length; i++){
      var child = this.children[i]
      assert(child.height)
      assert(child.width)
      var childCanvas = new Canvas(canvas, {
        col: 0,
        row: rowOffset
      })
      child.render(childCanvas)
      rowOffset += child.height + this.gap
    }
  }
}

