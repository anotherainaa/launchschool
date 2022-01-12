// # Creating a module

let prefix = ">> ";

function logIt(string) {
  console.log(`${prefix} ${string}`);
}

function setPrefix(newPrefix) {
  prefix = newPrefix;
}

module.exports = {
  logIt,
  setPrefix,
};

// Exporintg the functionality we want on another file

module.exports = { 
  logIt,
  setPrefix,
}

