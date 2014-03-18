module.exports = Border

var Canvas = require('./canvas')

var Chars = {
  horizontal: '\u2501',
  vertical: '\u2503',
  topLeft: '\u250f',
  topRight: '\u2513',
  bottomLeft: '\u2517',
  bottomRight: '\u251b'
}

function Border(widget){
  this.widget = widget
}

Border.prototype = {
  render: function(canvas){
    this.widget.render(new Canvas(canvas, {
      col: 1,
      row: 1
    }))
    canvas.position(0, 0)
    canvas.write(Chars.topLeft)
    canvas.position(1, 0)
    canvas.write(Array(this.widget.width + 1).join(Chars.horizontal))
    canvas.position(this.widget.width + 1, 0)
    canvas.write(Chars.topRight)
    for (var i = 1; i < this.widget.height + 1; i++){
      canvas.position(0, i)
      canvas.write(Chars.vertical)
      canvas.position(this.widget.width + 1, i)
      canvas.write(Chars.vertical)
    }
    canvas.position(0, this.widget.height + 1)
    canvas.write(Chars.bottomLeft)
    canvas.position(1, this.widget.height + 1)
    canvas.write(Array(this.widget.width + 1).join(Chars.horizontal))
    canvas.position(this.widget.width + 1, this.widget.height + 1)
    canvas.write(Chars.bottomRight)
  }
}