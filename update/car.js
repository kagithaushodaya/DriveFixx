const carShops = [
    { name: "Luxury Car Centre", contact: "123-456-7890", distance: "1.2 km", rating: 4.8, hours: "9 AM - 7 PM" },
    { name: "Fast Lane Autos", contact: "234-567-8901", distance: "2.5 km", rating: 4.5, hours: "10 AM - 6 PM" },
    { name: "Car Parts Depot", contact: "345-678-9012", distance: "3.0 km", rating: 4.6, hours: "8 AM - 5 PM" },
    { name: "AutoHub", contact: "456-789-0123", distance: "1.8 km", rating: 4.7, hours: "9 AM - 8 PM" }
];

const carParts = [
    "Battery", "Brake Pads", "Oil Filter", "Alternator", "Radiator", 
    "Spark Plug", "Tire", "Headlight", "Windshield Wipers", "Exhaust"
];

document.getElementById('car-search-button').addEventListener('click', function() {
    const carModel = document.getElementById('car-model').value;
    const partName = document.getElementById('car-part').value;
    const location = document.getElementById('car-location').value;

    if (carModel && partName) {
        displayCarShops(location);
    } else {
        alert("Please enter the car model and part name.");
    }
});

function displayCarShops(location) {
    const carShopList = document.getElementById('car-shop-list');
    carShopList.innerHTML = ""; // Clear previous results

    carShops.forEach(shop => {
        const carShopElement = document.createElement('div');
        carShopElement.className = "shop";
        carShopElement.innerHTML = `
            <h3>${shop.name}</h3>
            <p>Contact: ${shop.contact}</p>
            <p>Distance: ${shop.distance}</p>
            <p>Rating: ${'⭐'.repeat(Math.floor(shop.rating)) + '☆'.repeat(5 - Math.floor(shop.rating))}</p>
            <p>Hours: ${shop.hours}</p>
            <button onclick="viewCarShopDetails('${shop.name}', '${shop.contact}', '${shop.distance}', '${shop.rating}', '${shop.hours}')">View Details</button>
        `;
        carShopList.appendChild(carShopElement);
    });
}

function viewCarShopDetails(name, contact, distance, rating, hours) {
    localStorage.setItem('shopName', name);
    localStorage.setItem('shopContact', contact);
    localStorage.setItem('shopDistance', distance);
    localStorage.setItem('shopRating', rating);
    localStorage.setItem('shopHours', hours);
    
    window.location.href = 'shop.html';
}

// Function to display suggestions as the user types
function showSuggestions() {
    const input = document.getElementById('car-part').value.toLowerCase();
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions

    if (input) {
        const filteredParts = carParts.filter(part => part.toLowerCase().startsWith(input));
        filteredParts.forEach(part => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.innerText = part;
            suggestionItem.addEventListener('click', () => {
                document.getElementById('car-part').value = part;
                suggestionsContainer.innerHTML = ''; // Clear suggestions once selected
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
    }
}

function setCurrentLocation() {
    document.getElementById('car-location').value = "Current Location";
}
