class Human {
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }
    ismale(){
        return this.gender;
    }
    setGender(gender){
        this.gender = gender;
    }
    checkApple(apple){
        return apple.isEmpty();
    }
    eat(apple){
        if(apple.getWeight()>0){
            apple.decrease();
            this.weight ++ ;
        }
    }
    say(String){
        console.log(String);
    }
}
let adam = new Human("Adam","Male",50 );
console.log(adam.ismale());
adam.setGender("Female");
adam.eat(apple1);
adam.say("Tôi đang ăn táo")
console.log(( "Quả táo còn: "+apple1.getWeight() + " đơn vị" + "<br>"));
console.log(( "Cân nặng của Adm là: " + adam.getWeight() + " đơn vị" + "<br>"))

