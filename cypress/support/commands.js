/// <reference types="cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const linkAPI = Cypress.env('apiUrl')
const localhost = '/'

Cypress.Commands.add('createTask', (taskName = '') =>  {

  cy.visit(localhost)

  cy.get('input[placeholder="Add a new Task"]').as('inputText')

  if (taskName !== '') {
    cy.get('@inputText')
      .should('be.visible')
      .type(taskName)
      .should('be.visible')
    }

  cy.contains('button', 'Create')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('isRequired', (targetMessage) => {
  cy.get('@inputText')
    .should('be.visible')
    .invoke('prop', 'validationMessage')
      .should((text) => {
        expect(targetMessage).to.eq(text)
      })
})

Cypress.Commands.add('removeTaskByname', (taskName) => {

  cy.request({
  url: `${Cypress.env('apiUrl')}/helper/tasks`,
  method: 'DELETE',
  body: { 
    name: taskName 
  }
}).then(response => {
    expect(response.status).to.equal(204)
  })
})

Cypress.Commands.add('postTask', (task) => {
  cy.request({
    url: `${Cypress.env('apiUrl')}/tasks`,
    method: 'POST',
    body: task,
    failOnStatusCode: false,
  }).then(response => {
      expect(response.status).to.equal(201)
  })
})