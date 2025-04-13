describe('Teste da Página de Cadastro', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/') 
    })
  
    it('Deve exibir o formulário de cadastro', () => {
      cy.get('#register-form').should('be.visible')
    })
  
    it('Deve conter 3 inputs com a classe .input-field', () => {
      cy.get('.input-field').should('have.length', 3)
    })
  
    it('Deve verificar o texto do botão de cadastro', () => {
      cy.get('#register-button').should('have.text', 'Cadastrar')
    })
  
    it('Deve selecionar o link de login pela classe', () => {
      cy.get('.login-link').should('be.visible')
    })
  
    it('Deve preencher o campo de nome com seletor type="text"', () => {
      cy.get('input[type="text"]').type('João da Silva')
    })
  
    it('Deve preencher o campo de e-mail com seletor type="email"', () => {
      cy.get('input[type="email"]').type('joao@email.com')
    })
  
    it('Deve preencher o campo de senha com seletor type="password"', () => {
      cy.get('input[type="password"]').type('senha123')
    })
  
    it('Deve clicar no botão de cadastro com seletor CSS', () => {
      cy.get('#register-button').click()
    })
  })
  