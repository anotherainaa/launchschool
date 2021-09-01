
function calculateBMI(heightInCm, weightInKg) {
  let heightInMeters = heightInCm / 100;
  let bmi = weightInKg/ heightInMeters ** 2;
  return bmi.toFixed(2);
}


console.log(calculateBMI(180, 80));