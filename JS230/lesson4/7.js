// jQuery Practice problem

// Question 1

var $h1s = $(h1)
console.log($h1s.length); // 4

// Question 2

var $firsth1 = $('#site_title');

// Question 3

$('article li')

// Question 4

$('article li').eq(2);

// Question 5

$('table').find('tr').filter(':odd');

$('table').find('tr:odd');

// Question 6

$('li li').filter(":contains('ac ante')").parents('li');

$("li li:contains('ac ante')").parents('li').get();

// Question 7

$("li li:contains('ac ante')").next().get()

// Question 8

$('table td').last();

// Alternative

$('table td').eq(-1);

// Question 9

$('table td:not(.protected)')

$('table').not('.protected')

// Question 10

$("a[href^='#']")

// Question 11

$('[class*=block]');