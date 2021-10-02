var company ={
    name : "Google",
    ceo :{
        first :"join",
        last : "leave"
    }
};

console.log(company);
console.log(company.name);
console.log(company.ceo.first);

var dog = new Object;
dog.name = 'c';
company.name+=dog.name;
console.log(company.name);
