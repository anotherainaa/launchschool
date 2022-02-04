function reset(options) {
  options.forEach((option, index) => {
    if (index === 0) {
      option.selected = true;
    } else {
      option.selected = false;
    }
    option.hidden = false;
  });
}

function getClassifications(animal) {
  switch (animal) {
    case 'Bear':
      return ['Vertebrate', 'Warm-blooded', 'Mammal'];
    case 'Turtle':
      return ['Vertebrate', 'Cold-blooded'];
    case 'Whale':
      return ['Vertebrate', 'Warm-blooded', 'Mammal'];
    case 'Salmon':
      return ['Vertebrate', 'Cold-blooded'];
    case 'Ostrich':
      return ['Vertebrate', 'Warm-blooded', 'Bird'];
  }
}

function getAnimals(classfication) {
  switch (classfication) {
    case 'Vertebrate':
      return ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'];
    case 'Warm-blooded':
      return ['Bear', 'Whale', 'Ostrich'];
    case 'Cold-blooded':
      return ['Salmon', 'Turtle'];
    case 'Mammal':
      return ['Bear', 'Whale'];
    case 'Bird':
      return ['Ostrich'];
  }
}

function updateOptions(options, validClasses) {
  let firsOption = true;
  options.forEach(option => {
    if (validClasses.includes(option.value) && firsOption) {
      option.selected = true;
      firsOption = false;
    } else if (!validClasses.includes(option.value)) {
      option.hidden = true;
    }
  })
}

document.addEventListener('DOMContentLoaded', event => {
  let classification = document.getElementById('animal-classifications');
  let animals = document.getElementById('animals');

  let classOptions = [].slice.call(classification.children);
  let animalOptions = [].slice.call(animals.children);


  document.getElementById('animals').addEventListener('change', event => {
    console.log(`You selected ${event.target.value}`);
    reset(classOptions);
    let selectedAnimal = event.target.value;
    let validClasses = getClassifications(selectedAnimal);

    updateOptions(classOptions, validClasses);
  })

  document.getElementById('animal-classifications').addEventListener('change', event => {
    reset(animalOptions);
    let selectedClass = event.target.value;
    let validAnimals = getAnimals(selectedClass);

    updateOptions(animalOptions, validAnimals);
  })

  let buttonClear = document.getElementById('clear');
  buttonClear.addEventListener('click', event => {
    event.preventDefault();

    reset(classOptions);
    reset(animalOptions);
  })
})


// When I select an animal, the selected needs to be changed to the first thing in the relevant classfication
// I need to know all the relevant classification
// then for each option that is part of the classification, display none

// when we hit clear, 
// display none for all options need to be reset
