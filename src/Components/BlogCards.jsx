import { FaArrowRight } from "react-icons/fa";
const BlogCards = ({ item }) => {
    const { title, category
        , image, short_description } = item;

    return (
        <div className="shadow-md shadow-fuchsia-700  mt-8 flex flex-col">
            <div>
                <img className="rounded-lg w-full h-72" src={image} alt="" />
            </div>
            <div className="p-5 space-y-2 flex flex-col justify-between">
                <div>
                    <button className="rounded-full px-3 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{category}</button>
                    <p className="text-2xl font-semibold text-slate-800">{title}</p>
                    <p>{short_description}</p>
                </div>
                <div className="mt-auto">
                    <button className="btn bg-fuchsia-700 hover:bg-fuchsia-900 text-white">
                        Read more <span><FaArrowRight></FaArrowRight></span>
                    </button>
                </div>
            </div>
        </div>



    );
};

export default BlogCards;