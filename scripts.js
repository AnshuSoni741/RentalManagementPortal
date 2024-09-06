document.addEventListener("DOMContentLoaded", function() {
    // Set default active tab
    openTab('home');
});

function openTab(tabId) {
    // Hide all tab content
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab content
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');

    // Set the active tab button
    const activeButton = [...tabButtons].find(button => button.textContent.toLowerCase().includes(tabId.replace('-', ' ')));
    if (activeButton) {
        activeButton.classList.add('active');
    }
}


// Function to handle tab switching
// function openTab(tabId) {
//     const tabContents = document.querySelectorAll('.tab-content');
//     tabContents.forEach(tab => {
//         if (tab.id === tabId) {
//             tab.style.display = 'block';
//         } else {
//             tab.style.display = 'none';
//         }
//     });
// }

// Attach event listeners to the form
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.querySelector('.registration-form');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            // Collect the form data
            const formData = new FormData(registrationForm);

            // Print each form field to the console
            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            // You could also handle the form data here (e.g., send it to a server)
        });
    }

    // Default to showing the 'home' tab on page load
    openTab('home');
});
