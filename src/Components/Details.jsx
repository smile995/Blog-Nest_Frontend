import { useLoaderData } from "react-router-dom";


const Details = () => {

const data = useLoaderData();
console.log(data);

    return (
        <div>
            <p>details  coming soon: </p>
        </div>
    );
};

export default Details;