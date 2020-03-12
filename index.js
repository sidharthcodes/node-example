var rect = require('./rectangle');

function solver(l,b){
	console.log(`Solving for rectangle with l = ${l}, b = ${b}`);

	if(l<=0 || b<=0){
		console.log("Lenght and breadth should be grater than 0");
	}
	else {
		console.log(`Perimeter: ${rect.perimeter(l,b)}, Area: ${rect.area(l,b)}`);
	}
}

solver(5,4);
solver(5,6);
solver(1,4);
solver(0,0);