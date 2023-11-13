import { useContext } from 'react';
import { ShareData } from '../assets/ContextApi/AuthContext';
import BlogCards from './BlogCards';

const AllBlogs = () => {
    const { data } = useContext(ShareData);
    // const { tittle, Category
    //     , url, shortDescription } = data;
    return (
        <div className='my-8'>
            <h1 className='text-fuchsia-700 font-bold text-4xl text-center '>Explore Our Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map(item => <BlogCards key={item._id} item={item}></BlogCards>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;