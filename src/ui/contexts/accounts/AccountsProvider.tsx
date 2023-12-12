import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import Account from "../../../core/domain/models/Account";
import AccountsService from "../../../core/services/AccountsService";
import AccountsAPI from "../../../data/api/AccountsAPI";
import { AccountsCTX } from "./AccountsCTX";

function AccountsProvider({children}:PropsWithChildren){
    const [data, setData] = useState<Array<Account>>();
    const service = useMemo(() => new AccountsService(new AccountsAPI()), []);

    const fetch = useCallback(async() => {
        try{
            const accounts = await service.fetch();
            setData(accounts);
        }catch(e){
            console.error(e);
            setData([]);
        }
    }, []);

    const create = useCallback (async(account: Account): Promise<boolean> => {
        try {
            await service.create(account);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }, []);
    return (
        <AccountsCTX.Provider value={{data, fetch, create}}>
            {children}
        </AccountsCTX.Provider>
    )
}

export default AccountsProvider;