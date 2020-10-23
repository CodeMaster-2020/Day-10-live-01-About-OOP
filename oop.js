function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var lorenzo = new Person("lorenzo", 25, "male");

Person.prototype.greetings = function() {
  console.log(this.name);
};

function Teacher(name, age, gender, subject) {
  Person.call(this, name, age, gender);

  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;

var rizzo = new Teacher("fabrizio", 28, "male", "javascript");

// rizzo.greetings();
// lorenzo.greetings();
function Animal(name, numberOfPaws, hasHairy, age, gender) {
  this.name = name;
  this.numberOfPaws = numberOfPaws;
  this.hasHairy = hasHairy;
  this.age = age;
  this.gender = gender;
}

//vogliamo mettere un metodo per dire se l'animale cammina su 2 o 4 zampe
Animal.prototype.isBipede = function() {
  return this.numberOfPaws === 2;
};

//vogliamo mettere un metodo per dire se l'animale cammina su 2 o 4 zampe
// function isBipede(animal) {
//   return animal.numberOfPaws === 2;
// }

var animal = new Animal("Luna", 4, true, 10, "female");

function Dog(name, hasHairy, age, gender, race = "shitzu") {
  Animal.call(this, name, 4, hasHairy, age, gender);

  this.race = race;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

var luna = new Dog("Luna", true, 10, "female");

function Giraffe(name, age, gender, neckLength) {
  Animal.call(this, name, 4, true, age, gender);

  this.hasLongNeck = true;
  this.neckLength = neckLength;
}

Giraffe.prototype = Object.create(Animal.prototype);

Giraffe.prototype.constructor = Giraffe;

Giraffe.prototype.isLongerThan = function(giraffe) {
  return (
    this.name +
    " ha il collo più " +
    (this.neckLength > giraffe.neckLength
      ? "lungo di " + giraffe.name
      : "corto di " + giraffe.name)
  );
};

var giraffe1 = new Giraffe("Linda", 40, "female", 8.5);
var giraffe2 = new Giraffe("Matilda", 50, "female", 12);
