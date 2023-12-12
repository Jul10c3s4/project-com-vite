import { useContext, useEffect } from "react";
import { AccountsCTX } from "../../../contexts/accounts/AccountsCTX";
import styles from "./styles.module.scss"
import { useNavigate } from "react-router-dom";

export default function ListAccountPage(){
    const navigate = useNavigate();
    const {data: accounts, fetch: fetchAccounts} = useContext(AccountsCTX);

    useEffect(() => {
        fetchAccounts();
    },[])

    console.log(accounts);
    

    return(
        <div className={styles.container}>
            <header>
            <h1>List Acount Page</h1>
            <button onClick={(() => navigate("/create"))} >Criar Conta</button>
            </header>
            <h2>Contas Cadastradas</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Data de Nascimento</th>
                        <th>CPF</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts?.map((account) =>(
                        <tr key={account.id}>
                            <td>{account.id}</td>
                            <td>{account.name}</td>
                            <td>{account.birthDate}</td>
                            <td>{account.cpf}</td>
                            <td>{account.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}