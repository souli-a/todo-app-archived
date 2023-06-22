let serverURL;

if (process.env.NODE_ENV === 'dev') {
  serverURL = process.env.SERVER_LOCAL_URL;
}

if (process.env.NODE_ENV === 'prod') {
  serverURL = process.env.SERVER_BACK_END_URL;
}

describe('test security options from server response', () => {
  it('should have the expected cookie option set', () => {
    cy.visit('/login');

    cy.get('.sc-lfxVRD').type('exemple@email.fr');
    cy.get('.sc-aklqw').type('123456');

    cy.intercept('POST', `${serverURL}/api/users/login`).as('waitToConnect');

    cy.get('.sc-laEPQd').click();

    cy.wait('@waitToConnect').its('response.statusCode').should('eq', 200);

    cy.getCookie('access_token')
      .should('exist')
      .then((cookie) => {
        expect(cookie).to.have.property('sameSite', 'strict');
      });
  });

  it('should have the expected security headers set', () => {
    cy.visit('/login');

    cy.get('.sc-lfxVRD').type('exemple@email.fr');
    cy.get('.sc-aklqw').type('123456');

    cy.get('.sc-laEPQd').click();

    cy.intercept('GET', `${serverURL}/api/todos`).as('headers');

    cy.wait('@headers').then(({ response }) => {
      const headers = response.headers;

      expect(headers).to.have.property(
        'access-control-allow-credentials',
        'true'
      );
      expect(headers).to.have.property(
        'cross-origin-opener-policy',
        'same-origin'
      );
      expect(headers).to.have.property(
        'cross-origin-resource-policy',
        'same-origin'
      );
      expect(headers).to.have.property('origin-agent-cluster', '?1');
      expect(headers).to.have.property('referrer-policy', 'no-referrer');
      expect(headers).to.have.property(
        'strict-transport-security',
        'max-age=15552000; includeSubDomains'
      );
      expect(headers).to.have.property('x-content-type-options', 'nosniff');
      expect(headers).to.have.property('x-dns-prefetch-control', 'off');
      expect(headers).to.have.property('x-download-options', 'noopen');
      expect(headers).to.have.property('x-frame-options', 'SAMEORIGIN');
      expect(headers).to.have.property(
        'x-permitted-cross-domain-policies',
        'none'
      );
      expect(headers).to.have.property('x-xss-protection', '0');
      expect(headers).to.have.property(
        'content-security-policy',
        "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests"
      );
      expect(headers).to.not.have.property('x-powered-by');
      expect(headers).to.have.property(
        'access-control-allow-credentials',
        'true'
      );
      expect(headers).to.have.property(
        'access-control-allow-origin',
        process.env.LOCAL_URL
      );
    });
  });
});
