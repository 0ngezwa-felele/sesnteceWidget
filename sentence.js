const searching = document.querySelector(".searching");
const displayField = document.querySelector(".displayField");



searchBTN.addEventListener("click", () => {

    var sentence = document.getElementById("searching").value;
    document.getElementById("displayField").innerHTML = sentence;

    const wordLength = sentence.split(" ").length;
    document.getElementById('counter').innerHTML = wordLength;

    console.log(sentence)

    let highlight = ""

 
    
    
    
    
    
    
    
    
    
    
    
    const highlightedWords = wordLength.map((word) =>
        word.length >= 4 ? `<span class="highlight">${word}</span>` : word
    );
    const joinedWords = highlightedWords.join(' ');

    sentence.innerHTML = joinedWords;
    console.log(joinedWords);



})