class Battery {
    constructor(energy) {
        this.energy = energy;
    }
    setEnergy(energy){
        this.energy = energy;
    }
    getEnergy(){
        return this.energy;
    }
    decreaseEnergy(){
        if (this.energy > 0){
            this.energy --;
        }
    }
}
let b1 = new Battery(100);