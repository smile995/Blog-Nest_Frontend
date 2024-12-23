
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import BlogCards from '../Components/BlogCards';

import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
//import { ShareData } from '../assets/ContextApi/AuthContext';

const Home = () => {
    const [data, setData] = useState([]);
    const [numberOfItems, setNumberOfItems] = useState(12)
    const [currentPage, setCurrentpage] = useState(0)
   //// const { setLoading } = useContext(ShareData)
    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
            .then(res => setData(res?.data))
       // setLoading(false)
    }, []);

    const { total } = useLoaderData();
    const numberOfPages = Math.ceil(total / numberOfItems)
    const totalPages = [...Array(numberOfPages).keys()]



    const handleSubscribe = () => {
        return Swal.fire({
            icon: "success",
            title: "Thank you for subscribing to our newsletter",
            text: "You don’t need to send emails",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    const handleItemsPerPage = (e) => {
        const value = parseInt(e.target.value);
        setNumberOfItems(value)
        setCurrentpage(0)

    }
    return (
        <div>
            {/* slider here */}
            <div className="relative">
                <div className="carousel w-full h-[80vh]  my-8 ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://as2.ftcdn.net/v2/jpg/05/60/01/13/1000_F_560011352_SjLbERrgU2nq1B5hmiQ0DQcwOA5mBt39.jpg" className="w-full" />
                        <div className="absolute  lg:right-5 right-0 md:space-x-10  top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://bloggingguide.com/wp-content/uploads/2021/12/6461.png" className="w-full" />
                        <div className="absolute  lg:right-5 right-0 md:space-x-10  top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://www.schudio.com/wp-content/uploads/2017/06/school-website-blog-banner.png" className="w-full" />
                        <div className="absolute  lg:right-5 right-0 md:space-x-10  top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://www.schudio.com/wp-content/uploads/2019/04/BloggingStatsThatProveYourNeedToStart_Blog-Detail.png" className="w-full" />
                        <div className="absolute  lg:right-5 right-0 md:space-x-10  top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center w-4/6 mx-auto ">
                    <h1 className="text-3xl lg:text-7xl text-center text-fuchsia-700 font-bold">Get Ready to Explore  the World with our Blog</h1>
                </div>



            </div>
            {/* recent blog post section */}

            <div className="text-center text-4xl font-semibold text-fuchsia-700">
                <h1>Recent Blogs: {data?.length}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg'>
                {
                    data?.map(item => <BlogCards key={item._id} item={item} ></BlogCards>)
                }
            </div>
            <div className='my-8 flex justify-center'>
                <div>
                    <p className='text-center font-semibold'>Your are in the page : {currentPage}</p>
                    <button className='px-2  bg-fuchsia-700 text-white rounded mr-2 font-bold'>
                        Previous
                    </button>
                    {
                        totalPages?.map(page => <button
                            onClick={() => setCurrentpage(page)}
                            key={page}
                            className={`px-2 bg-fuchsia-700 text-white rounded mr-2 font-bold`}>
                            {page}
                          </button>)
                    }
                    <button className='px-2  bg-fuchsia-700 text-white rounded mr-2 font-bold'>
                        Next
                    </button>
                    <select value={numberOfItems} onChange={handleItemsPerPage} className='px-2  bg-fuchsia-700 text-white rounded mr-2 font-bold'>
                        <option value="12"> 12</option>
                        <option value="24"> 24</option>
                        <option value="36"> 36</option>
                        <option value="48"> 48</option>
                    </select>
                </div>
            </div>
            <div className="bg-gray-800 p-5 my-8 lg:w-1/2 mx-auto rounded-xl">
                <div>
                    <h1 className="text-center text-4xl font-semibold text-fuchsia-700">NewsLetter</h1>
                    <p className="text-center mt-2 font-semibold text-slate-300">Stay up to date with our latest blogs</p>
                </div>
                <div className="flex justify-center mt-2">
                    <div className="flex" >
                        <input className="px-3 py-2 border hover:border-fuchsia-700" type="email" name="email" placeholder="Email...." id="" />
                        <input onClick={handleSubscribe} className="px-3 py-2  bg-fuchsia-700" type="submit" value="Subscribe" />
                    </div>

                </div>
                <div>
                    <p className="text-gray-500 text-center mt-2 font-semibold ">Your email is safe with us, We do not spam</p>
                </div>
            </div>


        </div>
    );
};

export default Home;