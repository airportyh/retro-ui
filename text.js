module.exports = Text

function Text(text){
  this.text = text
  this.lines = text.split('\n')
  this.height = this.lines.length
  this.width = this.lines.reduce(function(maxLen, line){
    return Math.max(maxLen, line.length)
  }, 0)
}

Text.prototype = {
  render: function(screen){
    screen.position(1, 1)
    screen.write(this.text)
  }
}

