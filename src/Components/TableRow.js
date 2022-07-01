import React from 'react';

const TableRow = ({ bill, setDeleteUrl, setDeleteBill }) => {

    const handleDeleteBill = (_id) => {
        const url = `http://localhost:5000/bill/${_id}`;
        // const url = `https://agile-badlands-34653.herokuapp.com/order/${_id}`;
        setDeleteUrl(url);
        setDeleteBill(bill);
    }

    return (
        <tr>
            {
                bill.billId ? <td>{bill.billId}</td> : <td>Generating Id..</td>
            }
            <td>{bill.name}</td>
            <td>{bill.email}</td>
            <td>{bill.phone}</td>
            <td>{bill.amount}</td>
            <td>
                <button className="btn btn-xs btn-outline btn-success">Edit</button>
                <span> || </span>
                <label onClick={() => handleDeleteBill(bill._id)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error btn-outline ">Delete</label>
            </td>
        </tr>
    );
};

export default TableRow;