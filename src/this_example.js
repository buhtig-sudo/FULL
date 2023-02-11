const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
  greet: function () {
    console.log("hello, my name is " + this.name);
  },
};
arto.method = function () {
  this.age += 1;
};
arto.greet();
// "hello, my name is Arto Hellas" gets printed
console.log(arto.age);
arto.method();
console.log(arto.age);

arto.new1 = function () {
  this.education = "666";
};
arto.new1();
console.log(arto.education);
setTimeout(arto.greet.bind(arto), 1000);
