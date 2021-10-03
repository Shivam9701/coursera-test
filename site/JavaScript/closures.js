// // //closures



// function createMultiplier(multiplier) {
//   function b() {
//     console.log("Multiplier is " + multiplier);
//   }
//   b();
//   return function (x) {
//     return multiplier * x;
//   };
// }

// double = createMultiplier(2);
// console.log(double(4));
(function() {
    obj3 = {
      x: "dog pussy",
    };
   obj3.f2 = function () {
       console.log(obj3.x);
    };
})();
