describe('Teste completo de esperas e assercoes', () => {
    it('Devo acessar a pagina, aguardar os elementos', () => {
        
    cy.visit('https://example.cypress.io/todo');  
    
   cy.get('.todo-list').sould('be.visible');

   cy.get('.new-todo').type('Estudar Cypress{enter}');
   cy.get('.todo-list li').should('contain.text', 'Estudar Cypress');

   cy.get('.todo-list li').last().find('.toggle').click();
   cy.get('.todo-list li').last().should('have.class', 'completed');

   cy.get('.todo-list li').should('have.length', 3);

   cy.contains('.todo-list li', 'Estudar Cypress').should('be.visible');
});
})