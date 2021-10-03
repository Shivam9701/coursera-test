function doOperation (x, operation){
    return operation(x);
}

function double (a){
    return a*2;
}
console.log(doOperation(9, double));