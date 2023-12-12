import Account from "../../../core/domain/models/Account";
import IAccountsAPI from "../../../core/interfaces/api/IAccountsAPI";
import { BackendClient } from "../BackendClient";

class AccountAPI extends IAccountsAPI{
    async fetch(): Promise<Account[]> {
        const response = await BackendClient.get<Array<Record<string, unknown>>>('/accounts');
        const result = response.data.map(Account.fromJSON)
        console.log(result);
        
        return result;
    }
  
    async create(account: Account): Promise<void> {
        await BackendClient.post('/accounts', account.toJSON())
    }

}

export default AccountAPI;