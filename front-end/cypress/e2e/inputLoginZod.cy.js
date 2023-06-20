describe('testing input on login', () => {
  it('test "email/password required" UI message', () => {
    cy.visit('/login');

    cy.get('.sc-laEPQd').click();

    cy.contains('Mot de passe obligatoire').should('be.visible');

    cy.contains('Email obligatoire').should('be.visible');
  });

  it('test "valid email required" UI message', () => {
    cy.visit('/login');

    cy.get('.sc-lfxVRD').type('notValid@abc');

    cy.get('.sc-laEPQd').click();

    cy.contains('Email valide obligatoire').should('be.visible');
  });

  it('test "6 characters minimum required" on password UI message', () => {
    cy.visit('/login');

    cy.get('.sc-aklqw').type('123');

    cy.get('.sc-laEPQd').click();

    cy.contains('6 caractères au minimum').should('be.visible');
  });

  it('test "25 characters maximum" on password UI message', () => {
    cy.visit('/login');

    cy.get('.sc-aklqw').type('xxxxxxxxxxxxxxxxxxxxxxxxxx');

    cy.get('.sc-laEPQd').click();

    cy.contains('25 caractères au maximum').should('be.visible');
  });

  it('test toggle button password clear', () => {
    cy.visit('/login');

    cy.get('.sc-aklqw').should('have.attr', 'type', 'password');

    cy.get('.sc-kyWvMF > .sc-dMnqAs').click();

    cy.get('.sc-aklqw').should('have.attr', 'type', 'text');
  });
});
