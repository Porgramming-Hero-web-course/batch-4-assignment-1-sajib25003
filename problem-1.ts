{
    const numArray: number[] = [1, 2, 10, 20];
    function sumArray(numberArray: number[]): number {
        let sum: number = 0;
        numberArray.map((num: number) => { sum += num; return sum })
        return sum;
    }

    const total: number = sumArray(numArray);

    console.log("Total = ", total);

}