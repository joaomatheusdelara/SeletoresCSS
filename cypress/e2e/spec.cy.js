describe('Formulário de Cadastro', () => {
  beforeEach(() => {
  
    cy.visit('http://127.0.0.1:5500/formulario.html')
  })

  it('Preenche os campos e envia o formulário', () => {
    // Preencher os campos
    cy.get('#nome').type('João Silva').should('have.value', 'João Silva')
    cy.get('#email').type('joao.silva@email.com').should('have.value', 'joao.silva@email.com')
    cy.get('#telefone').type('1199999999').should('have.value', '1199999999')
    cy.get('#senha').type('Teste@123').should('have.value', 'Teste@123')
    cy.get('#confirma_senha').type('Teste@123').should('have.value', 'Teste@123')

    // Envia o formulário
    cy.get('form').submit()


    cy.url().should('include', 'cadastro.html')
  })
})
