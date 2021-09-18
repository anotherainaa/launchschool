
const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(items) {
  let count = {};

  items.forEach(elem => {
    if (count[elem]) {
      count[elem] += 1;
    } else {
      count[elem] = 1;
    }
  });

  Object.keys(count).forEach((key) =>  console.log(`${key} => ${count[key]}`))
}

countOccurrences(vehicles);

