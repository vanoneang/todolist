/// <reference types="cypress" />

describe('When I visit home page', () => {
  beforeEach(() => {
    cy.server();
    cy.visit('/');
  })

  it("Should be two links to different pages", () => {
    cy.get('[data-test="link-of-upload"]').contains('Upload File')
    cy.get('[data-test="link-of-todo"]').contains('Todo List')
  })

  it("Should redirect to todo page", () => {
    cy.get('[data-test="link-of-todo"]').click()
    cy.url().should('includes', '/todo')
  })
})