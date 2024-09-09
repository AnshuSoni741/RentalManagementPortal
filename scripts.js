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




// tenant transaction script

function nextStep() {
    const transactionType = document.getElementById('transactionType').value;
    
    if (transactionType === '') {
        alert('Please select a transaction type.');
        return;
    }

    // if( document.getElementById('transactionStep2').style.display == 'block'){
    //     document.getElementById('transactionStep2').style.display = 'none';
    //     document.getElementById('transactionStep1').style.display = 'block';
    // }
    // else if( document.getElementById('transactionDetails').style.display == 'block'){
    //     document.getElementById('transactionDetails').style.display = 'none';
    //     document.getElementById('transactionStep2').style.display = 'block';
    // }
    document.getElementById('transactionType').value = 
    document.getElementById('transactionStep1').style.display = 'none';
    document.getElementById('transactionStep2').style.display = 'block';
    
}

function backStep() {

    if( document.getElementById('transactionStep2').style.display == 'block'){
        document.getElementById('transactionStep2').style.display = 'none';
        document.getElementById('transactionStep1').style.display = 'block';
    }
    else if( document.getElementById('transactionDetails').style.display == 'block'){
        document.getElementById('transactionDetails').style.display = 'none';
        document.getElementById('transactionStep2').style.display = 'block';
    }

    }
function showDetails() {
    const transactionType = document.getElementById('transactionType').value;
    const tenantId = document.getElementById('tenantId').value;
    const detailsElement = document.getElementById('details');

    if (tenantId === '') {
        alert('Please enter Tenant ID.');
        return;
    }

    let totalAmount = 0;
    switch (transactionType) {
        case 'rent':
            totalAmount = 1000; // Example amount
            break;
        case 'electricity':
            totalAmount = 150; // Example amount
            break;
        case 'water':
            totalAmount = 75; // Example amount
            break;
        case 'partialRent':
            totalAmount = 500; // Example amount
            break;
        default:
            totalAmount = 0;
            break;
    }

    let text = ` <b>Transaction Type:<b> ${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}
    \n , <b>Tenant ID:</b> ${tenantId}
    \n , <b>Total Amount to be Paid:</b> $${totalAmount}`;
    // detailsElement.textContent = ` Transaction Type: ${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}
    // \n , Tenant ID: ${tenantId}
    // \n , Total Amount to be Paid: $${totalAmount}`;


    detailsElement.textContent = text.innertext;
    
    document.getElementById('transactionStep2').style.display = 'none';
    document.getElementById('transactionDetails').style.display = 'block';

}

function completeTransaction() {
    const amountToPay = document.getElementById('amountToPay').value;
    const transactionType = document.getElementById('transactionType').value;
    const messageElement = document.getElementById('message');

    if (amountToPay === '' || isNaN(amountToPay) || amountToPay <= 0) {
        messageElement.textContent = 'Please enter a valid amount.';
        messageElement.style.color = 'red';
        return;
    }

    // Handle the transaction logic here (e.g., send to server or process)
    messageElement.textContent = `Transaction Completed: ${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)} of $${amountToPay}`;
    messageElement.style.color = 'green';

    // Clear form
    document.getElementById('transactionForm').reset();
    document.getElementById('transactionStep1').style.display = 'block';
    document.getElementById('transactionStep2').style.display = 'none';
    document.getElementById('transactionDetails').style.display = 'none';
}


// function submitTransaction() {
//     const transactionType = document.getElementById('transactionType').value;
//     const amount = document.getElementById('amount').value;
//     const messageElement = document.getElementById('message');

//     if (transactionType === '' || amount === '') {
//         messageElement.textContent = 'Please select a transaction type and enter an amount.';
//         messageElement.style.color = 'red';
//         return;
//     }


//     // Handle the transaction logic here (e.g., send to server or process)
//     messageElement.textContent = `Transaction Submitted: ${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)} of $${amount}`;
//     messageElement.style.color = 'green';

//     // Clear form
//     document.getElementById('transactionForm').reset();
// }
