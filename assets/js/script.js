let images = [];
let currentIndex = 0;

function openImageBrowser(event, index) {
	event.preventDefault();
	
	const overlay = document.getElementById('gallery-overlay');

	images = JSON.parse(event.target.getAttribute('data-src'));
	currentIndex = index;
	displayImage(currentIndex);

	overlay.style.display = 'block';
	document.body.classList.add('overlay-active');
}

function closeImageBrowser(event) {
	event.preventDefault();
	
	const overlay = document.getElementById('gallery-overlay');
	
	overlay.style.display = 'none';
	document.body.classList.remove('overlay-active');
}

function displayImage(index) {
	const image = document.getElementById('gallery-image');
	const counter = document.getElementById('gallery-counter');
	
	image.src = images[index];
	counter.textContent = (index + 1) + '/' + images.length;
}

function navigateImage(event, offset) {
	event.preventDefault();
	
	currentIndex += offset;
	
	if (currentIndex < 0) {
		currentIndex = images.length - 1;
	} else if (currentIndex >= images.length) {
		currentIndex = 0;
	}
	
	displayImage(currentIndex);
}
