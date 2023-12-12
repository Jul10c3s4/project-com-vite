

//descreve um escopo de teste e define algumas configurações dos testes
describe("List Accounts Page", ()=>{
    //1#: testar estrutura base da página
    //2#: listar todas as contas na tabela quando a requisição for bem sucedida
    //3#: não listar nenhuma conta na tabela quando a requisição não for bem sucedida.
    //4#: redirecionar para a página de cadastro de contas


    beforeEach(()=> {
            cy.intercept('GET', 'http://localhost:3000/accounts', {
                //como o backend  não está rodando é necessário usar o atrbuto abaixo para rodar u  arquivo com um backend falso
                fixture: 'accounts.json',
            })
    })

    //quando a gente roda a aplicaçao normanmente ela roda na porta 5173, porem no teste é rodada em outra porta, diante disso é necessário especificar a porta da aplicação durante o teste ao accessar uma url pelo método visit, para isso é necessário inclementar o script '"prod": "npm run build && npm run preview"' no arquivo package.json e em seguida rodar o comando npm run prod para copiar o porta e colar na url
    
    //it é o caso de teste
    it('Should have title, create account button and table', () => {
        cy.visit('http://localhost:4173');
        cy.get('header h1').should('have.text', 'List Acount Page')
        cy.get('header button').should('have.text', 'Criar Conta');
        cy.get('table').should('exist');
        cy.get('table thead tr th').should('have.length', 5);
        cy.get('table thead tr th:nth-child(1)').should('have.text', 'ID');
        cy.get('table thead tr th:nth-child(2)').should('have.text', 'Nome');
        cy.get('table thead tr th:nth-child(3)').should('have.text', 'Data de Nascimento');
        cy.get('table thead tr th:nth-child(4)').should('have.text', 'CPF');
        cy.get('table thead tr th:nth-child(5)').should('have.text', 'E-mail');
    });

    it('should list accounts on table when fetching successfuly', () => {
        cy.visit('http://localhost:4173');
        cy.get('table tbody tr').should('have.length', 2);
        cy.get('table tbody tr:first-child td').should('have.length', 5)
    });

    it('should not list accounts when fetch fails', () => {
        cy.intercept('GET', 'http://localhost:3000/accounts', {
            statusCode: 400,
        });
        cy.visit('http://localhost:4173');
        cy.get('table tbody tr').should('have.length', 0);
    });

    it('should redirect to create accounts page when click on header button', () => {
        cy.visit('http://localhost:4173');
        cy.get('header button').click();
        cy.url().should('include', '/create');
    })
})