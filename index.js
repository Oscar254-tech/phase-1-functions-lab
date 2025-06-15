function distanceFromHqInBlocks(someValue) {
  const hqLocation = 42;
  return Math.abs(someValue - hqLocation);
}

  function distanceFromHqInFeet(someValue) {
    const blocks= distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock= 264;
    return Math.abs(start - destination) * feetPerBlock;
  } 
 

 function calculatesFarePrice(start, destination) {
  const totalFeetTravelled = distanceTravelledInFeet(start, destination);

  if (totalFeetTravelled <= 400) {
    // Corrected to return 0 for free sample
    return 0;
  } else if (totalFeetTravelled > 400 && totalFeetTravelled <= 2000) {
    // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
    // Use toFixed(2) and parseFloat for correct currency representation
    const billableFeet = totalFeetTravelled - 400;
    return parseFloat((billableFeet * 0.02).toFixed(2));
  } else if (totalFeetTravelled > 2000 && totalFeetTravelled <= 2500) { // Corrected condition
    return 25;
  } else { // This covers totalFeetTravelled > 2500
    return 'cannot travel that far';
  }
}




