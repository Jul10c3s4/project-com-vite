import Account from "../../domain/models/Account";

// A classe de service serve de intermediário entre a camada alta e baixa de implementação, a camada baixa é a api, logo ela ajuda e gerenciar melhor a comunição entre as duas camadas
abstract class IAccountsAPI {
    abstract fetch(): Promise<Array<Account>>
    abstract create(account: Account): Promise<void>;
}

export default IAccountsAPI;