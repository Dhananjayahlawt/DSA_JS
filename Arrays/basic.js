let students=["Prashant","Pranav",1,2,3];
students.reverse();
console.log(students);


let array=[1,{name:"Hello"},3];
let splicedArray=array.splice(1);
console.log("After Splice",splicedArray)

function foo(n){

    if(n==2){
        var num=6;
    }
    console.log("num",num);
}

foo(2);