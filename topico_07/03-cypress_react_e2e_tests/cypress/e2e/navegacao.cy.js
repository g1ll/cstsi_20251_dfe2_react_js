/* eslint-disable no-undef */
/// <reference types="cypress" />

const URL = 'http://localhost:5173/';
const DELAY = 2000;
let busca = 'Test';
let regexBusca = /test/i


context('Actions', () => {
  // it("Aguarda 2s para iniciar os testes: ", ()=> cy.wait(2000)); 
  beforeEach(() => {
    cy.wait(DELAY )
  })

  afterEach(() => {
    cy.wait(DELAY); // waits 2 seconds after each test
  });

  describe('Navegação em item pesquisado e volta para a home!', () => {
    
    cy.visit(URL)
    it(`Filtra pelo produto ${busca}`, () => {
      cy.get('input[type=search]').type(busca)
      cy.get('input[type=search]').should('have.value', busca)
      cy.wait(1000);
      cy.get('form button').click()
      cy.get('main>div>div>div>div>a')
        .find('div>h3')
        .invoke('text')
        .should('match', regexBusca)
    });
    
    it(`Acessa o produto filtrado por ${busca}`, () => {
      cy.wait(2000);
      cy.get('main>div>div>div>div>a')
        .first().click()
      cy.wait(2000);
      cy.get('main>div>div>div>a')
        .find('div>h3')
        .invoke('text')
        .should('match', regexBusca)
    });
    it(`Volta para a página inicial`, () => {
      cy.wait(1000);
      cy.get('main>div>a')
        .should('have.text', 'Voltar')
        .click()
    });
  });
});