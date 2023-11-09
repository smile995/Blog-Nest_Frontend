
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import register from '/Image/register.png'
import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = (e)=>{
        e.preventDefault();
        const form= e.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;
        console.log(form, name, email,password);
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
                    <input className="btn text-white font-semibold bg-gradient-to-r from-fuchsia-700 to-blue-700 w-full mt-5" type="submit" value="Register" />

                </form>
              

            </div>

        </div>
    );
};

export default Register;