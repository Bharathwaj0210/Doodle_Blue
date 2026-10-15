//variable, let, const
let age=19
let message=age>=18?"allowed": "not allowed"
console.log(message)
document.write(message)

//Loops
n=prompt("")
for (let i=n; i<=50; i++){
    if (i%2==0){
        document.write(i, end=" ")
        console.log(i)
    }

    else if(i%2!=0){
       console.log(i)
    }
}

//Do while
let i=0;
do{
    if (i%2==0){
        console.log(i);
        document.write(i)
    }
    i++;
}while(i<=50)

//continue break
for (a=1;a<=10;a++){
    if (a==3){
        continue
    }
    if(a==7){
        break
    }
    console.log(a)
}

//Arrow Functions
const add=(a,b)=>{
    return a+b;
}
console.log(add(2,3));

//Square function using arrow 
const square = n=> {
    return n*n
}
console.log(square (4));

//Default Parameters
function welcome(name='student'){
    console.log("welcome, "+name);
}
welcome("maya");
welcome();

//Scope 
const course="Javascript";
function showcourse(){
    const topic ="Functions";
    console.log(course);
    console.log(topic);
}
showcourse();
//console.log(topic); //Reference Error

//callback
function display(callback){
    console.log("Hello");
    callback();
}
function message(){
    console.log("welcome")
}
display(message)

//Array Operations
const arr=["study", "Practice"]
Tasks.push("Revise");
console.log(task);
Tasks.pop();
console.log(tasks);

//Slice and splice
const numbers=[10,20,30,40];
const part=numbers.slice(1,3); //updates the duplicate without changing the original
console.log(part)
console.log(numbers);

numbers.splice(1,0); //updates the original array
console.log(numbers);

console.log(numbers.includes(10));
console.log(numbers.indexOf(20));
console.log(numbers.find(numbers=>numbers>30));

//map
const num=[100,200,300];
const increased=num.map(price=>price*20);
console.log (increased);
console.log(num);

//Filter
const scores=[35,60,82,92]
const passes=scores.filter(score=>score>=50);
console.log(passes)

//reduce
const total=scores.reduce((sum,scores)=>{
    return sum+scores;
},0);
console.log(total)

//Some and Every
const marks=[60,75,90]
console.log(scores.some(score=>score<70));
console.log(scores.every(score=>score>=50));


