import { createContext } from "react";
import Account from "../../../core/domain/models/Account";

interface Props {
    data?: Array<Account>;
    fetch(): Promise<void>;
    create(account: Account): Promise<boolean>;
}

export const AccountsCTX = createContext({} as Props);
