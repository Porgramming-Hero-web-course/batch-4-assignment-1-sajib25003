{
    const sentence: string = "I love learning new things and new ideas";
    const word: string = "new";

    let count = 0;
    const countWordOccurrences = (sentence: string, word: string): number => {
        const words: string[] = sentence.toLowerCase().split(' ');
        // console.log(words);
        words.forEach(item => {
            if (item === word.toLowerCase()) {
                count++;
            }
        });
        return count;
    }

    // countWordOccurrences("I love learning new things and new ideas", "new")
    countWordOccurrences(sentence, word)


    console.log(`count = ${count}`);
}