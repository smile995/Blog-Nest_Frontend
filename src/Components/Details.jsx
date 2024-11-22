
import { useLoaderData } from "react-router-dom";


const Details = () => {

const data = useLoaderData();
const {tittle, url, Category, shortDescription,longDescription}= data

    return (
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 justify-between items-start ">
        <div>
            <img className="rounded-lg w-full " src={url} alt="" />
        </div>
        <div className="p-8 s flex flex-col justify-between">
            <div className="space-y-4">
                <button className="rounded-full px-3 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{Category}</button>
                <p className="text-2xl font-semibold text-slate-800">{tittle}</p>
                <p>{shortDescription}</p>
                <p>{longDescription}</p>
               
            </div>
            <div className="flex justify-center mt-10" >
               
                <button className="w-full bg-pink-500 py-3 rounded-lg text-white font-semibold text-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 " >
                    Add to Wishlist
                </button>
            </div>
        </div>
    </div>
    );
};

export default Details;