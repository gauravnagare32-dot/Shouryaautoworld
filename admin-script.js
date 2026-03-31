// admin-script.js

// Function to add a car to local storage
function addCar(car) {
    let cars = getCars();
    cars.push(car);
    localStorage.setItem('cars', JSON.stringify(cars));
}

// Function to edit a car in local storage
function editCar(index, updatedCar) {
    let cars = getCars();
    cars[index] = updatedCar;
    localStorage.setItem('cars', JSON.stringify(cars));
}

// Function to delete a car from local storage
function deleteCar(index) {
    let cars = getCars();
    cars.splice(index, 1);
    localStorage.setItem('cars', JSON.stringify(cars));
}

// Function to retrieve cars from local storage
function getCars() {
    return JSON.parse(localStorage.getItem('cars')) || [];
}

// Form handling for adding/editing cars
function handleCarFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const car = {
        make: formData.get('make'),
        model: formData.get('model'),
        year: formData.get('year')
    };
    if (event.target.dataset.index !== undefined) {
        editCar(event.target.dataset.index, car);
    } else {
        addCar(car);
    }
    event.target.reset();
}