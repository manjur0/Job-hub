import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center font-semibold justify-center items-start mt-52">
            <h2 className="text-4xl mb-5">Opps !!!</h2>
            <Link to="/" className="mt-12">Go to Home</Link>
        </div>
    );
};

export default ErrorPage;