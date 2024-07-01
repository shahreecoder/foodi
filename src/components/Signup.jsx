import React, { useContext } from 'react'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import Model from './Model';
import { AuthContext } from '../contexts/AuthProvider';
function Signup() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        createUser(email,password).then((result) =>{
            const user = result.user;
            alert("Registration Successfull! ")
            document.getElementById('my_modal_5').close();
            navigate (from, {replace:true});
        }).catch ((errors)=>console.log(errors));
    }
    return (
        <>
        <div className="modal-action flex flex-col justify-center mx-auto w-96 mt-20 shadow-md rounded-2xl">

            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <h3 className='font-bold text-lg'>Create a Account!  </h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required {...register("email")} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required {...register("password")} />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-3">
                    <input type='submit' value="Signup" className="btn bg-green px-8 py-3 font-semibold text-white rounded-full" />
                </div>

                <p className='text-center my-2'>Do You have an account? <button to="/" className='text-red underline ml-1' onClick={() => document.getElementById('my_modal_5').showModal()}> Login</button>  </p>

                
            </form>
            <div className='items-center justify-center gap-2 text-center space-x-3 mb-5'>
                <button className="btn btn-circle hover:bg-green hover:text-white">
                    <FaGoogle />
                </button>
                <button className="btn btn-circle hover:bg-green hover:text-white">
                    <FaGithub />
                </button>
                <button className="btn btn-circle hover:bg-green hover:text-white">
                    <FaFacebook />
                </button>
            </div>
            <Link className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"  to="/" > ✕</Link>
        </div>
        <Model/>
        </>
    )
}

export default Signup