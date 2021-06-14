const hotel = {
    name: "Interconnect",
    rooms: 20,
    booked: 4,
    checkAvailabitity: function() {
        return this.rooms - this.booked;
    }
}

// console.log(hotel.rooms = 5);
// console.log(hotel.checkAvailabitity());

//Constructor function
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailabitity = function() {
        return this.rooms - this.booked;
    }
}

var quayHotel = new Hotel('Quay', 50, 40);
console.log(quayHotel);

var message = (function() {
    console.log("Hello");
}());