describe('User Login', () => {
  beforeEach(() => {
    cy.visit('/').wait(1000);
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should display an error message when login fails', () => {
    cy.intercept('POST', '**/social/auth/login', {
      statusCode: 401,
      body: {
        message:
          'Either your username was not found or your password is incorrect',
      },
    }).as('failedLogin');

    cy.get('#registerModal').should('be.visible');

    cy.get('#registerModal')
      .find('.modal-footer')
      .find('.btn-outline-success')
      .click();

    cy.get('#loginModal').should('be.visible');

    cy.get('#loginForm').should('be.visible');

    cy.get('#loginForm').find('#loginEmail').clear();
    cy.get('#loginForm')
      .find('#loginEmail')
      .type('invalid@noroff.no', { delay: 50 });

    cy.get('#loginForm').find('#loginPassword').clear();
    cy.get('#loginForm')
      .find('#loginPassword')
      .type('invalid123', { delay: 50 });

    cy.get('#loginForm').find('button[type="submit"]').click();

    cy.wait(1000);

    cy.on('window:alert', (text) => {
      expect(text).to.contains(
        'Either your username was not found or your password is incorrect',
      );
    });

    cy.wait('@failedLogin');
  });
});
