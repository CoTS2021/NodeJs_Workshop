const person = {
  name: "Saugat Giri",
  rollNumber: 1070,
  email: "saugatgiri1070@gmail.com",
  introduction: function () {
    console.log(`of course,it's me ${this.name}`);
  },
};

person.introduction();

for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

//Manipulation of Object
console.log(typeof Object());
const introduction = new Object();
introduction.name = "Saugat Giri";
introduction.address = "Lamachaur,Pokhara";
console.log(introduction);
delete introduction.address;
console.log(introduction);
person.portfolio = "https://saugatgiri1070.me";
console.log(person);
Object.freeze(person);
//hasOwn

console.log(Object.hasOwn(person, "name")); //true
console.log(Object.hasOwn(person, "phoneNumber")); //false

const newPerson = JSON.stringify(person);
console.log(typeof newPerson);

//Let's do something
const students = [
  { name: "Saugat", rollNumber: 1, faculty: "Science", percentage: 85.4 },
  { name: "Ram", rollNumber: 2, faculty: "Management", percentage: 78.2 },
  { name: "Sita", rollNumber: 3, faculty: "Engineering", percentage: 91.0 },
  { name: "Gita", rollNumber: 4, faculty: "Humanities", percentage: 74.5 },
  { name: "Hari", rollNumber: 5, faculty: "Education", percentage: 69.3 },
  { name: "Elena", rollNumber: 6, faculty: "Science", percentage: 88.9 },
  { name: "Bikash", rollNumber: 7, faculty: "Management", percentage: 82.7 },
  { name: "Rita", rollNumber: 8, faculty: "Engineering", percentage: 95.1 },
  { name: "Kiran", rollNumber: 9, faculty: "Humanities", percentage: 72.6 },
  { name: "John", rollNumber: 10, faculty: "Education", percentage: 80.0 },
];

console.log(students);
//filter method
const passStudent = students.filter(student => student.percentage >= 70);
console.log(passStudent);
const engineeringStudent = students.filter(student => student.faculty == "Engineering")
console.log(engineeringStudent)
//use of map

const newMarks = students.map(student => ({
    ...student,
    percentage: student.percentage * 2
}));
console.log(newMarks);

