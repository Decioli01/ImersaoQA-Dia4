/// <reference types="cypress"/>

describe('US-012 : Cadastro de Membros', () => {

  beforeEach( () => {
    cy.visit('/')
  });

  it('Deve fazer o Cadastro de campos obrigatórios', () => {
    var email = `eduardo${Date.now()}@teste.com`
    cy.preencherCadastro('Eduardo', 'Decioli', email, '14998999899', 'Senh@T3ste')

    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it.only('Deve validar mensagem de erro nome inválido', () => {
    cy.preencherCadastro('Eduardo20', 'Decioli', 'eduardo@teste.com.br', '14998999899', 'Senh@T3ste')

    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })
})