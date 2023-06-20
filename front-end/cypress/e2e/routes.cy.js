describe('testing routes', () => {
  it('test all individual routes available without authentication', () => {
    cy.visit('/');
    cy.url().should('include', '/');

    cy.visit('/todo');
    cy.url().should('include', '/signup');

    cy.visit('/signup');
    cy.url().should('include', '/signup');

    cy.visit('/login');
    cy.url().should('include', '/login');

    cy.visit('/terms');
    cy.url().should('include', '/terms');

    cy.visit('/privacy');
    cy.url().should('include', '/privacy');

    cy.visit('/pageThatDontExist');
    cy.url().should('include', '/notfound');
  });

  it('testing button redirection from header/footer components without authentication', () => {
    cy.visit('/');
    cy.get('a.sc-eErDDp').click();
    cy.url().should('include', '/login');

    cy.visit('/');
    cy.get('.sc-hbwYeq > [href="/signup"]').click();
    cy.url().should('include', '/signup');

    cy.visit('/');
    cy.get('.sc-daVtvr').click();
    cy.url().should('include', '/');

    cy.visit('/');
    cy.get('[href="/privacy"]').click();
    cy.url().should('include', '/privacy');

    cy.visit('/');
    cy.get('[href="/terms"]').click();
    cy.url().should('include', '/terms');
  });

  it('test all individual routes available with authentication', () => {
    cy.setCookie('access_token', Cypress.env('TOKEN'));

    cy.visit('/');
    cy.url().should('include', '/todo');

    cy.visit('/signup');
    cy.url().should('include', '/todo');

    cy.visit('/login');
    cy.url().should('include', '/todo');

    cy.visit('/terms');
    cy.url().should('include', '/terms');

    cy.visit('/privacy');
    cy.url().should('include', '/privacy');

    cy.visit('/pageThatDontExist');
    cy.url().should('include', '/todo');
  });

  it('test the signup button redirection on home page', () => {
    cy.visit('/');
    cy.get('.sc-kLHfhi > .sc-dMnqAs').click();
    cy.url().should('include', '/signup');
  });
});
