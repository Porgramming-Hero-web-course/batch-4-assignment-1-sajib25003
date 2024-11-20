
const sentence: string = "I lo've learning new things and new ideas, I love learning new things and new ideas";
const word: string = "love";

const countWordOccurrences = (sentence : string, word : string):number => {
    let count = 0;
    const words: string[] = sentence.toLowerCase().split(' ');
    words.forEach(item => {
        if(item === word.toLowerCase()){
            count++;
        }
    });
    return count;
}

let wordCount: number = countWordOccurrences("Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor ", "lorem")

let wordCount2: number = countWordOccurrences(sentence, word);

console.log(`count = ${wordCount}`);

console.log(`count2 = ${wordCount2}`);