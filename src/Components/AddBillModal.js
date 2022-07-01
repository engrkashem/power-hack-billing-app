import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddBillModal = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const generateBillId = () => {
        const billId = Math.ceil(Math.random() * 1000000);
        return billId;
    }


    const onSubmit = async data => {
        const billId = generateBillId();
        if (billId < 100000) {
            return generateBillId();
        }
        const { name, phone, email, amount } = data;
        const bill = { name, phone, email, amount, billId };
        console.log(bill)

        const url = `http://localhost:5000/bill`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('secretToken')}`
            },
            body: JSON.stringify(bill)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                toast.success('Your Bill has been received.Thank you.');
                reset();
            }
        })
    };

    return (
        <div>
            <input type="checkbox" id="addBill" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
                        <div className="form-control ">
                            <label className="label">
                                <span
                                    className="label-text">Full Name
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name" className="input input-bordered w-full "
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span
                                    className="label-text-alt text-rose-500">{errors.name.message}
                                </span>}
                            </label>
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span
                                    className="label-text">Email
                                </span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email" className="input input-bordered w-full "
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: 'Enter a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span
                                    className="label-text-alt text-rose-500">{errors.email.message}
                                </span>}
                                {errors.email?.type === 'pattern' && <span
                                    className="label-text-alt text-rose-500">{errors.email.message}
                                </span>}
                            </label>
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span
                                    className="label-text">Phone
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Phone Number" className="input input-bordered w-full "
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span
                                    className="label-text-alt text-rose-500">{errors.phone.message}
                                </span>}
                            </label>
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span
                                    className="label-text">Paid Amount
                                </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Paid Amount" className="input input-bordered w-full "
                                {...register("amount", {
                                    required: {
                                        value: true,
                                        message: 'Paid Amount is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.amount?.type === 'required' && <span
                                    className="label-text-alt text-rose-500">{errors.amount.message}
                                </span>}
                            </label>
                        </div>

                        <input className='btn btn-outline btn-accent w-1/2 mx-auto block' type="submit" value='Add Bill' />
                    </form>

                    <div className="modal-action">
                        <label htmlFor="addBill" className="btn btn-error btn-outline">Close</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddBillModal;