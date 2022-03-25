const searching = document.querySelector(".searching");
const displayField = document.querySelector(".displayField");
const hello = Main()
/**
 * hightlight words > 4
 *  - highlight word > any word in the sentence
 * - hide
 */

searchBTN.addEventListener("click", () => {

    var sentence = document.getElementById("searching").value;

    const words = sentence.split(" ");
    document.getElementById('counter').innerHTML = words.length;

    console.log(sentence)

    // highlighting

    const highlightedWords = words.map((word) =>
        word.length >= 4 ? `<span class="highlight">${word}</span>` : word
    );
    let joinedWords = highlightedWords.join(' ');
    document.getElementById("displayField").innerHTML = joinedWords;

    console.log(joinedWords);




    const sortedList = [];

    sortedList.push(joinedWords);
    console.log(sortedList);

    if (localStorage['session'] === undefined) {
        localStorage.setItem('session', JSON.stringify(sortedList));
    } else {
        sortedList = JSON.parse(localStorage.getItem('session'))
    }

})



// Hiding
const hide = ()=> {
    let checkbox = document.getElementById('hiding').checked;
    let search = document.querySelector("#searching");
    console.log(search);

    if (checkbox) {
        document.getElementById("displayField").innerHTML = hello.hiding(search.value)
    } else {
        document.getElementById("displayField").innerHTML = search.value
    }
    console.log(search);
}

const highlight =()=> {
    var checkbox2 = document.getElementById('select').checked
    let highlight = document.querySelector("#searching");   
    if(checkbox2){
        document.getElementById("displayField").innerHTML = `<mark class = "highlight2">${hello.getLongestWord()}<mark/>`    
    }else{
        document.getElementById("displayField").innerHTML = highlight.value
        document.getElementById("searching").value;
    }
    

}