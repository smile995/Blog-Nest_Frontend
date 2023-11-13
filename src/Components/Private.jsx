import { useContext } from 'react';
import { ShareData } from '../assets/ContextApi/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Private = ({ children }) => {
    const { loading, user } = useContext(ShareData)
    const location = useLocation()
    if (loading) {
        return <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
                <Skeleton count={3} />
            </p>
        </SkeletonTheme>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'} ></Navigate>
};

export default Private;

//


