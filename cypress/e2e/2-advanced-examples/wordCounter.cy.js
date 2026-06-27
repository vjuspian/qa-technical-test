import WordCounterPage from '../../Pages/WordCounterPage';

describe('Word Counter', () => {

    beforeEach(() => {
       cy.visit('/');
       cy.get('body').should('be.visible');
    });
    
it('should display the correct number of characters', () => {
    const text = `Hi, this is a test to see how many characters this text has.`;
    const expectedCharacters = text.length;
    WordCounterPage.writeText(text);
    WordCounterPage.assertCounters(undefined,expectedCharacters);

});

it('should display the correct number of words', () => {
        const text = 'Hi, this is a test to see how many words this text has.';
        const expectedWords = text
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .length;
    WordCounterPage.writeText(text);
    WordCounterPage.assertCounters(expectedWords,undefined);
}); 
it('should display the 3 most repeated words with the correct number of repetitions', () => {

    const text =
        'cypress cypress cypress testing javascript cypress cypress';

    const expectedKeywords = Object.entries(

        text
            .toLowerCase()
            .split(/\s+/)
            .reduce((acc, word) => {

                acc[word] = (acc[word] || 0) + 1;

                return acc;

            }, {})

    )
        .map(([keyword, repetitions]) => ({
            keyword,
            repetitions
        }))
        .sort((a, b) => b.repetitions - a.repetitions)
        .slice(0, 3);

    WordCounterPage.writeText(text);

    WordCounterPage
        .getTopKeywords()
        .should('deep.equal', expectedKeywords);

});

});