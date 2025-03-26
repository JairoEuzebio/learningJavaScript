// Class 83- Classes, Inheritance, Methods

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    static soma(x, y) {
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');

