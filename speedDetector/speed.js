function calculateDemeritPoints(carSpeed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;
    const demerits = Math.floor((carSpeed - speedLimit) / kmPerDemerit);
  
    if (carSpeed <= speedLimit) {
      console.log("Ok");
    } else if (demerits <= 12) {
      console.log("Your demerit points:", demerits);
    } else {
      console.log("License suspended");
    }
  }
  
  calculateDemeritPoints(carSpeed); // Replace with the actual car speed