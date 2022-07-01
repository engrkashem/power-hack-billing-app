import React from 'react';
import AddBillModal from './AddBillModal';
import TableRow from './TableRow';

const Billing = () => {
    return (
        <div>
            <div className='max-w-6xl border border-info mt-10 p-2 mx-auto'>
                <div className=' flex justify-between items-center md:px-10'>
                    <div className=' flex items-center gap-5'>
                        <h2 className=' text-lg font-semibold'>Billing</h2>
                        <input type="text" placeholder="Search" className="input input-bordered input-info w-full max-w-xs input-sm" />
                    </div>
                    <div>
                        <label htmlFor="addBill" className="btn btn-outline btn-info btn-sm modal-button">Add New Bill</label>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Billing Id</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow></TableRow>
                    </tbody>
                </table>
            </div>
            <AddBillModal></AddBillModal>
        </div>
    );
};

export default Billing;