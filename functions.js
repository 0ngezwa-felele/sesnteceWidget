function Main() {
    var sentence = []
    var give = "";
    var Message;

    function setWords(name) {
        if (name != '') {
            if (!sentence.includes(char)) {
                sentence.push(char)
            } else {
                give = "Name greeted already"
            }
        }
    }

    function display(name){
        if(name!=""){
            return name
        }
        console.log(name);
    }

return{
    setWords,
    display
}



}