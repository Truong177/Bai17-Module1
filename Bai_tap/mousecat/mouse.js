class Mouse {
    status_mouse;
    constructor(name, weight , speed ) {
        this.name_mouse = name;
        this.weight_mouse = weight;
        this.speed_mouse = speed;
    }
    getNameMouse(){
        return this.name_mouse;
    }
    setNameMouse(name){
        this.name_mouse = name;
    }
    getWeightMouse(){
        return this.weight_mouse;
    }
    setWeightMouse(weight){
        this.weight_mouse = weight;
    }
    getSpeedMouse(){
        return this.speed_mouse;
    }
    setSpeedMouse(speed){
        this.speed_mouse = speed;
    }
    getStatusMouse(){
        if(this.status_mouse === true){
            alert("Chuột sống")
            return true;
        }else{
            alert("Chuộc chết")
            return false;
        }
    }
    getSoundMouse(sound){
        console.log(sound);
    }
}
let rat = new Mouse("rat", 5,50);