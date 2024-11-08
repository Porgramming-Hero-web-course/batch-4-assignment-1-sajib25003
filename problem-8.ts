{
    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
        return keys.every(key => key in obj);
    }

    type Person1 = { name: string; age: number; }

    const person1: Person1 = { name: "Alice", age: 30 };
    console.log(validateKeys(person1, ["name", "age"]));
    // console.log(validateKeys(person1, ["name", "email"]));

}