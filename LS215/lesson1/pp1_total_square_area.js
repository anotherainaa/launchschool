let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];


/*

approach
input: array of rectangles (represent heigh and width)
output: total are covered by all the rectangles 

algorithm 
- for each rectangle, total the area
- using the total area get the sum of all rectangles

*/

function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1])
  
  return areas.reduce((sum, area) => sum + area);
  
} 

console.log(totalArea(rectangles));    // 141

// Question 2
 

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1] )
  let areas = squares.map(rectangle => rectangle[0] * rectangle[1])
  return areas.reduce((sum, area) => sum + area);
  
} 

console.log(totalSquareArea(rectangles));    // 121
