// JavaScript functionality for the portfolio website

// Example function to display current date and time
function displayCurrentDateTime() {
    const now = new Date();
    const dateTimeString = now.toISOString().replace('T', ' ').substring(0, 19);
    console.log('Current Date and Time (UTC):', dateTimeString);
}

displayCurrentDateTime();

// Further functionality can be added here.
