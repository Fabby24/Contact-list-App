// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Fetch existing contacts when page loads
  fetchContacts();

  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    
    // Validate inputs
    if (!name || !phone || !email) {
      alert('Please fill out all fields');
      return;
    }
    
    // Create contact object
    const contact = {
      name: name,
      phone: phone,
      email: email
    };
    
    // Send data to API
    fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      
      // Clear the form inputs
      document.getElementById('name').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('email').value = '';
      
      // Refresh contact list
      fetchContacts();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to add contact');
    });
  });
});

// Function to fetch and display all contacts
function fetchContacts() {
  fetch('/api/contacts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(contacts => {
      const contactList = document.getElementById('contactList');
      contactList.innerHTML = ''; // Clear current list
      
      if (contacts.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = '<td colspan="3" class="empty-message">No contacts found. Add a contact to get started.</td>';
        contactList.appendChild(emptyRow);
        return;
      }
      
      contacts.forEach((contact) => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = contact.name;
        
        const phoneCell = document.createElement('td');
        phoneCell.textContent = contact.phone;
        
        const emailCell = document.createElement('td');
        emailCell.textContent = contact.email;
        
        row.appendChild(nameCell);
        row.appendChild(phoneCell);
        row.appendChild(emailCell);
        
        contactList.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error fetching contacts:', error);
      const contactList = document.getElementById('contactList');
      contactList.innerHTML = '<tr><td colspan="3" class="empty-message">Error loading contacts. Please try again later.</td></tr>';
    });
}