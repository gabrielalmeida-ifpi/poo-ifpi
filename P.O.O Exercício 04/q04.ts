class Radio {
    volume: number;
    constructor(volume: number) {
        this.volume = volume;
    }
}
let r: Radio = new Radio(2);
r.volume = 10;
console.log(r.volume)