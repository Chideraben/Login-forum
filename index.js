("This is Benedict site")

//USE OF OPERATORS
const x = 3;
// Here multiplication is done ist Using th BODMAS rule in mathematics
const y = 1 + 3 * 3;
const z = x + y;
console.log("Obi stayed in prison for" + z + " days in prison");
/*LEARNING BOOLEAN*/
/* this will return "Dog is not a cat"*/
const isCat = false;
if (isCat ){
    console.log("dog is a cat")
}
else{
    console.log("dog is not a cat")
}


 //THIS WILL ALERT YOU ARE CAT IF YOUR NAME IS catty
const name = prompt("Enter name", "catt")

if(name.toLowerCase() == "catty"){
    let isCat = true;
    alert("You are a cat")
}
else{
    let isCat = false;
    alert("You  are not a cat")
}

const names = `Ifeany`;

const surName = `Benedict`;

const join = `My Name Is ${names}  ${surName}`; 

console.log(join)

let nam = "Ifeany";

let surNam = "Benedict";

let joi = `My Name Is ${names}  ${surName}`; 

console.log(join)


{
    const x = 5;
    const y = 5;
function myfunct(){
    delete x * y
    return x
}
}
console.log(myfunct())


/* LEARNING ABOUT BLOCK SCOPE*/
//global scope
const k = 3;
let u = 2;

//Block scope 
//variable declared inside the block canot be accessed  outside the clock
{
    const e = 4;
    const nan = 5;
    console.log(e, typeof(e))
    
   function myFunction(){
        return e*nan

    }

  console.log(myFunction())
}
//Global scope : variable declared outside the block is the Gloal scope
const glo = 45;
console.log(glo)
 
 
//Local scope
//CarName is undefined outside the myFunction()

myfunctioner();
function myfunctioner(){
    const carName = "Benz"
    console.log(carName)
}
//Array
const person =  [40,59,49,47,99]

person.splice(1,4,`Benedict`);
//when you command person.sort():it will arrange the string or numbers according to increasing order
console.log(person)


//if, else if condition
const grade = 80;

if(grade>=70 && grade<=100)
{
    console.log(`Grade A `)
}
else if(grade>=60 && grade<70){
    console.log(`Grade B`)
}
else if(grade>=45 && grade<60){
    console.log(`Grade C`)
}

else{
    console.log("Failed")
}
// Using switch (this is more faster in function than other conditions)
const stat = 9;
switch(stat){
    case 4:{
        console.log(`You are a dev`);
        break;
    }
    case 6:{
        console.log(`Well known developer`);
        break;
    }
    default:{
        console.log(`You are not a developer`)
    }
}
//
const car = 6;
car<3?console.log(`less`):console.log(`more`)

// we can also wite the above like this.
const num = 6;
let d =num<3?`Less`:`More`;
console.log(d)

//loop: Loop is something that repeats itself again and again based on a condition
//while loop is called a entry control loop because the condition is checked at the entry
let i = 1;
while(i<10){
    console.log(`I am a developer`+i);
    i+=3;
}
// do while loop is called exit control loop because the condition is checked at the exit
let  more = 11;
do
{
    console.log(more)
    more++;
}
while(more<=10)
//for (Entry control loop)
for (let num1= 2;num1<10;num1++){
    console.log(`num1`+num1)
}