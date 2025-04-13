describe('Teste de Automação do Formulário de Cadastro', () => {
  beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/formulario.html');
  });

  it('Preencher e validar o formulário de cadastro', () => {

      cy.get('#nome').type('Larissa Winkler');
      cy.get('#email').type('larissa.winkler@gmail.com');
      cy.get('#telefone').type('9999999999');
      cy.get('#senha').type('teste@111');
      cy.get('#confirma_senha').type('teste@111');

      cy.get('#nome').should('have.value', 'Larissa Winkler');
      cy.get('#email').should('have.value', 'larissa.winkler@gmail.com');
      cy.get('#telefone').should('have.value', '9999999999');
      cy.get('#senha').should('have.value', 'teste@111');
      cy.get('#confirma_senha').should('have.value', 'teste@111');

      cy.get('form').submit();

      cy.on('window:alert', (txt) => {
          expect(txt).to.contains('Cadastro realizado com sucesso');
      });
  });
});
