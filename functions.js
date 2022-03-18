function Main() {
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

    return {
        getLongestWord
    }

}


// const stringLength = longWord.map(longWord => longWord.length)
        // const maxLength = Math.max(...stringLength)
        // var results = longWord.find(longWord => longWord.length === maxLength)
        // console.log(results);
        // results.innerHTML = 