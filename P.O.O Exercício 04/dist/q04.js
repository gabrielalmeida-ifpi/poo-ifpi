"use strict";
var Radio = /** @class */ (function () {
    function Radio(volume) {
        this.volume = volume;
    }
    return Radio;
}());
var r = new Radio(2);
r.volume = 10;
console.log(r.volume);
