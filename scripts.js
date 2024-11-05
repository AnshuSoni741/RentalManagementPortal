document.addEventListener("DOMContentLoaded", function() {
    // Set default active tab
    openTab('home');
});


// tab button logic 1 non active
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
function openTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        if (tab.id === tabId) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
     // Remove active class from all tab buttons
     const tabButtons = document.querySelectorAll('.tab-button');
     tabButtons.forEach(button => {
         button.classList.remove('active');
     });

      // Set the active tab button
    const activeButton = [...tabButtons].find(button => button.textContent.toLowerCase().includes(tabId.replaceAll('-', ' ')));
    if (activeButton) {
        activeButton.classList.add('active');
    }


}



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
            document.getElementById('transactionType_sh').value = transactionType;
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
    document.getElementById('transactionType_sh').value = transactionType;

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

    let text = `<b>Transaction Type:</b> ${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}
    \n , <b>Tenant ID:</b> ${tenantId}
    \n , <b>Total Amount to be Paid:</b> $${totalAmount}`;
    // detailsElement.textContent = ` Transaction Type: ${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}
    // \n , Tenant ID: ${tenantId}
    // \n , Total Amount to be Paid: $${totalAmount}`;


    // detailsElement.textContent = text.innertext;
    detailsElement.innerHTML = text;
    
    document.getElementById('transactionStep2').style.display = 'none';
    document.getElementById('transactionDetails').style.display = 'block';
    document.getElementById('tenantId_sh').value=tenantId;
    
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


//bill forcasting
document.getElementById('forecastForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data

    let bill_type_array = document.getElementsByName('previous_bill_type');
    // console.log(bill_type_array); // all bill type print with their checked status
    let type_of_bill = ""; //initialization of bill type

    //getting selected mode in bill type forcasting wheather by bill amount or by unit
    for(let i=0; i<bill_type_array.length;i++){
        if(bill_type_array[i].checked){
            type_of_bill = bill_type_array[i].value;
        }
        console.log(bill_type_array[i].value);
    }

    console.log(type_of_bill);


    let previous_units = 0;
    let previousBill = 0;


    if(type_of_bill=="rupee"){
        previousBill = parseFloat(document.getElementById('previousBill').value);
        previous_units = previousBill/8;
    }else if(type_of_bill=="unit"){
        previous_units = parseFloat(document.getElementById('previousBill').value);
        previousBill = previous_units * 8;

    }
   
    const previousStartDate = new Date(document.getElementById('previousBillStartDate').value);
    const previousEndDate = new Date(document.getElementById('previousBillEndDate').value);
    const forecastStartDate = new Date(document.getElementById('forecastStartDate').value);
    const forecastEndDate = new Date(document.getElementById('forecastEndDate').value);
    
    // Calculate the number of days in previous period and forecast period
    const previousDays = (previousEndDate - previousStartDate) / (1000 * 60 * 60 * 24);
    const forecastDays = (forecastEndDate - forecastStartDate) / (1000 * 60 * 60 * 24);

    // Calculate forecasted bill (simple linear projection)
    const dailyRate = previousBill / previousDays;
    const forecastedBill = dailyRate * forecastDays;

    //calculation of forcasted units
    const daily_unit_Rate = previous_units / previousDays;
    const forecasted_unit_Bill = daily_unit_Rate * forecastDays;

    // Display forecasted bill
    // alert(`Forecasted Bill Amount: $${forecastedBill.toFixed(2)}`);
    let bill_lable = document.getElementById("forcastedbill");
    bill_lable.innerText = "forcasted bill amount : " + forecastedBill.toFixed(2)+" and units :"+ forecasted_unit_Bill.toFixed(2) ;


});

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
