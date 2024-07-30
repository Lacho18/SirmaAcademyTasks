function Instrument(name, type) {
    this.name = name;
    this.type = type;

    this.play = function () {
        console.log("Playing.....");
    }

    this.tune = function () {
        console.log("Tune");
    }
}


function StringInstrument(name, type, numberOfStrings) {
    Instrument.call(this, name, type);
    this.numberOfStrings = numberOfStrings;

    this.tune = function () {
        console.log(`This instrument has ${this.numberOfStrings} strings`);
    }
}

function PercussionInstrument(name, type, drumSize) {
    Instrument.call(this, name, type);
    this.drumSize = drumSize;

    this.tune = function () {
        console.log(`This instrument ${this.name} has ${this.drumSize} and it's type is ${this.type}`);
    }
}

const instrument = new PercussionInstrument("Test", "piano", 10);
instrument.tune();