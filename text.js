module.exports = Text

var is = require('is-type')

function Text($1){
  if (is.string($1)){
    this.text = $1
  }else if (is.object($1)){
    this.text = $1.text || ''
  }
  this.lines = this.text.split('\n')
}

var proto = Text.prototype

proto.render = function(canvas){
  for (var i = 0; i < this.lines.length; i++){
    canvas.position(0, i)
    canvas.write(this.lines[i])
  }
}

Object.defineProperty(proto, 'height', {
  get: function(){
    return this.lines.length
  }
})

Object.defineProperty(proto, 'width', {
  get: function(){
    return this.lines.reduce(function(curr, line){
      return Math.max(line.length, curr)
    }, 0)
  }
})