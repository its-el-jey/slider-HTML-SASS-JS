"use strict";

var users = ['/images/image-tanya.jpg', '/images/image-john.jpg'];
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var gallery = document.querySelector('.gallery');
var index = 0;
next.addEventListener('click', function () {
  index++;

  if (index >= users.length) {
    index = 0;
  }

  gallery.src = users[index];
});