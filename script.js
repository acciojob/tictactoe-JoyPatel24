() => {
  cy.visit(baseUrl + "/main.html");

  // Wait for the elements to become visible before interacting with them
  cy.get('#player1').should('be.visible').wait(1000);
  cy.get('#player1').type('Player1');

  cy.get('#player2').should('be.visible').wait(1000);
  cy.get('#player2').type('Player2');

  cy.get('#submit').click();

  cy.get('.message').should('contain', "Player1, you're up");

  cy.get('#1').click();
  cy.get('#1').should('contain', 'x');

  cy.get('.message').should('contain', "Player2, you're up");

  cy.get('#4').click();
  cy.get('#4').should('contain', 'o');
}
