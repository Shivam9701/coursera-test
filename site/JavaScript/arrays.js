// arr = new Array();
// arr[0] ="dog";
// arr[1] = "pop";
// arr[2] = 7;
// arr[3] = function(name){

//     console.log("Hello " + name);

// };
// arr[4]={
//     course:"JavaScripy"
// };

// console.log(arr[3]);




//Short Hand Array creation
// names=["o"];
// console.log(names);
// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// names[99]="op";
// console.log(names);

// for(var i=0; i<names.length; i++){
//     console.log(names[i]);
// }

names2 = ["shivam","dog"];
myObj= {
     name:"klso",
     dog: "sugar"

};

for(prop in myObj){

    console.log(prop +" :" + myObj[prop]);

}

for (i in names2){
    console.log("hello " + names2[i]);
}

names2.baby = "baby";

for (i in names2) {
  console.log("hello " + names2[i]);
}


