describe('User Login Error Message', () => {
  beforeEach(() => {
    cy.visit('/').wait(1000);
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should display a custom error message for invalid credentials, and test should fail', () => {
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
      .type('invalid@email.com', { delay: 50 });

    cy.get('#loginForm').find('#loginPassword').clear();
    cy.get('#loginForm')
      .find('#loginPassword')
      .type('invalid123', { delay: 50 });

    cy.get('#loginForm').find('button[type="submit"]').click();

    cy.wait(1000);

    cy.get('.error-message').should('contain', 'Invalid email address.');
  });
});
