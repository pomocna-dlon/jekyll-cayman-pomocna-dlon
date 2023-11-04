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
	
	const close_area = document.getElementById('gallery-close-area');
	
	if (event.target === close_area) {
		const overlay = document.getElementById('gallery-overlay');
		
		overlay.style.display = 'none';
		document.body.classList.remove('overlay-active');
	}
}

function displayImage(index) {
	const image = document.getElementById('gallery-image');
	const counter = document.getElementById('gallery-counter');
	
	image.src = images[index][0];
	
	counterText = (index + 1) + '/' + images.length;
	
	if (images[index][1].length > 0) {
		counterText += " | " + images[index][1];
	}
	
	counter.textContent = counterText;
}

function navigateImage(event, offset) {
	event.preventDefault();
	
	const next_area = document.getElementById('gallery-next-area');
	const prev_area = document.getElementById('gallery-prev-area');
	
	if ((event.target === next_area) || (event.target === prev_area)) {
		currentIndex += offset;
		
		if (currentIndex < 0) {
			currentIndex = images.length - 1;
		} else if (currentIndex >= images.length) {
			currentIndex = 0;
		}
		
		displayImage(currentIndex);
	}
}
