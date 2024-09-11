

//JAVASCRIPT FOR SERVICES PAGE

// JavaScript for image slider functionality

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slider = document.querySelector('.slider');
    const slides = Array.from(slider.children);
    const totalSlides = slides.length;
    let currentIndex = 0;
    let autoSlideInterval;

    // Function to update the slider position
    function updateSlider() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        const offset = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }

    // Function to go to the next slide
    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    // Function to go to the previous slide
    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Event listener for next button
    nextButton.addEventListener('click', function () {
        goToNextSlide();
        resetAutoSlide();
    });

    // Event listener for previous button
    prevButton.addEventListener('click', function () {
        goToPrevSlide();
        resetAutoSlide();
    });

    // Function to start the automatic sliding
    function startAutoSlide() {
        autoSlideInterval = setInterval(goToNextSlide, 10000); // Change slide every 3 seconds
    }

    // Function to reset the automatic sliding
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Initialize slider position and start automatic sliding
    updateSlider();
    startAutoSlide();
});

//for heavy equipment

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev1');
    const nextButton = document.querySelector('.next1');
    const slider = document.querySelector('.equipment-slider-wrapper');
    const slides = Array.from(slider.children);
    const totalSlides = slides.length;
    const cardsPerSlide = 4; // Number of cards per slide
    const slideWidth = 100; // Each slide should take 100% width of the slider
    let currentIndex = 0;

    // Set the width of each slide
    slides.forEach(slide => {
        slide.style.flex = `1 0 ${slideWidth}%`;
    });

    // Function to update the slider position
    function updateSlider() {
        const offset = -currentIndex * slideWidth; // Move to the correct slide
        slider.style.transform = `translateX(${offset}%)`;
    }

    // Function to go to the next slide
    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    // Function to go to the previous slide
    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Event listener for next button
    nextButton.addEventListener('click', function () {
        goToNextSlide();
    });

    // Event listener for previous button
    prevButton.addEventListener('click', function () {
        goToPrevSlide();
    });

    // Initialize slider position
    updateSlider();

    // Automatically slide every 5 seconds
    setInterval(goToNextSlide, 10000); // 5000 milliseconds = 5 seconds
});


//for list of products js


document.addEventListener('DOMContentLoaded', function() {
    // Handle click on category headers (h3) to toggle the list
    const categoryHeaders = document.querySelectorAll('.category-header');
    
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const categoryCard = this.closest('.category-card');
            const categoryList = this.nextElementSibling; // Get the next sibling (category-list div)
            
            // Toggle display for clicked category
            if (categoryList.style.display === 'block') {
                categoryList.style.display = 'none';  // Hide the list if already visible
                categoryCard.classList.remove('expanded'); // Remove expanded class from clicked card
            } else {
                categoryList.style.display = 'block'; // Show the list on click
                categoryCard.classList.add('expanded'); // Add expanded class to clicked card
            }

            // Ensure other categories' lists are hidden and not expanded
            categoryHeaders.forEach(h => {
                const otherCard = h.closest('.category-card');
                if (h !== header) {
                    h.nextElementSibling.style.display = 'none'; // Hide other lists
                    otherCard.classList.remove('expanded'); // Remove expanded class from other cards
                }
            });
        });
    });

    // Handle click on category items to toggle individual descriptions
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const description = this.querySelector('.category-description');
            
            if (description.style.display === 'block') {
                description.style.display = 'none';  // Hide if already visible
            } else {
                description.style.display = 'block'; // Show on click
            }
        });
    });
});

//bahrain services

document.addEventListener('DOMContentLoaded', function () {
    const backButton = document.querySelector('.back');
    const forwardButton = document.querySelector('.forward');
    const sliderContainer = document.querySelector('.bahrain-slider-container');
    const slides = Array.from(sliderContainer.children);
    const totalSlides = slides.length;
    let currentSlide = 0;

    // Function to update the slider position
    function updateSlider() {
        const cardsInCurrentSlide = currentSlide === 0 ? 5 : 4; // Adjust based on the slide
        const slideWidth = 100 / cardsInCurrentSlide;
        sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Function to go to the next slide
    function goToNextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; // Reset to the first slide when reaching the last one
        }
        updateSlider();
    }

    // Function to go to the previous slide
    function goToPrevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1; // Go to the last slide if at the first one
        }
        updateSlider();
    }

    // Event listener for the forward button
    forwardButton.addEventListener('click', function () {
        goToNextSlide();
    });

    // Event listener for the back button
    backButton.addEventListener('click', function () {
        goToPrevSlide();
    });

    // Initialize slider position
    updateSlider();
});



//FOR PROJECTS PAGE JAVASCRIPT

//for completed proj ph
let currentSlide = 0;
const slides = document.querySelectorAll('.projects-slide');
const totalSlides = slides.length;

document.querySelector('.next-slide').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
});

document.querySelector('.prev-slide').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
});

function updateSlidePosition() {
    const slider = document.querySelector('.projects-slider');
    const slideWidth = document.querySelector('.projects-container').clientWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

//for completed proj bahrain
document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.bahrain-projects-slide');
    const totalSlides = slides.length;

    function updateSlidePosition() {
        const slider = document.querySelector('.bahrain-projects-slider');
        const slideWidth = document.querySelector('.bahrain-projects-container').clientWidth;
        console.log(`Current slide: ${currentSlide}, Slide width: ${slideWidth}px`);
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    document.querySelector('.bahrain-project-next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    });

    document.querySelector('.bahrain-project-prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });

    updateSlidePosition(); // Initial call to set the correct slide position
});

