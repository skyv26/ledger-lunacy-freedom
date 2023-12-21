import { useState, createContext, useEffect } from 'react';
import Header from './components/Header/Header';
import TransactionTable from './components/TransactionTable/TransactionTable';
import Balance from './components/Balance/Balance';

export const GlobalStateNum = createContext();

const App = () => {
  const [transaction, updateTransaction] = useState({
    balance: 0,
    data: []
  });

  useEffect(() => {
    // Function to fetch JSON data
    const fetchData = async () => {
      try {
        const response = await fetch('/data/complicated_ledger.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Use the fetchData function correctly inside useEffect
    fetchData()
      .then((data) => {
        // Update state with the fetched data
        updateTransaction((prev) => ({
          ...prev,
          data,
        }));
      })
      .catch((error) => {
        // Handle errors
        console.error('Error updating transaction data:', error);
      });
  }, [updateTransaction, transaction]);
  return (
    <GlobalStateNum.Provider value={transaction}>
      <Header />
      <Balance />
      <TransactionTable updateTransaction={updateTransaction} />
    </GlobalStateNum.Provider>
  );
}

export default App;
