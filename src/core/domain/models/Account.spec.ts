import Account from "./Account"


//os testes unitários são feitos quando se quer testar um escopo específico, esse escopo geralmente é uma função
//basicamente o teste unitário testa uma lógica isoláda, uma observação importante é que caso nessa função haja algum valor vindo de uma api, é necessário mocar, ou seja, fornecer um backend falso
describe('Account', () => {
    it('Should create an account with values when instantiating normally', () => {
        const account = new Account();
        
        //verifica se a etapa acima foi executada
        expect(account.id).toBeUndefined();
    });
});

export{};