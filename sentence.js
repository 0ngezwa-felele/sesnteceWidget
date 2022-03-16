const searching = document.querySelector(".searching");
const displayField = document.querySelector(".displayField");



searchBTN.addEventListener("click", () => {

    var sentence = document.getElementById("searching").value;
    document.getElementById("displayField").innerHTML = sentence;

    var wordLength = sentence.split(" ").length;
    document.getElementById('counter').innerHTML = wordLength;

    console.log(sentence)


})