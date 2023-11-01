document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll('.loadImages').forEach(function(link) {
		link.addEventListener('click', function(event) {
			event.preventDefault();

			var container = this.nextAll('.centerImgs:first');
			var images = container.querySelectorAll('img[data-src]');

			images.forEach(function(image) {
				image.setAttribute('src', image.getAttribute('data-src'));
				image.removeAttribute('data-src');
			});
		});
	});
});
