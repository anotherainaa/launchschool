// Why will it log 'debugging'?

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

//  because of JS lexical scoping rules. 

// The inner function logger has access to the variable const 
// It has access to any variable declared in the scope of it's outer (parent) function.