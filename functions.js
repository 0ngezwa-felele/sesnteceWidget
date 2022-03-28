function Main(){
    
   let arr = []
    
   let adding = sentence =>{
   arr.push(sentence) 
   return arr
}
    const getLongestWord = (words) => {
        var words = document.getElementById("searching").value;
        const longWord = words.split(" ")
        let longestWord = "";
        for (let index = 0; index < longWord.length; index++) {
            if (longWord[index].length > longestWord.length) {
                longestWord = longWord[index]
                console.log(longestWord);
            }
        }
        return longestWord
    }
    const hiding = sentence2 => {
        const words2 = sentence2.split(" ")
        const highlightedWords = words2.map((word) => word.length >= 4 ?
            `<span class="highlight">${word}</span>` : ''
        );
        const joinedWords = highlightedWords.join(' ');
        return joinedWords
    }


    return {
        getLongestWord,
        hiding,
        adding
    }

}