const items = [
    {
        item__name: "Iphone 16 pro coffee color",
        item_image: "img/iphone-16-pro-coffee-color.png"
    },
    {
        item__name: "Iphone 16 pro white color",
        item_image: "img/iphone-16-pro-white-color.png"
    },
    {
        item__name: "Iphone 16 pro black color",
        item_image: "img/iphone-16-promax-black-color.png"
    },
    {
        item__name: "IPad air gray color",
        item_image: "img/ipad-air-gray-color.png"
    },
    {
        item__name: "IPad air pink color",
        item_image: "img/ipad-air-pink-color.png"
    },
    {
        item__name: "Macbook pro gray color",
        item_image: "img/macbook-pro-gray-color.png"
    }
];

// Get the container where the items will be displayed
const itemsContainer = document.querySelector('.items-container');

// Get the notification element
let notification = document.querySelector(".notification");

// Initialize the notification count
let notificationCount = 0;

// Function to create the item elements and append them to the container
function displayItems() {
    items.forEach(item => {
        // Create the item div
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        // Create the image element
        let imgElement = document.createElement('img');
        imgElement.src = item.item_image;
        imgElement.alt = item.item__name;

        // Create the description div
        let descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('item__description');

        // Create the name paragraph
        let nameParagraph = document.createElement('p');
        nameParagraph.classList.add('item__name');
        nameParagraph.textContent = item.item__name;

        // Create the add to cart button
        let addButton = document.createElement('button');
        addButton.classList.add('btn_add');
        addButton.textContent = '+ Add to cart';

        // Append the name paragraph and button to the description div
        descriptionDiv.appendChild(nameParagraph);
        descriptionDiv.appendChild(addButton);

        // Append the image and description to the item div
        itemDiv.appendChild(imgElement);
        itemDiv.appendChild(descriptionDiv);

        // Append the item div to the container
        itemsContainer.appendChild(itemDiv);
    });

    // After all items are displayed, add event listeners to the buttons
    addEventListenersToButtons();
}

// Function to add event listeners to the dynamically created buttons
const selectedItems = []; // Array to hold selected items

function addEventListenersToButtons() {
    let addBtns = document.querySelectorAll(".btn_add");

    addBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            notificationCount += 1;

            const item = items[index];
            const existingItem = selectedItems.find(i => i.item__name === item.item__name);

            if (existingItem) {
                // Increase quantity if the item already exists
                existingItem.quantity += 1;
            } else {
                // Add new item with quantity
                selectedItems.push({ ...item, quantity: 1 });
            }

            // Update the notification display
            notification.innerHTML = notificationCount > 10 ? "10+" : notificationCount;

            // Save selected items to session storage (optional, if you want to keep data temporarily)
            sessionStorage.setItem('selectedItems', JSON.stringify(selectedItems));
        });
    });
}


// Call the displayItems function to render items
displayItems();




