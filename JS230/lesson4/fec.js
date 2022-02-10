// document.querySelector('#rand').addEventListener('click', function(e) {
//   console.log(this);
//   console.log(e.currentTarget);
// })

$('#rand').click(e => {
  alert(this);
});