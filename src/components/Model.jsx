import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { AuthContext } from '../contexts/AuthProvider';

function Model() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    

    const { signupWithGoogle,login } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    const handleGooglelogin = () => {
        signupWithGoogle().then((result) => {
            const user = result.user;
            alert("Login Successfull!");
        }).catch((error) => console.log(error));
    }

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        login(email,password).then((result)=>{
            const user = result.user;
            alert("Login Successfull! ");
            console.log(user);
        }).catch((error)=>{
            const errormessage = error.message;
            setErrorMessage("Please Provied Correct Email and Password");
        })
    }

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
                <div className="modal-box ">

                    <div className="modal-action mt-0 flex flex-col justify-center items-center ">

                        <form className="card-body w-96" onSubmit={handleSubmit(onSubmit)}>
                            <h3 className='font-bold text-lg'>Please Login! </h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"  {...register("email")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"  {...register("password")} />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            
                            {
                                errorMessage ?<p className='text-red text-sm'>{errorMessage}</p>:""
                            }
                            <div className="form-control mt-3">
                                <input type='submit' value="Login" className="btn bg-green px-8 py-3 font-semibold text-white rounded-full" />
                            </div>

                            <p className='text-center my-2'>Dont have an account? <Link to="/signup" className='text-red underline ml-1'>Signup Now</Link>  </p>


                            <button htmlFor="my_modal_5" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_5').close()} > ✕</button>
                        </form>
                        <div className='items-center justify-center gap-2 text-center space-x-3 mb-5'>
                            <button className="btn btn-circle hover:bg-green hover:text-white" onClick={handleGooglelogin}>
                                <FaGoogle />
                            </button>
                            <button className="btn btn-circle hover:bg-green hover:text-white">
                                <FaGithub />
                            </button>
                            <button className="btn btn-circle hover:bg-green hover:text-white">
                                <FaFacebook />
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Model