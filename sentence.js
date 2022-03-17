const searching = document.querySelector(".searching");
const displayField = document.querySelector(".displayField");



searchBTN.addEventListener("click", () => {

    var sentence = document.getElementById("searching").value;

    const words = sentence.split(" ");
    console.log(words);
    document.getElementById('counter').innerHTML = words.length;

    console.log(sentence)

    // highlighting

    const highlightedWords = words.map((word) =>
        word.length >= 4 ? `<span class="highlight">${word}</span>` : word
    );
    const joinedWords = highlightedWords.join(' ');
    document.getElementById("displayField").innerHTML = joinedWords;

    console.log(joinedWords);



})
// Hiding
var checkbox = document.getElementById('hiding')
checkbox.addEventListener('change', (shortWords) => {

    var sentence2 = document.getElementById("searching").value;

    const words2 = sentence2.split(" ");

    const highlightedWords = words2.map((word) =>
        word.length >= 4 ? `<span class="highlight">${word}</span>` : '' //word
    );
    
    const joinedWords = highlightedWords.join(' ');
    document.getElementById("displayField").innerHTML = joinedWords;

    console.log(joinedWords);


    // console.log(shortWords);
})