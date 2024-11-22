import axios from "axios";

import { FaArrowRight, FaBookReader  } from "react-icons/fa";

import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const BlogCards = ({ item }) => {
 
    const handlebookmark= (id)=>{
      axios.get(`http://localhost:5000/wishlist/${id}`)
      .then(res=>{
        console.log(res.data);
        
      })
       
    }
   
    const { tittle, Category , url, shortDescription,_id } = item;

    return (
        <div className="shadow-md shadow-fuchsia-700  mt-8 flex flex-col">
            <div>
                <img className="rounded-lg w-full h-72" src={url} alt="" />
            </div>
            <div className="p-5 space-y-2 flex flex-col justify-between">
                <div>
                    <button className="rounded-full px-3 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{Category}</button>
                    <p className="text-2xl font-semibold text-slate-800">{tittle}</p>
                    <p>{shortDescription}</p>
                </div>
                <div className="mt-auto flex justify-between items-center">
                    <Link to={`/blog/${_id}`}>
                        <button className="btn bg-fuchsia-700 hover:bg-fuchsia-900 text-white">
                            Read more <span><FaArrowRight></FaArrowRight></span>
                        </button>
                    </Link>
                    <button onClick={()=>handlebookmark(_id)}>
                        <FaBookReader className="text-2xl text-fuchsia-700"></FaBookReader>
                    </button>
                </div>
            </div>
        </div>



    );
};

export default BlogCards;