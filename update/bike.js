const bikeShops = [
    { name: "Bike Repair Hub", contact: "987-654-3210", distance: "1.5 km", rating: 4.7, hours: "9 AM - 6 PM" },
    { name: "Speedy Bike Garage", contact: "876-543-2109", distance: "2.8 km", rating: 4.6, hours: "10 AM - 7 PM" },
    { name: "Two Wheeler World", contact: "765-432-1098", distance: "3.5 km", rating: 4.5, hours: "8 AM - 5 PM" },
    { name: "MotoFix", contact: "654-321-0987", distance: "2.0 km", rating: 4.8, hours: "9 AM - 8 PM" }
];

const bikeParts = [
    "Chain", "Brake Lever", "Clutch", "Handlebar", "Suspension", 
    "Exhaust", "Fuel Tank", "Headlight", "Tire", "Engine Oil"
];

document.getElementById('bike-search-button').addEventListener('click', function() {
    const bikeModel = document.getElementById('bike-model').value;
    const partName = document.getElementById('bike-part').value;
    const location = document.getElementById('bike-location').value;

    if (bikeModel && partName) {
        displayBikeShops(location);
    } else {
        alert("Please enter the bike model and part name.");
    }
});

function displayBikeShops(location) {
    const bikeShopList = document.getElementById('bike-shop-list');
    bikeShopList.innerHTML = ""; // Clear previous results

    bikeShops.forEach(shop => {
        const bikeShopElement = document.createElement('div');
        bikeShopElement.className = "shop";
        bikeShopElement.innerHTML = `
            <h3>${shop.name}</h3>
            <p>Contact: ${shop.contact}</p>
            <p>Distance: ${shop.distance}</p>
            <p>Rating: ${'⭐'.repeat(Math.floor(shop.rating)) + '☆'.repeat(5 - Math.floor(shop.rating))}</p>
            <p>Hours: ${shop.hours}</p>
            <button onclick="viewBikeShopDetails('${shop.name}', '${shop.contact}', '${shop.distance}', '${shop.rating}', '${shop.hours}')">View Details</button>
        `;
        bikeShopList.appendChild(bikeShopElement);
    });
}

function viewBikeShopDetails(name, contact, distance, rating, hours) {
    localStorage.setItem('bikeShopName', name);
    localStorage.setItem('bikeShopContact', contact);
    localStorage.setItem('bikeShopDistance', distance);
    localStorage.setItem('bikeShopRating', rating);
    localStorage.setItem('bikeShopHours', hours);
    
    window.location.href = 'shop.html';
}

// Function to display bike part suggestions as the user types
function showBikeSuggestions() {
    const input = document.getElementById('bike-part').value.toLowerCase();
    const suggestionsContainer = document.getElementById('bike-suggestions-container');
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions

    if (input) {
        const filteredBikeParts = bikeParts.filter(part => part.toLowerCase().startsWith(input));
        filteredBikeParts.forEach(part => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.innerText = part;
            suggestionItem.addEventListener('click', () => {
                document.getElementById('bike-part').value = part;
                suggestionsContainer.innerHTML = ''; // Clear suggestions once selected
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
    }
}

function setCurrentBikeLocation() {
    document.getElementById('bike-location').value = "Current Location";
}





