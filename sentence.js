const searching = document.querySelector(".searching");
const displayField = document.querySelector(".displayField");
const hello = Main()
/**
 * hightlight words > 4
 *  - highlight word > any word in the sentence
 * - hide
 */

//  var checkbox2 = document.getElementById('select')
//  checkbox2.addEventListener('change', () => {





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
checkbox.addEventListener('change', () => {

    var sentence2 = document.getElementById("searching").value;

    const words2 = sentence2.split(" ");

    const highlightedWords = words2.map((word) => word.length >= 4 ? `<span class="highlight">${word}</span>` : '' //word
    );

    const joinedWords = highlightedWords.join(' ');
    document.getElementById("displayField").innerHTML = joinedWords;

    console.log(joinedWords);


})
var checkbox2 = document.getElementById('select')
checkbox2.addEventListener('change', () => {
    var checkbox2 = document.querySelector("input[name='hide2']:checked");
    document.getElementById("displayField").innerHTML = `<mark class = "highlight2">${hello.getLongestWord()}<mark/>` 
    var checkbox2 = document.querySelector("input[name='hide2']");
})