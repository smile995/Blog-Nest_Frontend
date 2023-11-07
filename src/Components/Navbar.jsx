import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const nabManu = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/addBlog"}>Add Blog</NavLink></li>
        <li><NavLink to={"/allBlogs"}>All blogs</NavLink></li>
        <li><NavLink to={"/featuredBlogs"}>Featured Blogs</NavLink></li>
        <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>

    </>
    return (
        <div className="navbar md:px-5">
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
                    <h1 className="md:text-4xl text-2xl font-bold ">MO<span className="text-red-700">T</span>EX</h1>
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

                {/* {
                    users ?
                        <div className="flex gap-3 items-center">
                            <p className="hidden md:contents">{users.email}</p>
                            <button onClick={hanndleSignOut} className="font-semibold btn btn-secondary">SignOut</button>
                        </div>

                        :
                        <Link to={'/signIn'}>
                            <button className="font-semibold btn btn-secondary">SignIn</button>
                        </Link>
                } */}

            </div>
        </div>
    );
};

export default Navbar;