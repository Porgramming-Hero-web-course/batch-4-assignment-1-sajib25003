{
    const numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum: number = 0;
    function sumArray(numberArray: number[]): number {
        numberArray.map((num: number) => { sum += num; return sum })
        return sum;
    }

    sumArray(numArray);
    // sumArray([1,2,3]);


    console.log("Total = ", sum);

}