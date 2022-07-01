import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({ setAuth }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = user => {
        const email = user.email;
        const password = user.password;
        // const url = `http://localhost:5000/user/${email}`;
        const url = `https://agile-castle-63096.herokuapp.com/user/${email}`;
        if (email) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.result) {
                        if (data.result.password === password) {
                            const secretToken = data.secretToken;
                            localStorage.setItem('secretToken', secretToken);
                            navigate('/billing');
                            sessionStorage.setItem('isUser', true);
                        }
                        else {
                            setAuth('register');
                            toast.error('Your email and password does not match. Please Register again.');
                        }
                    }
                    else {
                        setAuth('register');
                        toast.error('You are not currently a user. Please Register first.');
                    }

                })
        }

    };

    return (
        <div className=' flex h-screen justify-center items-center bg-cover'>
            <div className="card w-96 lg:w-1/2 bg-base-100 shadow-xl glass">
                <div className="card-body items-center">
                    <h2 className="card-title">LOGIN</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full ">

                        <div className="form-control ">
                            <label className="label">
                                <span
                                    className="label-text">Email
                                </span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full "
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
                        </div>
                        <input className='btn btn-outline btn-accent w-1/2 mx-auto block' type="submit" value='LOGIN' />
                    </form>
                    <p className=' font-semibold mt-5'>New to Power Hack? <span onClick={() => setAuth('register')} className=' text-accent text-xl cursor-pointer'>Register</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;