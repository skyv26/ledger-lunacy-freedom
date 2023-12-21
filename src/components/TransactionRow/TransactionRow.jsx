import PropTypes from 'prop-types';

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
        <tr>
            <td>{dateFormatter(date)}</td>
            <td>{type}</td>
            <td>
                {['deposit', 'refund'].includes(type.toLowerCase()) ?
                    `Deposit from ${data['source']['description'] ?? 'unspecified source' }`
                    :
                    `Investment in ${data['destination']['description']}`
                }
            </td>

            <td>{amount}</td>
            <td>{balance}</td>
        </tr>
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
