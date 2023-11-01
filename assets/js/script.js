document.querySelectorAll('.loadImages').forEach(function(link) {
  link.addEventListener('click', function() {
    var container = this.closest('.centerImgs');
    var images = container.querySelectorAll('a img[data-src]');

    images.forEach(function(image) {
      image.setAttribute('src', image.getAttribute('data-src'));
      image.removeAttribute('data-src');
    });
  });
});
