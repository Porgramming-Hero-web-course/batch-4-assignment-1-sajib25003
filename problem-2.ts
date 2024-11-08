{
    const numArray: number[] = [1, 2, 3, 4, 2, 55, 6, 4, 7,8, 8, 9];

    function removeDuplicates(numberArray: number[]): number[] {
        return numberArray.filter((item, index) => {
           return numberArray.indexOf(item) === index
        })
    }

    const uniqueArray =  removeDuplicates(numArray);


    console.log('unique Array =', uniqueArray);
}