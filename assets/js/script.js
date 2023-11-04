let images = [];
let currentIndex = 0;

function openImageBrowser(event, index) {
	event.preventDefault();
	
	const overlay = document.getElementById('overlay');
	const image = document.getElementById('image');

	images = JSON.parse(event.target.getAttribute('data-src'));
	currentIndex = index;
	displayImage(currentIndex);

	overlay.style.display = 'block';
}

function closeImageBrowser(event) {
	event.preventDefault();
	const overlay = document.getElementById('overlay');
	overlay.style.display = 'none';
}

function displayImage(index) {
	const image = document.getElementById('image');
	image.src = images[index];
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
