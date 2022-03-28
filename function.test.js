
describe('words-widget tests', function () {

    it('should be able to display sentence on the screen', () => {

        let displaying = Main();
        let words = displaying.adding("sentence")

        assert.equal(words, displaying.getting("words"));
    });

    it('should be able to hide words longer than 4 characters', () => {
        const instance = Main()


        assert.equal(words, instance.hiding());
    });




    it('should be able to highlight the longest word in the sentence', () => {



        assert.equal();
    });



})     