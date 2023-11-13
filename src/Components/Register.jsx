import Swal from 'sweetalert2'
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import register from '/Image/register.png'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ShareData } from "../assets/ContextApi/AuthContext";

const Register = () => {
    const [error, setError] = useState('')
    const { createUser,setUser } = useContext(ShareData)
    const navigate=useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length > 6) {
            if(!/[a-z]/.test(password)){
                setError("Use atleast one/more small letter")
                return
            }
            else if(!/[A-Z]/.test(password)){
                setError("Use atleast one/more capital letter")
                return
            }
            else if(!/[0-9]/.test(password)){
                setError("Use atleast one/more digits")
                return
            }
            else if(!/[!@#$%^&*]/.test(password)){
                setError("Use atleast one/more special characters")
                return
            }
        }
        else {
           setError("password must 8 character or longer")
           return 
        }
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setUser(user)
                if (user) {
                    form.reset()
                    setError('')
                    navigate('/')

                    return Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registration Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });


                }
            })
            .catch(error => {

                setError(error.code);

            })

    }

    return (
        <div className="grid  grid-cols-1  md:grid-cols-2  my-8 ">
            <div className=' flex justify-center bg-slate-300 border-r-4 border-r-fuchsia-700 '>
                <img src={register} alt="" />
            </div>
            <div className='bg-slate-300 p-2 md:p-10 lg:p-20 ' >
                <form onSubmit={handleRegister}>
                    <h1 className='text-3xl  text-center font-bold text-fuchsia-700'>Register Here</h1>
                    <div className="mt-5 ">
                        <h1 className="text-center font-semibold">Already have an account? <Link className="text-fuchsia-700 font-bold underline" to={'/login'}>Login</Link></h1>
                    </div>
                    <div className="form-control w-full mt-2  ">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <label className="input-group">
                            <span className="text-2xl text-fuchsia-700"><FaUser></FaUser></span>
                            <input type="text" name='name' placeholder="Your name" className="input input-secondary w-full" />
                        </label>


                    </div>
                    <div className="form-control w-full mt-2  ">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <label className="input-group">
                            <span className="text-2xl text-fuchsia-700"><MdEmail></MdEmail></span>
                            <input type="email" name='email' placeholder="Example@gmail.com" className="input input-secondary w-full" />
                        </label>


                    </div>

                    <div className="form-control w-full mt-2  ">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <label className="input-group">
                            <span className="text-2xl text-fuchsia-700"><RiLockPasswordFill></RiLockPasswordFill></span>
                            <input type="password" name='password' placeholder="Enter Password " className="input input-secondary w-full" />
                        </label>


                    </div>
                    {
                       
                         <p className='text-center text-red-700 font-semibold mt-2'>{error}</p>
                      
                    }
                    <input className="btn text-white font-semibold bg-gradient-to-r from-fuchsia-700 to-blue-700 w-full mt-5" type="submit" value="Register" />

                </form>


            </div>

        </div>
    );
}



export default Register;