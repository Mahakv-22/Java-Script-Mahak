// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  age: 18,
};

// Add a Method
person.name = function() {
  return this.firstName + " " + this.lastName;
};

person.age = function() {
	return this.age;
};

// Display Object Data
document.getElementById("demo").innerHTML =
"My father is " + person.name(); 

document.getElementById("demo").innerHTML =
"My father age is " + person.age(); 