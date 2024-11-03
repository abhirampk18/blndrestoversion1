document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    // Simple email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email is valid
    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block'; // Show error message
        emailInput.classList.add('is-invalid'); // Optionally add a Bootstrap class for styling
    } else {
        emailError.style.display = 'none'; // Hide error message
        emailInput.classList.remove('is-invalid'); // Remove invalid class

        // Here, you can proceed with form submission or further processing
        alert('Form submitted successfully!');
    }
});
