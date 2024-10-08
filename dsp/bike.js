const bikeShops = [
    { name: "The Bike Spot", contact: "123-456-7890", distance: "1.5 km", rating: 4.5, hours: "9 AM - 7 PM" },
    { name: "Rider's Haven", contact: "234-567-8901", distance: "2.0 km", rating: 4.7, hours: "10 AM - 6 PM" },
    { name: "Pedal Power", contact: "345-678-9012", distance: "3.2 km", rating: 4.6, hours: "8 AM - 5 PM" },
    { name: "Velo District", contact: "456-789-0123", distance: "1.2 km", rating: 4.8, hours: "9 AM - 8 PM" },
    { name: "Speedy Bikes", contact: "567-890-1234", distance: "2.5 km", rating: 4.9, hours: "10 AM - 7 PM" }
];

document.getElementById('bike-search-button').addEventListener('click', function() {
    const bikeModel = document.getElementById('bike-model').value;
    const partName = document.getElementById('bike-part').value;
    const location = document.getElementById('bike-location').value;

    if (bikeModel && partName) {
        // Display bike shops based on the entered details
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
            <p>Rating: ${shop.rating} ⭐</p>
            <p>Hours: ${shop.hours}</p>
            <button onclick="viewBikeShopDetails('${shop.name}', '${shop.contact}', '${shop.distance}', '${shop.rating}', '${shop.hours}')">View Details</button>
        `;
        bikeShopList.appendChild(bikeShopElement);
    });
}

function viewBikeShopDetails(name, contact, distance, rating, hours) {
    // Store shop details in local storage
    localStorage.setItem('shopName', name);
    localStorage.setItem('shopContact', contact);
    localStorage.setItem('shopDistance', distance);
    localStorage.setItem('shopRating', rating);
    localStorage.setItem('shopHours', hours);
    
    // Redirect to shop details page
    window.location.href = 'shop.html';
}

function setCurrentLocation() {
    // You can implement logic to fetch and set the user's current location
    document.getElementById('bike-location').value = "Current Location"; // For demo purposes
}







