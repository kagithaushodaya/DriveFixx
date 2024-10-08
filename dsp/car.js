const carShops = [
    { name: "Luxury Car Centre", contact: "123-456-7890", distance: "1.2 km", rating: 4.8, hours: "9 AM - 7 PM Mon-Sat, Closed on Sun" },
    { name: "Fast Lane Autos", contact: "234-567-8901", distance: "2.5 km", rating: 4.5, hours: "10 AM - 6 PM Mon-Sat, Closed on Sun" },
    { name: "Car Parts Depot", contact: "345-678-9012", distance: "3.0 km", rating: 4.6, hours: "8 AM - 5 PM Mon-Sat, Closed on Sun" },
    { name: "AutoHub", contact: "456-789-0123", distance: "1.8 km", rating: 4.7, hours: "9 AM - 8 PM Mon-Sun" }
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
    document.getElementById('car-location').value = "Current Location"; // For demo purposes
}


