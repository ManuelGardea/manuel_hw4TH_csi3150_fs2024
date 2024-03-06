// This function could be used to create a car listing element
function createCarElement(car) {
    var carElement = document.createElement('div');
    carElement.className = 'car-card';
    carElement.innerHTML = `
        <h2>${car.make} ${car.model}</h2>
        <p>Year: ${car.year}</p>
        <p>Mileage: ${car.mileage}</p>
        <p>Price: $${car.price}</p>
        <p>Color: ${car.color}</p>
        <p>Gas Mileage: ${car.gasMileage}</p>
    `;
    return carElement;
}

// This function could be used to update the car listings based on the filters
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

        // Check if car matches filters
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

// Call updateCarListings when the page loads and whenever the filters change
window.onload = updateCarListings;

