import { useContext } from 'react';
import './Balance.css';
import { GlobalStateNum } from '../../App';

const Balance = () => {
    const transaction = useContext(GlobalStateNum);
    const { balance } = transaction;
    return (
        <div className="balance-section">
            <div className="balance-container">
                <p className="amount">${balance}</p>
                <p>BALANCE</p>
            </div>
        </div>
    );  
};

export default Balance;
