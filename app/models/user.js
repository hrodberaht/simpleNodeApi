module.exports =  class Product {
    
    constructor (name){
        this.name = this.get(name);
    }
    get(name) {
        if(name !== "1")
            new Error("Invalid name");
        return this.name;
    }
    
}
