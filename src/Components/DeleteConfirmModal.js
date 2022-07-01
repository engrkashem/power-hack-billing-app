import React from 'react';

const DeleteConfirmModal = ({ confirmDeleteBill }) => {



    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-400">Are You Sure you Want to Delete this Bill???</h3>
                    <div className="modal-action">
                        <button onClick={confirmDeleteBill} className="btn text-white btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-accent">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;