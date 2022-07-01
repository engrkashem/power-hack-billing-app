import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AddBillModal from './AddBillModal';
import DeleteConfirmModal from './DeleteConfirmModal';
import TableRow from './TableRow';

const Billing = () => {
    const [receivedBills, setReceivedBills] = useState([]);
    const [isBillChanged, setIsBillChanged] = useState(false);
    const [deleteBill, setDeleteBill] = useState(null);
    const [deleteUrl, setDeleteUrl] = useState('');
    useEffect(() => {
        const url = `http://localhost:5000/bill`;
        fetch(url)
            .then(res => res.json())
            .then(data => setReceivedBills(data))
    }, [isBillChanged]);

    const bills = [];
    for (let i = 0, j = receivedBills.length - 1; i < receivedBills.length; i++, j--) {
        bills[j] = receivedBills[i];
    }

    const confirmDeleteBill = () => {
        console.log(deleteUrl)

        fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('secretToken')}`
            }
        }).then(res => res.json()).then(data => {
            if (data.deletedCount) {
                setDeleteBill(null);
                setIsBillChanged(!isBillChanged);
                toast('You bill deleted successfilly');
            }
        })

    }

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
                            <th>Billing Id</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bills.map(bill => <TableRow
                                key={bill._id}
                                bill={bill}
                                setDeleteUrl={setDeleteUrl}
                                setDeleteBill={setDeleteBill}
                            ></TableRow>)
                        }

                    </tbody>
                </table>
            </div>
            <AddBillModal
                isBillChanged={isBillChanged}
                setIsBillChanged={setIsBillChanged}
                setDeleteBill={setDeleteBill}
            ></AddBillModal>
            {
                deleteBill && <DeleteConfirmModal
                    confirmDeleteBill={confirmDeleteBill}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default Billing;