
function createCarElement(car) {
    // car card container
    var carElement = document.createElement('div');
    carElement.className = 'car-card';

    // image element
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
    var make = document.getElementById('make').value;
    var maxMileage = document.getElementById('max-mileage').value;
    var minPrice = document.getElementById('min-price').value;
    var maxPrice = document.getElementById('max-price').value;
    var color = document.getElementById('color').value;

    var carList = document.getElementById('car-list');
    carList.innerHTML = '';

    for (var i = 0; i < usedCars.length; i++) {
        var car = usedCars[i];

        if ((minYear === '' || car.year >= minYear) &&
            (maxYear === '' || car.year <= maxYear) &&
            (make === '' || car.make === make) &&
            (maxMileage === '' || car.mileage <= maxMileage) &&
            (minPrice === '' || car.price >= minPrice) &&
            (maxPrice === '' || car.price <= maxPrice) &&
            (color === '' || car.color === color)) {
            // If it does, add it to the car list
            var carElement = createCarElement(car);
            carList.appendChild(carElement);
        }
    }
}


window.onload = function() {
    updateCarListings();

    // Initialize Select2 for select elements with the 'select2' class
    $('.select2').select2();
};



