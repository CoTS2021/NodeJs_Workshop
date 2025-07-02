// function greet(){
//     console.log("hey it's me");
// }
// greet();

/* const greet = function (){
    console.log("hey its me")
}

greet() */

// const greet = (a,b)=>{
//     a+b;
// }
const greet = (a,b) => a+b;

// console.log(greet(2,3))
// true ? console.log("i am false") : console.log("i am true")

(function (a,b){
    // console.log("hey it's me");
    console.log(a+b)
})(2,3)

//

const otpGenerate = ()=>{
    return Math.floor(Math.random() * 10000);
}
console.log(otpGenerate())


//Object

console.log(typeof Math)

const introduction = {
    // key : "value"
    name : "Saugat Giri",
    email: "saugatgiri1070@gmail.com",
    intro : function(){
        console.log(`Hey its me ${this.name}`)
    }
};

// const name = introduction.name;
const {name} = introduction
console.log(name);

// enum Role{
//     user = "user",
//     uploader = "uplodaer"
// }
const Role = {
    user : "user",
    uploader : "uploader"
}

// Object.freeze(Role);
Role.thirdperson = "admin"
console.log(Role)