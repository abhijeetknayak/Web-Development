console.log("Hello World!");
var number = 5; // hello

/* eddd */
var name = "World"  // Accessible everywhere
name = 8

let r = false;  // Defined only in the scope
const pi = 3.14;  // Constant value, cannot be changed

var str = '"Hello"';
var newStr = '"World"';
console.log(str + newStr);

console.log(str.length);

// Immutable Strings - Cannot modify individual characters
str[0] = 'T';
console.log(str); 

function newFunction(first, second, third) {
	var result = first + second - third;
	return result;
}

var newRes = newFunction("1", "2", "4");
console.log(newRes);

// Nested Arrays
var newArr = [["One", 1], ["Two", 2]]

// Push and pop Functions - Same as append in python
newArr.push(3);
console.log(newArr);

console.log(newArr.pop(), newArr);

// Shift Function - Removes the first element
console.log(newArr.shift());

// Unshift function - Adds element at the start
newArr.unshift(['Hello', 'World'])
console.log(newArr);

console.log(typeof newArr, typeof str, typeof(newFunction));

function retVals() {
	// Returns only the last element
	return 7, 8, 9;
}

console.log(retVals());
console.log(JSON.stringify(newArr));

function testeq(val) {
	// Assignment operator, will always return true
	if (val = 12) return true;
	return false;
}

console.log(testeq(12));
console.log(testeq(3));

// Strict Equality === does not allow type conversion
console.log("Equality: ", 3 == '3');
console.log("Strict Equality: ", 3 === '3');

// Strict Inequality operator - returns true here
console.log("Strict Inequality: ", 3 !== '3');

// Switch Statements
function switchStatments(val) {
	switch(val) {
		case 1:
		answer = "alpha"; break;
		case 2: 
		answer = 'beta'; break;
		case 3:
		answer = "gamma"; break;
		case 4:
		answer = "delta"; break;
		default:
		answer = "Hello World";
	}

	return answer;
}

console.log(switchStatments(1));
console.log(switchStatments(2));
console.log(switchStatments(3));
console.log(switchStatments(4));
console.log(switchStatments(5));

// Objects - Dictionary in Python, Maps in C++
var student = {
	"Name": 'Brooks',
	"Age": 12,
	"Subjects": ["Math", "Science", "History", "Latin"],
	12: 13,
	13: "Thirteen"
};

console.log(student);
console.log(student.Name);
console.log(student["Name"]);
console.log(student[12]);

student.lastname = "Brooks";
console.log(student);

delete student[12];
console.log(student[12]); // undefined

console.log(student.hasOwnProperty("Name"));
console.log(student.hasOwnProperty(13));
console.log(student.hasOwnProperty(name));
