import React from 'react';
import { useForm } from 'react-hook-form';

const Register = ({ setAuth }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        console.log(data);

    };
    return (
        <div className=' flex h-screen justify-center items-center  bg-cover'>
            <div className="card w-96 lg:w-1/2 bg-base-100 shadow-xl glass">
                <div className="card-body items-center">
                    <h2 className="card-title">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full ">

                        <div className="form-control ">
                            <label className="label">
                                <span
                                    className="label-text">Name
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
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">Password
                                </span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password" className="input input-bordered w-full"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    pattern: {
                                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                        message: 'Password must contains at least one upper case, one lower case, one digit, one special character and minimum length 8 characters '
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span
                                    className="label-text-alt text-rose-500">{errors.password.message}
                                </span>}
                                {errors.password?.type === 'pattern' && <span
                                    className="label-text-alt text-rose-500">{errors.password.message}
                                </span>}
                            </label>
                        </div><input className='btn btn-outline btn-primary w-1/2 mx-auto block' type="submit" value='SIGN UP' />
                    </form>
                    <p className=' font-semibold mt-5'>Already User to Power Hack? <span onClick={() => setAuth('login')} className='text-primary text-xl cursor-pointer'> Please Login</span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;