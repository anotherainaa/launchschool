function extractRegion(locale) {
  return locale.split('_')[1].slice(0, 2);
}

function extractLanguage(arg) {
  return arg.slice(0, 2);
}

function greet(language) {
  switch (language) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!'
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

function localGreet(locale) {
  let region = extractRegion(locale);
  let language = extractLanguage(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'


console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salutouch