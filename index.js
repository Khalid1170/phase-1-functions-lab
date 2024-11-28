// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hqBlock = 42;  // Assuming Scuber's HQ is at block 42
    return Math.abs(someValue - hqBlock);  // Absolute difference between the given block and HQ
  }
  
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue); // Get the number of blocks from HQ to the pickup location
    return blocks * 264; // Convert blocks to feet (1 block = 264 feet)
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockDifference = Math.abs(endBlock - startBlock); // Get the absolute difference in blocks
    return blockDifference * 264; // Convert blocks to feet (1 block = 264 feet)
  }

  function calculatesFarePrice (startBlock, endBlock) {
const distance = distanceTravelledInFeet (startBlock, endBlock);

if (distance <= 400 ){
return 0; 
}

if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;  
  }
    if (distance > 2000 && distance <= 2500){
        return 25;
    }

    return `cannot travel that far` ;

  }
  
  