document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll('.loadImages').forEach(function(link) {
		link.addEventListener('click', function(event) {
			event.preventDefault();

			var container = this.closest('.archiveItem');
			var images = container.querySelectorAll('img[data-src]');
			var hiddenImagesContainer = container.querySelector('.centerImgsEmpty');
			
			hiddenImagesContainer.classList.add('centerImgs');
			hiddenImagesContainer.classList.remove('centerImgsEmpty');
			
			images.forEach(function(image) {
				image.setAttribute('src', image.getAttribute('data-src'));
				image.removeAttribute('data-src');
			});
			
			this.remove();
		});
	});
});
