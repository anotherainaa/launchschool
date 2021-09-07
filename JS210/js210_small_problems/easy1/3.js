let rlSync = require('readline-sync');

const METER_IN_SQUARE_FEET = 10.7639;

roomLengthInMeters = rlSync.question("Enter the length of the room in meters: ")
rommWidthInMeters =  rlSync.question("Enter the width of the room in meters: ")

roomAreaInMeters = roomLengthInMeters * rommWidthInMeters;
roomAreaInSquareFeet = roomAreaInMeters * METER_IN_SQUARE_FEET;
console.log(`The area of the room is ${Math.round(roomAreaInMeters), 2} square meters (${Math.round(roomAreaInSquareFeet, 2)} square feet).`)