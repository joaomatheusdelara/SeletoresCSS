describe('Teste completo de esperas e assercoes', () => {
  it('Devo acessar a pagina, aguardar os elementos', () => {
  //visita o site de exemplo
  cy.visit('https://example.cypress.io/todo');  
  
  //epera implicita: verifica se a lista de tarefas está visivel
 cy.get('.todo-list li').should('be.visible');

 cy.get('.new-todo').type('Estudar Cypress{enter}');
 cy.get('.todo-list li').should('contain.text', 'Estudar Cypress');

 //Marca a tarefa como concluida e verifica a mesma.
 cy.get('.todo-list li').last().find('.toggle').click();
 cy.get('.todo-list li').last().should('have.class', 'completed');

 //Verifica a quantidade de item na lista
 cy.get('.todo-list li').should('have.length', 3);

 //Verifica se um item especifico está lista
 cy.contains('.todo-list li', 'Estudar Cypress').should('be.visible');
});
})