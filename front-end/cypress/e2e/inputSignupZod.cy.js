describe('testing input on signup', () => {
  it('test "email/password/confirmation required" UI message', () => {
    cy.visit('/signup');

    cy.get('.sc-laEPQd').click();

    cy.contains('Email obligatoire').should('be.visible');
    cy.contains('Mot de passe obligatoire').should('be.visible');
    cy.contains('Confirmation obligatoire').should('be.visible');
  });

  it('test "valid email required" UI message', () => {
    cy.visit('/signup');

    cy.get('.sc-lfxVRD').type('notValid@abc');

    cy.get('.sc-laEPQd').click();

    cy.contains('Email valide obligatoire').should('be.visible');
  });

  it('test "10 characters minimum required" on email UI message', () => {
    cy.visit('/signup');

    cy.get('.sc-lfxVRD').type('x@x.fr');

    cy.get('.sc-laEPQd').click();

    cy.contains('10 caractères au minimum').should('be.visible');
  });

  it('test "40 characters minimum required" on email UI message', () => {
    cy.visit('/signup');

    cy.get('.sc-lfxVRD').type(
      'xxxxxxxxxxxxxxxxxxxxxxxxxxxx@xxxxxxxxxxxxxxxxxxxxxxxxxxxx.fr'
    );

    cy.get('.sc-laEPQd').click();

    cy.contains('40 caractères au maximum').should('be.visible');
  });

  it('test "6 characters minimum required" on password UI message', () => {
    cy.visit('/signup');

    cy.get(':nth-child(3) > .sc-kyWvMF > .sc-aklqw').type('123');
    cy.get(':nth-child(4) > .sc-kyWvMF > .sc-aklqw').type('123');

    cy.get('.sc-laEPQd').click();

    cy.contains('6 caractères au minimum').should('be.visible');
    cy.contains('6 caractères au minimum').should('be.visible');
  });

  it('test "25 characters maximum" on password UI message', () => {
    cy.visit('/signup');

    cy.get(':nth-child(3) > .sc-kyWvMF > .sc-aklqw').type(
      'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    );
    cy.get(':nth-child(4) > .sc-kyWvMF > .sc-aklqw').type(
      'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    );

    cy.get('.sc-laEPQd').click();

    cy.contains('25 caractères au maximum').should('be.visible');
    cy.contains('25 caractères au maximum').should('be.visible');
  });

  it('test "passwords must be the same" UI message', () => {
    cy.visit('/signup');

    cy.get(':nth-child(3) > .sc-kyWvMF > .sc-aklqw').type('123456');
    cy.get(':nth-child(4) > .sc-kyWvMF > .sc-aklqw').type('654321');

    cy.get('.sc-laEPQd').click();

    cy.contains('Les deux doivent être identiques').should('be.visible');
  });

  it('test toggle button password clear', () => {
    cy.visit('/signup');

    cy.get(':nth-child(3) > .sc-kyWvMF > .sc-aklqw').should(
      'have.attr',
      'type',
      'password'
    );

    cy.get(':nth-child(4) > .sc-kyWvMF > .sc-aklqw').should(
      'have.attr',
      'type',
      'password'
    );

    cy.get(':nth-child(3) > .sc-kyWvMF > .sc-dMnqAs').click();
    cy.get(':nth-child(4) > .sc-kyWvMF > .sc-dMnqAs').click();

    cy.get(':nth-child(3) > .sc-kyWvMF > .sc-aklqw').should(
      'have.attr',
      'type',
      'text'
    );

    cy.get(':nth-child(4) > .sc-kyWvMF > .sc-aklqw').should(
      'have.attr',
      'type',
      'text'
    );
  });
});
