//comando para rodar o servidor: npx json-server nome_do_arquivoJSON
import { useState } from 'react';
import AccountsAPI from './data/api/AccountsAPI';
import Account from './core/domain/models/Account';
import ListAccountPage from './ui/pages/accounts/ListAccountsPage';
import AccountsProvider from './ui/contexts/accounts/AccountsProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccountPage from './ui/pages/accounts/CreateAccountPage';

function App() {
  return (
    <AccountsProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListAccountPage/>}/>
          <Route path='/create' element={<CreateAccountPage/>}/>
        </Routes>
      </BrowserRouter>
    </AccountsProvider>
  )
}

export default App;
