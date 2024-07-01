import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';


function UpdateProfile() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      
      const {updateUserProfile} = useContext(AuthContext);
      const onSubmit = (data) => {
        const name = data.name;
        const photoURL= data.photoURL;
        updateUserProfile(name,photoURL).then(()=>{
            alert("Your Profile has been updated! ");
            navigate(from, { replace: true });
            window.location.reload();

        }).catch ((errors)=>{
            console.log({errors});
        })

      }

    return (
       <div className='flex items-center justify-center h-screen'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <h3 className='font-bold'>Update Your Profile!</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered" {...register("name")} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Select Your Profile Picture</span>
                    </label>
                    {/* <input type="file" className="file-input file-input-bordered w-full max-w-xs" /> */}

                    <input type="text" placeholder="Enter Profile Photo link" className="input input-bordered" {...register("photoURL")} />
                    
                </div>
                <div className="form-control mt-6">
                    <input type='submit' value="Update" className="btn bg-green text-white"/>
                </div>
            </form>
        </div>
       </div>
    )
}

export default UpdateProfile