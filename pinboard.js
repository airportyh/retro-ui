module.exports = Pinboard

var assert = require('assert')
var is = require('is-type')
var Canvas = require('./canvas')
var getter = require('./define_getter')

function Pinboard(){
  this.children = []
  this.positions = []
}

var proto = Pinboard.prototype

proto.add = function(child, position){
  assert(is.number(position.col))
  assert(is.number(position.row))
  this.children.push(child)
  this.positions.push(position)
}

proto.render = function(canvas){
  for (var i = 0; i < this.children.length; i++){
    var child = this.children[i]
    var pos = this.positions[i]
    var childCanvas = new Canvas(canvas, pos)
    child.render(childCanvas)
  }
}

getter(proto, 'width', function(){
  var children = this.children
  return this.positions.reduce(function(curr, pos, idx){
    return Math.max(curr, pos.col + children[idx].width)
  }, 0)
})

getter(proto, 'height', function(){
  var children = this.children
  return this.positions.reduce(function(curr, pos, idx){
    return Math.max(curr, pos.row + children[idx].height)
  }, 0)
})