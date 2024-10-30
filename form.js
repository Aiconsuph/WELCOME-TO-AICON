
// FOR HEADER TIME JS
function updateClock() {
    const now = new Date();
    const optionsDate = { timeZone: 'Asia/Manila', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { timeZone: 'Asia/Manila', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' };

    // Format date and time separately
    const formattedDate = new Intl.DateTimeFormat('en-PH', optionsDate).format(now);
    const formattedTime = new Intl.DateTimeFormat('en-PH', optionsTime).format(now);

    // Update HTML elements
    document.getElementById('current-date').innerText = formattedDate;
    document.getElementById('current-time').innerText = formattedTime;
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the current date and time immediately















// FOR FORMS


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('newsletter-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        // Create a new FormData object to hold the form data
        const formData = new FormData(form);

        // Submit the form data using fetch
        fetch(form.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Disable cross-origin restrictions (Google Forms doesn't require a response)
        })
        .then(() => {
            // Redirect to the thank-you page after form submission
            window.location.href = "thankyou.html";
        })
        .catch(error => console.error('Error:', error));
    });
});
