/// <reference types="cypress"/>

describe('US-012 : Cadastro de Membros', () => {
  it('Deve fazer o Cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Eduardo')
    cy.get('#signup-lastname').type('Decioli')
    cy.get('#signup-email').type('teste@teste1.com.br')
    cy.get('#signup-phone').type('14998999899')
    cy.get('#signup-password').type('Senh@T3ste2025')
    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})