const searching = document.querySelector(".searching");
const displayField = document.querySelector(".displayField");




// const hello = Main()



// var searchBTN = document.getElementById("searchBTN")
searchBTN.addEventListener("click", () => {


    
        var sentence = document.getElementById("searching").value;
        document.getElementById("displayField").innerHTML = sentence;
    
 console.log(sentence)


})