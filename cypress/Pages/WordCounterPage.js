class WordCounterPage {

    selectors = {
        textArea: '#box',
        counterSummary: '[data-tr-detail="words_characters"]',
        keywordRows: '#kwd-accordion-data tbody tr'
    };

    visit() {
        cy.visit('/');
    }

    writeText(text) {
        cy.get(this.selectors.textArea)
            .should('be.visible')
            .clear()
            .type(text);
    }
assertCounters(expectedWords, expectedCharacters) {
    cy.get(this.selectors.counterSummary)
        .should(($counter) => {

            const summary = $counter.text();

            const [, words, characters] =
                summary.match(/(\d+)\s+word[s]?\s+(\d+)/i);

            if (expectedWords !== undefined) {
                expect(Number(words)).to.eq(expectedWords);
            }

            if (expectedCharacters !== undefined) {
                expect(Number(characters)).to.eq(expectedCharacters);
            }

        });
}

getTopKeywords(limit = 3) {

    return cy.get('#kwd-accordion-data .list-group-item')
        .should('have.length.at.least', limit)
        .then(($items) => {

            return [...$items]
                .slice(0, limit)
                .map(item => {

                    const keyword = item
                        .querySelector('.word')
                        .innerText
                        .trim()
                        .toLowerCase();

                    const repetitions = Number(
                        item
                            .querySelector('.badge')
                            .innerText
                            .match(/\d+/)[0]
                    );

                    return {
                        keyword,
                        repetitions
                    };

                });

        });

}

}

export default new WordCounterPage();