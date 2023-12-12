import AccountsAPI from ".";
import { BackendClient } from "../BackendClient";
import jsonDatabase from "../../../../database.json"


const api = new AccountsAPI();


//O describe geralmente é usada para testar métodos específicos
describe("AccountsAPI.fetch", () => {
  const accountsListMock = [
    {
      "id": 1,
      "name": "user 1",
      "birth_date": "2000-01-01",
      "cpf": "343435453434",
      "email": "email@dominio.com"
    },
    {
      "name": "user 2",
      "birth_date": "2023-04-03",
      "cpf": "3545435435",
      "email": "jcso2@aluno.ifal.edu.br",
      "id": 2
    }
  ];
  const getSpy = jest.spyOn(BackendClient, "get");
  afterEach(()=>{
    getSpy.mockClear();
  })
  it("should return a list of accounts when requesting the BackendAPI", async () => {
    getSpy.mockImplementationOnce((url: string, config:any) =>{
      return Promise.resolve({data: accountsListMock})
    })

    const accounts = await api.fetch();

    expect(accounts).not.toBeUndefined();
    expect(accounts.length).toBe(2);
    const account = accounts[0];
    expect(account.id).not.toBeUndefined();
    expect(account.birthDate).not.toBeUndefined();
    expect(account.email).not.toBeUndefined();
    expect(account.cpf).not.toBeUndefined();
  });

  it("should throw an error when requesting the BackendAPI for accounts", () => {
    
  });
})

describe("AccountsAPI.create", () => {
    it("should create an account when providing a valid account", ()=> {
      
    });
    it("should throw an error when trying to create an account", ()=> {
      
    })
})