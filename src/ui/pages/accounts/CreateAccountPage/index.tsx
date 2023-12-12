import { useCallback, useContext } from "react"

import { useNavigate } from "react-router-dom";
import styles from "../ListAccountsPage/styles.module.scss"
import Account from "../../../../core/domain/models/Account";
import { AccountsCTX } from "../../../contexts/accounts/AccountsCTX";

export default function CreateAccountPage(){
        const { create } = useContext(AccountsCTX);
        const navigate = useNavigate();
        
        const submit = useCallback(async(event: React.FormEvent) => {
            event.preventDefault();
        
            const inputs = event.currentTarget.getElementsByTagName('input');
            const data: Record<string, string> = {};
            
            for(const input of inputs){
                data[input.name] = input.value;
            }
            if(Object.values(data).some((item) => item === '')){
                alert('Você precisa preencher todos os campos do formulário!');
                return;
            }
            console.log(data);
            const account = Account.fromForm(data);
            console.log(account);
            const result = await create(account);
            console.log(result);
            
            if(result){
                alert('Conta cadastrada com sucesso!');
                navigate('/');
            }else{
                alert('Houve um erro inesperado')
            }
        }, []);
    
    return(
        <div className={styles.container}>
            <header>
            <h1>Criar Conta</h1>
             <button onClick={(()=> navigate('/'))} >Ver contas cadastradas</button>
            </header>
            <form onSubmit={submit}>
                <fieldset>
                    <legend>Dados Gerais</legend>
                    <div>
                        <label>Nome: <input name="name" /></label>
                    </div>
                    <div>
                        <label>Data de Nascimento: <input type="date" name="birth-date" /></label>
                    </div>
                    <div>
                        <label>cpf: <input name="cpf" /></label>
                    </div>
                    <div>
                        <label>E-mail: <input type="email" name="email" /></label>
                    </div>
                    <button type="submit">Finalizar</button>
                </fieldset>
            </form>
        </div>
    )
}