class hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    attack(){
        let attack;

        if(this.type === "mage"){
            attack = "magic";
        } else if(this.type === "warrior"){
            attack = "sword";
        } else if(this.type === "monk"){
            attack = "martial arts";
        } else if(this.type === "ninja"){
            attack = "shuriken";
        }

        console.log(`The ${this.type} attacked using ${attack}`);
    }
    
}

const hero1 = new hero("Gandalf", 100, "mage");
const hero2 = new hero("Aragorn", 35, "warrior");
const hero3 = new hero("Bruce Lee", 32, "monk");
const hero4 = new hero("Hattori Hanzo", 45, "ninja");


hero1.attack();
hero2.attack();
hero3.attack();
hero4.attack();