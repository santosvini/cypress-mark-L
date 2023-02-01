/// <reference types="cypress" />

describe('Tasks', () => {

  let testData;
  
  before(() => {
    cy.fixture('tasks')
      .then(t => {
        testData = t
      })
  })

  context('Cadastro', () => {
    it('Deve cadastrar uma nova tarefa', () => {
  
      const taskName = 'Ler um livro de NodeJS'
  
      cy.removeTaskByname(taskName)
      cy.createTask(taskName)
  
      cy.contains('main div p', taskName)
        .should('be.visible')
    })
  
    it('Não deve cadastrar tarefa duplicada', () => {
  
      const task  = testData.dup
  
      cy.removeTaskByname(task.name)
      cy.postTask(task)
      cy.createTask(task.name)
  
      cy.get('.swal2-html-container')
        .should('be.visible')
        .should('have.text', 'Task already exists!')
      
      cy.get('.swal2-confirm')
        .click()
    })
  
    it('Campo obrigatório', () => {
      cy.createTask()
      cy.isRequired('This is a required field')
    })
  })

  context('Atualização', () => {
    const task = { 
      name: 'Dar banho no Bennie',
      is_done: false
    }
    it('Deve concluir uma tarefa', () => {
      cy.visit('/')

      cy.removeTaskByname(task.name)
      cy.postTask(task)
      
      cy.contains('p', task.name)
        .parent()
        .find('button[class*=ItemToggle]')
        .click()

      cy.contains('p', task.name)
        .should('be.visible')
        //.should('have.css', 'text-decoration-line', 'line-through')
    })

  })

  context('Exclusão', () => {
    const task = { 
      name: 'Fazer caminhada',
      is_done: false
    }
    it('Deve excluir uma tarefa', () => {
      cy.visit('/')

      cy.removeTaskByname(task.name)
      cy.postTask(task)
      
      cy.contains('p', task.name)
        .parent()
        .find('button[class*=ItemDelete]')
        .click()
        .should('not.exist')
    })
    
    Cypress._.times(4, () => {
      it('Deve excluir uma ou mais tarefas cadastradas', () => {
        cy.visit('/')
  
        cy.removeTaskByname(task.name)
        cy.postTask(task)
        
        cy.contains('p', task.name)
          .parent()
          .find('button[class*=ItemDelete]')
          .click()
          .should('not.exist')
      })

    })
    
  })

})