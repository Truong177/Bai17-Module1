class Cat {
    constructor(name, weight, speed, mouse) {
        this.name_cat = name;
        this.weight_cat = weight;
        this.speed_cat = speed;
        this.mouse = mouse;
    }

    getNameCat() {
        return this.name_cat;
    }

    setNameCat(name) {
        this.name_cat = name;
    }

    getWeightCat() {
        return this.weight_cat;
    }

    setWeightCat(weight) {
        this.weight_cat = weight;
    }

    getSpeedCat() {
        return this.speed_cat;
    }

    setSpeedCat(speed) {
        this.speed_cat = speed;
    }

    getSoundCat(sound) {
        console.log(sound);
    }

    catchMouse() {
        if (this.mouse.speed_mouse < this.speed_cat) {
            alert("Mèo đã bắt được chuột")
        } else {
            alert("Mèo không bắt được chuột ")
        }
    }
    eatMouse(){
        if (this.mouse.status_mouse){
            this.weight_cat += this.mouse.weight_mouse;
            this.mouse.status_mouse = false;
        }
    }
}
let cat = new Cat("cat" , 10, 100,rat);
cat.catchMouse();
cat.eatMouse();
console.log(cat.getWeightCat());