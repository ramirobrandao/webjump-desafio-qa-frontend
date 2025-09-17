// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, senha) => {

    //pegar o nome dos elementos e preenche com um texto definido
    cy.get('[id="email"]').type(email);
    cy.get('[id="pass"]').type(senha);

    //para clicar em um botão
    cy.contains('button', 'Sign In').click();
})