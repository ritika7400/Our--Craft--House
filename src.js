<script>
    // Function to change the color of the element
    function changeColor() {
      const element = document.querySelector('.color-changing-element');
      const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

      // Get the current background color of the element
      const currentColor = element.style.backgroundColor;

      // Find the index of the current color in the colors array
      const currentIndex = colors.indexOf(currentColor);

      // Calculate the index of the next color in the colors array
      const nextIndex = (currentIndex + 1) % colors.length;

      // Set the background color of the element to the next color
      element.style.backgroundColor = colors[nextIndex];
    }
  
  function validateLogin() {
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace these with your actual login credentials
    const validUsername = 'user123';
    const validPassword = 'pass456';

    // Check if the entered credentials match the valid ones
    if (username === validUsername && password === validPassword) {
      alert('Login successful!'); // Replace with your desired action after successful login
      return true; // Allow form submission
    } else {
      alert('Invalid username or password. Please try again.');
      return false; // Prevent form submission
    }
  }
  let wishlistItems = []; // Array to store wishlist items

// Function to add an item to the wishlist
function addItem() {
  const itemInput = document.getElementById('itemInput');
  const itemName = itemInput.value.trim();

  if (itemName !== '') {
    // Add the item to the wishlist array
    wishlistItems.push(itemName);

    // Clear the input field
    itemInput.value = '';

    // Refresh the wishlist display
    displayWishlist();
  }
}

// Function to remove an item from the wishlist
function removeItem(index) {
  wishlistItems.splice(index, 1); // Remove the item at the given index
  displayWishlist(); // Refresh the wishlist display
}

// Function to display the wishlist
function displayWishlist() {
  const wishlist = document.getElementById('wishlist');
  wishlist.innerHTML = ''; // Clear the current list

  wishlistItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
      removeItem(index);
    };
    
    listItem.appendChild(removeButton);
    wishlist.appendChild(listItem);
  });
}
let contacts = []; // Array to store contacts

    // Function to add a contact
    function addContact() {
      const nameInput = document.getElementById('nameInput');
      const emailInput = document.getElementById('emailInput');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();

      if (name !== '' && email !== '') {
        // Create a contact object
        const contact = {
          name: name,
          email: email,
        };

        // Add the contact to the contacts array
        contacts.push(contact);

        // Clear the input fields
        nameInput.value = '';
        emailInput.value = '';

        // Refresh the contact list
        displayContacts();
      }
    }

    // Function to delete a contact
    function deleteContact(index) {
      contacts.splice(index, 1); // Remove the contact at the given index
      displayContacts(); // Refresh the contact list
    }

    // Function to display the contacts
    function displayContacts() {
      const contactList = document.getElementById('contactList');
      contactList.innerHTML = ''; // Clear the current list

      contacts.forEach((contact, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${contact.name}, Email: ${contact.email}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
          deleteContact(index);
        };

        listItem.appendChild(deleteButton);
        contactList.appendChild(listItem);
      });
    }
  </script>
















