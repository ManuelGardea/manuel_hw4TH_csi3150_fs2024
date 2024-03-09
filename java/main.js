// main.js

// This function creates a car listing element
function createCarElement(car) {
    // Create the car card container
    var carElement = document.createElement('div');
    carElement.className = 'car-card';

    // Create the image element
    var img = document.createElement('img');
    img.src = `../images/${car.make}-${car.model}.jpg`; // Set the image source
    img.alt = `${car.make} ${car.model}`; // Set the alt text for accessibility
    carElement.appendChild(img); // Append the image to the car card

    // Create and append other car details
    carElement.innerHTML += `
        <h2>${car.make} ${car.model}</h2>
        <p>Year: ${car.year}</p>
        <p>Mileage: ${car.mileage}</p>
        <p>Price: $${car.price}</p>
        <p>Color: ${car.color}</p>
        <p>Gas Mileage: ${car.gasMileage}</p>
    `;

    return carElement;
}

// This function updates the car listings based on the filters
function updateCarListings() {
    var minYear = document.getElementById('min-year').value;
    var maxYear = document.getElementById('max-year').value;
    var make = $('#make').val(); // Retrieve selected makes using jQuery
    var maxMileage = document.getElementById('max-mileage').value;
    var minPrice = document.getElementById('min-price').value;
    var maxPrice = document.getElementById('max-price').value;
    var color = $('#color').val(); // Retrieve selected colors using jQuery

    var carList = document.getElementById('car-list');
    var noResults = document.getElementById('no-results');
    
    carList.innerHTML = '';
    noResults.style.display = 'none';

    var foundCars = false;

    for (var i = 0; i < usedCars.length; i++) {
        var car = usedCars[i];

        // Check if car matches filters
        if ((minYear === '' || car.year >= minYear) &&
            (maxYear === '' || car.year <= maxYear) &&
            (make.length === 0 || make.includes(car.make)) && // Check if selected makes include the car's make
            (maxMileage === '' || car.mileage <= maxMileage) &&
            (minPrice === '' || car.price >= minPrice) &&
            (maxPrice === '' || car.price <= maxPrice) &&
            (color.length === 0 || color.includes(car.color))) { // Check if selected colors include the car's color
            // If it does, add it to the car list
            var carElement = createCarElement(car);
            carList.appendChild(carElement);
            foundCars = true;
        }
    }
    if (!foundCars) {
        noResults.style.display = 'block';
    }
}

// Call updateCarListings when the page loads and whenever the filters change
window.onload = function() {
    updateCarListings();

    // Initialize Select2 for select elements with the 'select2' class
    $('.select2').select2();
};



