/// <reference types="Cypress" />

context('Creating a new Dialog', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('COMPOSER_URL'));
    cy.copyBot('ToDoBot', 'ToDoBotCopy');
    cy.get('[data-testid="LeftNav-CommandBarButtonDesign Flow"]').click();
  });

  it('can create a new dialog from toolbar', () => {
    cy.getByText('Add').click();
    cy.get('input[data-testid="NewDialogName"]').type('__TestNewDialog1');
    cy.get('input[data-testid="NewDialogName"]').type('{enter}');
    cy.get('[data-testid="ProjectTree"]').within(() => {
      cy.getByText('__TestNewDialog1').should('exist');
    });
  });

  it('can create a new dialog from project tree', () => {
    cy.getByText('Add ..').click();
    cy.get('input[data-testid="NewDialogName"]').type('__TestNewDialog2');
    cy.get('input[data-testid="NewDialogName"]').type('{enter}');
    cy.get('[data-testid="ProjectTree"]').within(() => {
      cy.getByText('__TestNewDialog2').should('exist');
    });
  });
});