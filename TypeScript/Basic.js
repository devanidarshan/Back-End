// TYPESCRIPT-TYPE
var a = 10;
console.log(a);
var b = "Dylan";
console.log(b);
var c = true;
console.log(c);
var d;
console.log(d);
// USER-DEFINED-TYPE
// ARRAY:-
var arr1 = [10, 20, 30, 40, 50];
var arr2 = [10, 20, 30, 40, 50];
var arr3 = ["Skill", "Hello", "World"];
console.log(arr1);
// TOUPLE:-
var t;
t = [10, "Hello"];
console.log(t);
// FUNCTION:-
function square(a, b) {
    return a - b;
}
console.log(square(10, 5));
var person = {
    name: 'John',
    age: 20,
    email: 'john@test.in',
};
console.log(person);
// ENUM:-
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["pink"] = 1] = "pink";
    Color[Color["black"] = 2] = "black";
    Color[Color["white"] = 3] = "white";
    Color[Color["purple"] = 4] = "purple";
    Color[Color["orange"] = 5] = "orange";
})(Color || (Color = {}));
var x = Color.red;
// CLASS:-
// class Person {
//     rollNo : number;
//     name: string;
//     constructor(r: number , n: string){
//         this.rollNo = r;
//         this.name = n;
//     }
//     showdetails() {
//         console.log(this.name + " " + this.rollNo);
//     }
// }
// let data = new  Person(20 , "skill");
// data.showdetails();
