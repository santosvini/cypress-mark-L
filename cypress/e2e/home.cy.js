/// <reference types="cypress" />

describe('Home' , () => {

  beforeEach(() => {
    cy.visit('/')
  })
  it('WebApp deve estar online', () => {
    cy.title().should('equal', 'Gerencie suas tarefas com Mark L')
  })

  it('Verifica a imagem da Mark L', () => {
    cy.get('img[alt="Mark Logo"]').should('be.visible')
  })
})