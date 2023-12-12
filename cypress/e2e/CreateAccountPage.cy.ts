import { should } from "chai";
import Account from "core/domain/models/Account";

const AccountData = {
    "id": 1,
    "name": "user 1",
    "birth_date": "2000-01-01",
    "cpf": "343435453434",
    "email": "email@dominio.com"
  };

describe("Create Accounts Page", () => {
    it('should have title, list accounts button and create account form', () => {
        cy.visit('http://localhost:4173/create');
        cy.get('header h1').should('have.text', 'Criar Conta');
        cy.get('header button').should('have.text', 'Ver contas cadastradas');
        cy.get('form').should('exist');
        cy.get('fieldset > div').should('have.length', 4);
        cy.get('fieldset button').should('exist');
    })

    it('should create an account when filling the form correctly', () => {
        cy.intercept('POST', 'http://localhost:3000/accounts', {
            body: AccountData,
        });
        cy.visit('http://localhost:4173/create');
        cy.get('form fieldset input[name="name"]').type(AccountData['name']);
        cy.get('form fieldset input[name="birth-date"]').type(AccountData['birth_date']);
        cy.get('form fieldset input[name="cpf"]').type(AccountData['cpf']);
        cy.get('form fieldset input[name="email"]').type(AccountData['email']);
        cy.get('form fieldset button').click();
        cy.url().should('eq', 'http://localhost:4173/')
    })

    it('should try to create an account when filling the form correctly, but without the email', () => {
        cy.intercept('POST', 'http://localhost:3000/accounts', {
            body: AccountData,
        });
        cy.visit('http://localhost:4173/create');
        cy.get('form fieldset input[name="name"]').type(AccountData['name']);
        cy.get('form fieldset input[name="birth-date"]').type(AccountData['birth_date']);
        cy.get('form fieldset input[name="cpf"]').type(AccountData['cpf']);
        cy.get('form fieldset button').click();
    })
})