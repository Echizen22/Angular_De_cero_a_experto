

export class Person {
    public name: string;
    private address: string;

    constructor() {
        this.name = 'Fernando';
        this.address = 'New York';
    }


}


const ironman = new Person();

console.log(ironman);