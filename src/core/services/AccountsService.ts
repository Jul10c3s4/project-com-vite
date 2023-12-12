import Account from "../domain/models/Account";
import IAccountsService from "../interfaces/services/IAccountsService";

class AccountsService extends IAccountsService{
    fetch(): Promise<Account[]> {
        return this.api.fetch();
    }

    create(account: Account): Promise<void> {
        return this.api.create(account);
    }
}

export default AccountsService;