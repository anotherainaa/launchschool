// Importing from module

// destructuring object syntax here
const { logIt, setPrefix } = require("./logit");
logIt("You rock!");
setPrefix('++ ');
logIt("You rock!");

console.log(module);
// Module {
//   id: '<repl>',
//   path: '.',
//   exports: {},
//   parent: undefined,
//   filename: null,
//   loaded: false,
//   children: [],
//   paths: [
//     '/Users/wolfy/JS/repl/node_modules',
//     '/Users/wolfy/JS/node_modules',
//       ...
//     '/usr/local/Cellar/node/12.6.0/lib/node'
//   ]
// }

console.log(exports);
// {}
// (no exports at the main program level)

console.log(require);
// [Function: require] {
//   resolve: [Function: resolve] { paths: [Function: paths] },
//   main: Module {
//     // same as `module` object
//   },
//   // some other stuff
// }

console.log(__dirname);  // /Users/wolfy/JS
console.log(__filename); // /Users/wolfy/JS/main.js