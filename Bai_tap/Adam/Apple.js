class Apple {
    constructor(weight) {
        this.weight = weight;
    }
    getWeight(){
        return this.weight
    }
    decrease(){
        if (this.weight > 0){
            this.weight --;
        }
    }
    isEmpty(){
        if (this.weight <= 0){
            return true;
        }else {
            return false;
        }
    }
}
let apple1 = new Apple(10);