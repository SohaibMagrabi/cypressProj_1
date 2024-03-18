/// <reference types ="cypress"/>
it('google testing by sohaib', () => {
    cy.visit('https://google.com')
    cy.contains('Google').click
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click
    cy.get('#APjFqb').type('hello  sohaib{Enter}')

})