describe('testing various UI elements', () => {
  it('test to delete the default account banner', () => {
    cy.visit('/login');

    cy.get('.sc-jfptmU').should('be.visible');

    cy.get('.sc-ioBKGh').click();

    cy.get('.sc-jfptmU').should('not.exist');
  });

  it('test the title of each page', () => {
    cy.visit('/');
    cy.title().should('eq', 'Accueil - Listify');

    cy.visit('/login');
    cy.title().should('eq', 'Connexion - Listify');

    cy.visit('/signup');
    cy.title().should('eq', 'Inscription - Listify');

    cy.visit('/privacy');
    cy.title().should('eq', 'Politique de confidentialité - Listify');

    cy.visit('/terms');
    cy.title().should('eq', "Conditions générales d'utilisation - Listify");

    cy.visit('/notfound');
    cy.title().should('eq', 'Page non trouvée - Listify');

    cy.setCookie('access_token', Cypress.env('TOKEN'));
    cy.visit('/todo');
    cy.title().should('eq', 'Todo - Listify');
  });
});
