// object literals and "this"
literalCircle ={
    radius: 10,

    getArea: function(){

        self = this;// important snce we keep this pointer memory in SELF pointer
        console.log(this);
        

        function increaseRadius() {
            self.radius=20;// this.radius is pointing to Gloabl Object
                       //bug
        };
        increaseRadius();
        console.log(this.radius);

        return Math.PI*Math.pow(this.radius,2);
    }
};

console.log(literalCircle.getArea());


