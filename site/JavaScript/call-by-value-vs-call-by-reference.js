
//Call By Value
var x = 7;
function test(a){
    a = 89;
    return a;
}
test(x);
console.log(x);

//Call by reference
var a = {
    x :7
};
var b = a;
console.log(a);
console.log(b);

a.x=4;

console.log(a);
console.log(b);

// function test

function test(x){

    console.log("Value passed before : " + x);
    x = x*2;
    console.log("Value after : " + x);
    
}

var a =8;
test(a);
console.log(a);

 obj ={

    x :8

};
console.log( obj);

function test(a){
    a ["x"]=9;
    console.log(a);
}
test(obj);
console.log(obj["x"]);


