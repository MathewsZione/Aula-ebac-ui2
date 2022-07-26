/// <reference types="cypress" />

context ('funcionalidadr login', () =>{

beforeEach(() => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
});

afterEach(() => {
    cy.screenshot()
});

it('Deve fazer o login com sucesso' , () =>{
cy.get('#username').type('aluno_ebac@teste.com')
cy.get('#password').type('teste@teste.com')
cy.get('.woocommerce-form > .button') .click('')

cy.get('.page-title').should('contain' , 'Minha conta')

})

it('Deve exibir uma mensagem de erro ao inserir usuario invalido', ()=>{
    cy.get('#username').type('aluno@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button') .click('')

    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
})

it('Deve exibir uma mensgem de erro ao enserir senha invalida', ()=>{
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('testeteste.com')
    cy.get('.woocommerce-form > .button') .click('')  
    
    cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')
})

})