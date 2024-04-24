class Flashlamp {
    constructor(battery) {
        this.status = false;
        this.battery = battery;
    }
    setBattery(battery){
        this.battery = battery;
    }
    getBatteryInfo(){
        return this.battery.getEnergy();
    }
    light(){
        if (this.status){
            alert("Lightning")
        }else {
            alert("Not Lightning")
        }
    }
    turnOn(){
        if(this.battery.getEnergy()>0){
            this.status = true
            this.battery.decreaseEnergy();
        }
    }
    turnOff(){
        this.status = false;
    }
}
let f1 = new Flashlamp(b1);
console.log(f1);