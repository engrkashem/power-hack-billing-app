import React from 'react';

const TableRow = () => {
    return (
        <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>
                <button className="btn btn-xs btn-outline btn-success">Edit</button>
                <span> || </span>
                <button className="btn btn-xs btn-outline btn-error">Delete</button>
            </td>
        </tr>
    );
};

export default TableRow;