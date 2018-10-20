class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  getUserDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

let me = new Person('Isabel', 34);
let description = me.getUserDescription();
console.log('this.name', me.name);
console.log('this.age', me.age);
console.log(description);
