/// <reference types="cypress" />
import generateFakeUser from '../factories/userFactory';

describe('/sign-up', () => {
  const user = generateFakeUser();

  it('Should redirect to sign in page and show success message if sign up is sucessful', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Quero Começar')
      .click()
      .then(() => {
        cy.get('input[placeholder=Nome]').type(user.name);
        cy.get('input[placeholder=Email]').type(user.email);
        cy.get('input[placeholder=Senha]').type(user.password);
        cy.get("input[placeholder='Confirmar senha']").type(user.password);

        cy.contains('Cadastrar')
          .click()
          .then(() => {
            cy.contains('Tudo certo! Agora é só logar na sua conta.').should(
              'be.visible'
            );
          });
      });
  });
});
