describe('testing theme', () => {
  it('testing theme toggle button on body', () => {
    cy.visit('/');
    cy.get('button.sc-dMnqAs').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)');
  });

  it('testing theme toggle button on header', () => {
    cy.visit('/');

    cy.get('button.sc-dMnqAs').click();

    cy.get('a.sc-eErDDp').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    );

    cy.get('.sc-daVtvr').should('have.css', 'filter', 'invert(1)');

    cy.get('button.sc-dMnqAs').should(
      'have.css',
      'color',
      'rgb(253, 253, 253)'
    );
    cy.get('header > .sc-ttuAC').should('have.css', 'color', 'rgb(0, 0, 0)');
  });

  it('testing theme toggle button on footer', () => {
    cy.visit('/');

    cy.get('button.sc-dMnqAs').click();

    cy.get('.sc-cpKBeH > :nth-child(1), .sc-cpKBeH > :nth-child(7)').each(
      ($element) => {
        cy.wrap($element).should(
          'have.css',
          'background-color',
          'rgba(0, 0, 0, 0)'
        );
      }
    );

    cy.get(
      '.sc-cpKBeH > :nth-child(2), .sc-cpKBeH > :nth-child(4), .sc-cpKBeH > :nth-child(6)'
    ).each(($element) => {
      cy.wrap($element).should(
        'have.css',
        'background-color',
        'rgb(243, 243, 243)'
      );
    });
  });

  it('test the localstorage auto light function from react to set theme', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        const mediaQueryList = {
          matches: true,
          addEventListener: () => {},
          removeEventListener: () => {},
        };

        cy.stub(win, 'matchMedia')
          .withArgs('(prefers-color-scheme: dark)')
          .returns(mediaQueryList);
      },
    });

    cy.get('.sc-kLHfhi').should('have.css', 'color', 'rgb(0, 0, 0)');
  });
});
