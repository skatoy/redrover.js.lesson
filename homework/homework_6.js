function Person(name,age) {
    this.name = name;
    this.age = age;
    this.greet = `Hello ${this.name}, тебе уже soon ${this.age}`
anon = function anon (age){
    this.age = age+1
    return `Hello ${this.name}, тебе уже soon ${this.nameage}`
}
}

const XZ = new Person('Я хз кто ты', 33)
console.log(XZ);
Person.prototype.celebrateBirthday = function() {
    return (this.age+1)
}

console.log(XZ.celebrateBirthday());
console.log(Person.anon());