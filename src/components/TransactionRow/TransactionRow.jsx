import PropTypes from 'prop-types';
import './TransactionRow.css';

const dateFormatter = (date) => {
    const dateString = date;

// Convert date string to Date object
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toLocaleDateString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
    });

    return formattedDate;
};

const TransactionRow = (props) => {
    const { data } = props;
    const { date, type, amount, balance } = data;

    return (
        <>
        <tr className={`table-row ${['deposit', 'refund'].includes(type.toLowerCase()) ? 'in' : 'out'}`}>
            <td className="table-data">{dateFormatter(date)}</td>
            <td className="table-data">{type}</td>
            <td className="table-data">
                {['deposit', 'refund'].includes(type.toLowerCase()) ?
                    `Deposit from ${data['source']['description'] ?? 'unknown source'} for your investment in ${data['destination']['description'] ?? 'unknown source'}`
                    :
                    `Investment in ${data['destination']['description']}`
                }
            </td>

            <td className="table-data">{` ${amount < 0 ? `-$${Math.abs(amount)}` : `$${amount}` }`}</td>
            <td className="table-data">${balance}</td>
        </tr>
        </>
        
    );
};

TransactionRow.propTypes = {
    data: PropTypes.object,
    date: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.string,
    balance: PropTypes.string,
};

export default TransactionRow;
