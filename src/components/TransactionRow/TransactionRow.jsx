import React from 'react';
import PropTypes from 'prop-types';

const TransactionRow = (props) => {
    const { data } = props;
    const { date, type, amount, balance } = data;
    console.log(data);
    return (
        <tr>
            <td>{date}</td>
            <td>{type}</td>
            <td>
                {type === 'DEPOSIT' ?
                    `Deposit from ${data['source']['description']} for your investment`
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
