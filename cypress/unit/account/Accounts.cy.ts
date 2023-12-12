import Account from '../../../src/core/domain/models/Account';

describe('Account', () => {
    //criar uma conta vazia
    //criar uma conta utilizando o método fromJSON
    //criar uma conta utilizando o método fromFrom
    //exportar uma conta criada com o método toJSON

    it('should create an empty account when using the normal constructor', () => {
        const account = new Account();

        expect(account.id).undefined;
        expect(account.name).empty;
        expect(account.birthDate).empty;
        expect(account.cpf).empty;
        expect(account.email).empty;
    })

    it('should create an account when passing a valid json to fromJSON factorty', () => {
        const data = {
            id: 1,
            name: 'User',
            birth_date: '2003-01-04',
            cpf: '13223234465',
            email: 'email@gmail.com'
        };

        const account = Account.fromJSON(data);

        expect(account.id).eq(data['id']);
        expect(account.name).eq(data['name']);
        expect(account.birthDate).eq(data['birth_date']);
        expect(account.cpf).eq(data['cpf']);
        expect(account.email).eq(data['email']);
    })
});