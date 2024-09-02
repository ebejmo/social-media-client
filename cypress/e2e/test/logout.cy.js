describe('User Logout', () => {
  beforeEach(() => {
    cy.visit('/').wait(1000);
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('allows a user to log in and then log out, verifying the logout process', () => {
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
      .type('oscar21@noroff.no', { delay: 50 });

    cy.get('#loginForm').find('#loginPassword').clear();
    cy.get('#loginForm')
      .find('#loginPassword')
      .type('oscar2121', { delay: 50 });

    cy.get('#loginForm').find('button[type="submit"]').click();

    cy.wait(1000);

    cy.get('button[data-auth="logout"]').should('be.visible');

    cy.get('button[data-auth="logout"]').click();

    cy.get('#registerModal').should('be.visible');
  });
});
