import { useContext, useEffect } from "react";
import TransactionRow from "../TransactionRow/TransactionRow";
import './TransactionTable.css';
import PropTypes from 'prop-types';
import { GlobalStateNum } from "../../App";

const DATA_HEADINGS = [
  "Date",
  "Transaction",
  "Description",
  "Amount",
  "Balance",
];

const removeDuplicateData = (arrayOfObjects) => {
  const tempListOfActivities = [];
  let newArrayOfObject = arrayOfObjects.filter((data) => {
    if (!tempListOfActivities.includes(data.activity_id)) {
      tempListOfActivities.push(data.activity_id);
      return data;
    }
  });
  newArrayOfObject = newArrayOfObject.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return newArrayOfObject;
};

const TransactionTable = (props) => {
  const transaction = useContext(GlobalStateNum);
  const { updateTransaction } = props;

  useEffect(() => {
    const updatedData = removeDuplicateData(transaction.data);
  
    if (updatedData.length && updatedData[0].balance !== transaction.balance) {
      updateTransaction((prev) => ({
        ...prev,
        balance: updatedData[0].balance,
      }));
    }
  }, [updateTransaction, transaction.data, transaction.balance]);
  
  

  return (
    <div className="past-transaction_section">
      <p className="heading">Past Transactions</p>
      <div className="table-container">
        {
          transaction.data.length ?  
          (<table className="table">
            <thead className="thead">
              <tr className="table-row">
                {DATA_HEADINGS.map((headings, index) => (
                  <th className="table-heading" key={`${headings}-${index + 1}`}>{headings}</th>
                ))}
              </tr>
            </thead>
            <tbody className="table-body">
              {
                removeDuplicateData(transaction.data).map((data) => (
                  <TransactionRow key={data.activity_id} data={data} />
                ))
              }
            </tbody>
          </table>)
          :
          <p className="error">No Data Found 😞</p>
        }
      </div>
    </div>
  );
};

TransactionTable.propTypes = {
  updateTransaction: PropTypes.func,
};

export default TransactionTable;
