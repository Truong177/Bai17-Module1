class SwitchButton {
    constructor(lamp) {
        this.status = false;
        this.lamp = lamp;
    }

    connectToLamp(newLamp) {
        this.lamp = newLamp;
    }

    switchOff() {
        this.status = false;
        this.lamp.status = false;
    }

    switchOn() {
        this.status = true;
        this.lamp.status = true;
    }
}

let s1 = new SwitchButton(e1);
let s2 = new SwitchButton(e2);
console.log(s1.switchOn());
console.log(s2.switchOn());
console.log(s2.connectToLamp(e1));
console.log(s2.switchOff());
console.log(s2.switchOn());