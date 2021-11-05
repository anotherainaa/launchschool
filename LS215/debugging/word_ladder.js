let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  };

  ladder += word;
})

console.log(ladder);  // expect: head-heal-teal-tell-tall-tail

// What was the problem? 
// No semi-colod on the first line, the first statement is combined with the next. 
// let ladder = ''['head', ... ].forEach()
// This is because of js automatic semicolon insertion behaviors.
// - Seimicolon should always terminate a statement. 


