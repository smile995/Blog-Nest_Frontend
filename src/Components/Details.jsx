import  { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShareData } from '../assets/ContextApi/AuthContext';

const Details = () => {
    const {data}=useContext(ShareData)
    console.log(data);

//     const {id}=useParams()
    
//     const findData = data.find(item => item._id == id);
//  console.log(findData);
    return (
        <div>
            <p>details  coming soon: {id}</p>
        </div>
    );
};

export default Details;