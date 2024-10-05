let currentIndex = 0;

function moveSlider(direction) {
    const cuisines = document.querySelectorAll('.cuisine');
    const totalCuisines = cuisines.length;

    currentIndex += direction;

    // Loop around if out of bounds
    if (currentIndex < 0) {
        currentIndex = totalCuisines - 1; // Go to last
    } else if (currentIndex >= totalCuisines) {
        currentIndex = 0; // Go back to first
    }

    updateSlider();
}

// Update the slider to show the current cuisine and highlight the active dot
function updateSlider() {
    const cuisines = document.querySelectorAll('.cuisine');
    const dots = document.querySelectorAll('.slider-dot');

    cuisines.forEach((cuisine, index) => {
        cuisine.style.display = (index === currentIndex) ? 'block' : 'none';
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
    updateSlider(); // Show the first cuisine
    createDots(); // Create navigation dots
});

// Show hover messages
document.querySelectorAll('.cuisine').forEach(cuisine => {
    const cuisineName = cuisine.dataset.name;
    const hoverMessage = cuisine.querySelector('.hover-message');

    cuisine.addEventListener('mouseover', function() {
        this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)'; // Add shadow on hover
        hoverMessage.textContent = `Explore the wonderful world of ${cuisineName}!`;
        hoverMessage.style.display = 'block'; // Show message
    });

    cuisine.addEventListener('mouseout', function() {
        this.style.boxShadow = 'none'; // Remove shadow when not hovering
        hoverMessage.style.display = 'none'; // Hide message
    });
});

// Create dots for slider navigation
function createDots() {
    const sliderDotsContainer = document.querySelector('.slider-dots');
    const cuisines = document.querySelectorAll('.cuisine');

    cuisines.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        sliderDotsContainer.appendChild(dot);
    });

    updateSlider(); // Initial update to highlight the active dot
}
