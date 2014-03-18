module.exports = Stack

var Canvas = require('./canvas')

function Stack(options){
  options = options || {}
  this.width = options.width || process.stdout.columns
  this.height = options.height || process.stdout.rows
  this.children = []
  this.dimensions = []
}

Stack.prototype = {
  add: function(child){
    this.children.push(child)
    this.layout()
  },
  layout: function(){
    var heightSoFar  = 0
    this.dimensions = []
    for (var i = 0; i < this.children.length; i++){
      var child = this.children[i]
      var height = child.height || 1
      this.dimensions[i] = {
        col: 0,
        row: heightSoFar
      }
      heightSoFar += height
    }
  },
  render: function(parent){
    for (var i = 0; i < this.children.length; i++){
      var dim = this.dimensions[i]
      var canvas = new Canvas(parent, {
        col: dim.col,
        row: dim.row
      })
      var child = this.children[i]
      child.render(canvas)
    }
  }
}

