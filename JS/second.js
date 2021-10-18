var array = [];

var i = 0;

// Same as C or C++
while(i < 5) {
	array.push(i);
	i++;
}

console.log(array);

// Same as C or C++
var i = 0;
for (i = 0; i < 5; i++) {
	array.push(i * 2 + 1);
}

console.log(array);

i = 0;
do {
    console.log("i is ", i);
    i++;
} while(i < 6);
