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
