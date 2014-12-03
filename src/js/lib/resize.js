'use strict'

var $ = require('jquery')
var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')

module.exports = function(img, width) {
  var $img = $(img)
  canvas.width = width = width || $img.width()
  var height = canvas.height = parseInt($img.height() / $img.width() * width, 10)

  ctx.drawImage(img, 0, 0, width, height)
  return canvas.toDataURL('image/jpeg')
}
