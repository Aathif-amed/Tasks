function task4() {
  class Uber {
    constructor(rideId, pickup, destination, kmsTraveled, waitingTime, rate) {
      this.rideId = rideId;
      this.pickup = pickup;
      this.destination = destination;
      this.kmsTraveled = kmsTraveled;
      this.waitingTime = waitingTime;
      this.rate = rate;
    }
    get price() {
      //using getter method
      const totalfare = this.kmsTraveled * this.rate + this.waitingTime * 0.5;
      return totalfare;
    }
  }
  let ride1 = new Uber(1, "A", "B", 10, 10, 20);
  console.log(
    `Total fare for the ride from ${ride1.pickup} to ${ride1.destination} is Rs.${ride1.price}.`
  );
}
