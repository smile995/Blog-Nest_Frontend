
import errorPage from '/public/Image/error.jpg'
const ErrorPage = () => {
    return (
        <div className='h-[90vh] flex justify-center items-center'>
            <img src={errorPage} alt="" />
        </div>
    );
};

export default ErrorPage;