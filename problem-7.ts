{
    class Car {
        constructor(
            public make: string,
            public model: string,
            public year: number) {
        }

        getCarAge(): number {
            let age: number = 0;
            const currentYear: number = new Date().getFullYear();
            age = currentYear - this.year;

            return age;
        }
    }

    const myCar: Car = new Car("Toyota", "Axio", 2020);

    const myCarAge: number = myCar.getCarAge();

    console.log(`age of my car is ${myCarAge}`);
}