module.exports = Canvas

var assert = require('assert')
var is = require('is-type')

function Canvas(parent, options){
  assert(parent)
  assert(options)
  assert(is.number(options.col))
  assert(is.number(options.row))

  this.parent = parent
  this.col = options.col || 0
  this.row = options.row || 0
  this.width = options.width || process.stdin.columns
  this.height = options.height || process.stdin.rows
  this._position = {col: 0, row: 0}
}

Canvas.prototype = {
  position: function(col, row){
    this._position = {
      col: col,
      row: row
    }
  },
  write: function(str){
    var col = this.col + this._position.col
    var row = this.row + this._position.row
    this.parent.position(col, row)
    this.parent.write(str.substring(0, this.width))
  }
}