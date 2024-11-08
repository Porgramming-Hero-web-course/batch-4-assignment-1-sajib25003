{
    function getProperty<T, K extends keyof T>(object: T, property: K) {
        return object[property];
    };

    type Person = {
        name: string;
        age: number;
        email?: string;
    }

    const newPerson: Person = {
        name: 'John Wick',
        age: 35,
    }

    const personName: string = getProperty(newPerson, "name");
    console.log(personName);
}