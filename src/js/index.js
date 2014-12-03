'use strict'

var $ = require('jquery')
var resize = require('./lib/resize')
var zip = new (require('jszip'))

var tiny = ''
var medium = ''
var full = ''

$(function() {
  var $body = $('body')
  var $preview = $('#preview')
  var $purchase = $('#purchase')

  var img = new Image
  img.crossOrigin = 'anonymous'
  img.src = require('./lib/randomcoolimage')()

  $(img)
  .css({
    position: 'absolute',
    display: 'none',
    top: '-100000000000px',
    left: '-100000000000px'
  })
  .load(function() {
    var preview = new Image
    preview.src = tiny = resize(img, 250)
    medium = resize(img, 1024)
    full = resize(img)
    $preview
      .text('')
      .prepend(preview)
    $(this).remove()
    $purchase.removeAttr('disabled')
  })
  .appendTo($body)


  $purchase.click(function() {
    while(prompt('gimme da code') !== 'fhsgmbh') {}

    var folder = zip.folder('images')
    folder.file('tiny.jpg', tiny.split('base64,')[1], {base64: true})
    .file('medium.jpg', medium.split('base64,')[1], {base64: true})
    .file('full.jpg', full.split('base64,')[1], {base64: true})

    location.href="data:application/zip;base64," + zip.generate({type:"base64"});
  })
})
