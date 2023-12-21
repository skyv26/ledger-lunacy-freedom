import { useState, createContext } from 'react';
import Header from './components/Header/Header';
import TransactionTable from './components/TransactionTable/TransactionTable';
import Balance from './components/Balance/Balance';

export const GlobalStateNum = createContext();

const App = () => {
  const [balance, updateBalance] = useState(0);
  
  return (
    <GlobalStateNum.Provider value={balance}>
      <Header />
      <Balance />
      <TransactionTable updateBalance={updateBalance} />
    </GlobalStateNum.Provider>
  );
}

export default App;
