import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaArrowTurnDown } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import login from '/Image/login.jpg'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShareData } from "../assets/ContextApi/AuthContext";
import Swal from 'sweetalert2'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase";
const Login = () => {
    const navigate=useNavigate()
    const {logIn,setUser}=useContext(ShareData)
    const handleLogin = (e)=>{
        e.preventDefault();
        const form= e.target;
        const email= form.email.value;
        const password= form.password.value;
        // console.log( email,password);
        logIn(email,password)
        .then(result=>{
            const user=(result.user);
            setUser(user)
            if(user){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Usre login successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            form.reset()
            navigate('/')
        })
        .catch(error=>{
            console.log(error.code);
        })

    }


    const handleSignInWithGoogle=()=>{
        const provider= new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then(result=>{
            setUser(result.user);
            navigate('/')
        })
        .catch(error=>{
            console.log(error.code);
        })
    }
    return (
        <div className="grid  grid-cols-1  md:grid-cols-2  my-8 ">
            <div className=' flex justify-center border-r-4 border-r-fuchsia-700 '>
                <img src={login} alt="" />
            </div>
            <div className='bg-slate-300 p-2 md:p-10 lg:p-20 ' >
                <form onSubmit={ handleLogin }>
                    <h1 className='text-3xl  text-center font-bold text-fuchsia-700'>Login Here</h1>
                    <div className="mt-5 ">
                        <h1 className="text-center font-semibold">Do not have an account? <Link className="text-fuchsia-700 font-bold underline" to={'/register'}>Register</Link></h1>
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
                    <input className="btn text-white font-semibold bg-gradient-to-r from-fuchsia-700 to-blue-700 w-full mt-5" type="submit" value="Login" />

                </form>
                <div className="mt-8 space-y-5 ">
                    <div className="flex justify-center items-center text-2xl font-semibold">
                        <h1 className="  ">Login with</h1>
                        <span><FaArrowTurnDown></FaArrowTurnDown></span>
                    </div>
                    <div onClick={handleSignInWithGoogle}>
                        <button className="btn   btn-outline btn-secondary w-full text-md"><span className="text-2xl"><FcGoogle></FcGoogle></span> Google</button>
                    </div>
                    <div >
                        <button className="btn    btn-outline btn-secondary w-full text-md"><span className="text-2xl text-blue-900"><FaFacebook></FaFacebook></span> Facebook</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;