describe('testing auth', () => {
  it('test the server response with an email already registered', () => {
    cy.visit('/signup');

    cy.get('.sc-lfxVRD').type('exemple@email.fr');

    cy.get(':nth-child(3) > .sc-kyWvMF > .sc-aklqw').type('123456');
    cy.get(':nth-child(4) > .sc-kyWvMF > .sc-aklqw').type('123456');

    cy.intercept({
      method: 'POST',
      url: '/api/users/signup',
    }).as('signupResponse');

    cy.get('.sc-laEPQd').click();

    cy.wait('@signupResponse').its('response.statusCode').should('eq', 409);

    cy.contains('Email déjà utilisé').should('be.visible');
  });

  it('test the server response with correct signup credentials', () => {
    cy.visit('/signup');

    cy.get('.sc-lfxVRD').type('cypress@email.fr');

    cy.get(':nth-child(3) > .sc-kyWvMF > .sc-aklqw').type('cypress123');
    cy.get(':nth-child(4) > .sc-kyWvMF > .sc-aklqw').type('cypress123');

    cy.intercept({
      method: 'POST',
      url: '/api/users/signup',
    }).as('signupResponse');

    cy.get('.sc-laEPQd').click();

    cy.wait('@signupResponse').its('response.statusCode').should('eq', 201);
  });

  it('test the server response with correct login credentials', () => {
    cy.visit('/login');

    cy.get('.sc-lfxVRD').type('exemple@email.fr');

    cy.get('.sc-aklqw').type('123456');

    cy.intercept({
      method: 'POST',
      url: '/api/users/login',
    }).as('loginResponse');

    cy.get('.sc-laEPQd').click();

    cy.wait('@loginResponse').its('response.statusCode').should('eq', 200);
  });

  it('test the UI with server response with invalid login password', () => {
    cy.visit('/login');

    cy.get('.sc-lfxVRD').type('exemple@email.fr');

    cy.get('.sc-aklqw').type('1234567');

    cy.intercept({
      method: 'POST',
      url: '/api/users/login',
    }).as('loginResponse');

    cy.get('.sc-laEPQd').click();

    cy.wait('@loginResponse').its('response.statusCode').should('eq', 401);

    cy.contains('Mot de passe incorrect').should('be.visible');
  });

  it('test the UI with server response with invalid login email', () => {
    cy.visit('/login');

    cy.get('.sc-lfxVRD').type('emailThatDontExist@email.fr');

    cy.get('.sc-aklqw').type('123456');

    cy.intercept({
      method: 'POST',
      url: '/api/users/login',
    }).as('loginResponse');

    cy.get('.sc-laEPQd').click();

    cy.wait('@loginResponse').its('response.statusCode').should('eq', 404);

    cy.contains('Email inexistant').should('be.visible');
  });

  it('test the auth cookie response of the server', () => {
    cy.visit('/login');

    cy.get('.sc-lfxVRD').type('exemple@email.fr');

    cy.get('.sc-aklqw').type('123456');

    cy.intercept({
      method: 'POST',
      url: '/api/users/login',
    }).as('loginResponse');

    cy.get('.sc-laEPQd').click();

    cy.wait('@loginResponse').then(() => {
      cy.getCookie('access_token').should('exist');
    });
  });
});
