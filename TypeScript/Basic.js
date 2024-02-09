// TYPESCRIPT-TYPE
// let a: number = 10;
// console.log(a);
// let b: string = "Dylan";
// console.log(b);
// let c: boolean = true;
// console.log(c);
// let d: undefined; 
// console.log(d);
// USER-DEFINED-TYPE
// ARRAY:-
// let arr : Array<number> = [10,20,30,40,50];
// let arr : number[] = [10,20,30,40,50];
// let arr : string[] = ["Skill" , "Hello" , "World"];
// console.log(arr);
// TOUPLE:-
// let t:[number,string]
// t = [10,"Hello"];
// console.log(t);
// FUNCTION:-
// function square(a: number, b: number) : number | string
// {
//     return a-b;
// }
// console.log(square(10,5));
// INTERFACE:-
// interface skill{
//     name:string;
//     age:number;
//     email:string;
// }
// let person: skill = {
//     name:'John',
//     age: 20,
//     email: 'john@test.in',
// }
// console.log(person);
// ENUM:-
// enum Color {
//     red , pink , black , white , purple , orange
// }
// let x = Color.red;
// CLASS:-
var Person = /** @class */ (function () {
    function Person(r, n) {
        this.rollNo = r;
        this.name = n;
    }
    Person.prototype.showdetails = function () {
        console.log(this.name + " " + this.rollNo);
    };
    return Person;
}());
var data = new Person(20, "skill");
data.showdetails();
