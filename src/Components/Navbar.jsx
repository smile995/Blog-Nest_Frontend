import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShareData } from "../assets/ContextApi/AuthContext";
import Swal from 'sweetalert2'

const Navbar = () => {
    const { user, logOut } = useContext(ShareData)
    const nabManu = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        
     
        <li><NavLink to={"/featuredBlogs"}>Featured Blogs</NavLink></li>
        {
            user && <><li><NavLink to={"/wishlist"}>Wishlist</NavLink></li><li><NavLink to={"/addBlog"}>Add Blog</NavLink></li></>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logout Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            )
    }
    return (
        <div className="navbar md:px-5 items-center flex border-b-2 border-fuchsia-700 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            nabManu
                        }
                    </ul>
                </div>
                <div className="flex justify-center items-center md:gap-2 gap-1 ml-2">
                    {/* <img className="md:h-12 h-8" src={logo} alt="" /> */}
                    <h1 className="md:text-4xl text-2xl font-bold ">Blog<span className="text-fuchsia-700 font-extrabold">N</span>est</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        nabManu
                    }
                </ul>
            </div>
            <div className="navbar-end">



                <div className="flex justify-center items-center gap-4">
                    
                        <div>
                            {
                                user?.photoURL ? < div >
                                    <img className="w-12 rounded-full" src={user.photoURL} />
                                </div>  || <div className="avatar placeholder">
                                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                      <span>{user?.email.slice(0,1)}</span>
                                    </div>
                                  </div>
                                    : <div className="avatar">
                                    <div  className="w-12 rounded-full">
                                      <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png" />
                                    </div>
                                  </div>
                            }
                        </div>

                        <div>
                            {
                                user ?
                                    <div className="flex gap-1 md:gap-3 items-center">
                                        {/* <p className="hidden md:contents">{users.email}</p> */}
                                        <button onClick={handleLogOut} className="font-semibold md:btn btn-sm md:btn-secondary btn-success">Logout</button>
                                    </div>

                                    :
                                    <Link to={'/login'}>
                                        <button className="font-semibold btn-sm md:btn md:btn-secondary btn-success">Login</button>
                                    </Link>
                            }
                        </div>

                    
                </div>

            </div>
        </div >
    );
};

export default Navbar;