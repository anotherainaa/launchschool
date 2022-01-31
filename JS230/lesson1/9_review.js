document.addEventListener('DOMContentLoaded', () => {
  let html = document.childNodes[0];
  let body = document.lastChild;
  let ps = body.getElementsByTagName("p")

  let psArr = [].slice.call(ps);

  psArr.forEach(element => {
    element.style.color = 'green';
  });

  function walk(node, callback) {
    callback(node);

    for (let i = 0; node.childNodes.length; i += 1) {
      walk(node.childNodes[i], callback);
    }
  }

})
