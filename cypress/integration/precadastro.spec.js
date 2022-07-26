/// <reference types="cypress" />
var faker = require('faker');

describe('funcionalidade pré casdastro', () => {
    
   beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   });
    
   it('Deve completar o pré cadastro com sucesso' , () =>{
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type('teste@teste.com')
    cy.get(':nth-child(4) > .button').click('')

    cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain' , 'A partir do painel de controle de sua conta')
    
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(faker.name.firstname())
    cy.get('#account_last_name').type(faker.name.lastname())
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.') 
   })
});