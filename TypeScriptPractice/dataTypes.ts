let myName:string = "Lachezar";

interface Person {
    name: string,
    age: number,
    action: () => void,
    isMale: boolean
}

let person:Person = {
    name: "Ivan",
    age: 18,
    action: function() {
        console.log("This is "+this.name);
    },
    isMale: false
}

function checkPersonIsMale(obj:Person):boolean {
    if(obj.isMale) {
        return true;
    }
    return false;
}