obj3.f2();
console.log(x);
//immediately invoked functio iife
(function (dog){
    console.log("hello world "+dog);
}
)("sugar");// () calls iife
