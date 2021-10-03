// function test(){
//   console.log(this);
//   this.myname ="Shivam";
// }
// test();
// console.log(window.myname);


//Function Constructor

function Circle(radius) {//Constructor Function should'nt return anything

 this.radius = radius;
 this.start = "potty";
};

Circle.prototype.getArea = 
       function () {
       return Math.PI * Math.pow(this.radius, 2);
       };






myCircle =new Circle(10);// new keyword creates
                        // object myCircle of Circle
console.log(myCircle);

myOtherCircle = new Circle(20);
console.log(myOtherCircle.getArea());