import { MdOutlineLocationOn, MdCurrencyExchange } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div className="my-5">
            <div className="card card-compact  bg-base-100 shadow-lg  ">
                <figure ><img src={logo} alt="job-img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="mt-5">

                        <button className="px-6 py-2 border border-[#7E90FE] rounded font-extrabold text-[#7E90FE] mr-2"> {remote_or_onsite}</button>
                        <button className="px-6 py-2 border border-[#7E90FE] rounded font-extrabold text-[#7E90FE] mr-2">{job_type}</button>
                    </div>
                    <div className="flex items-center gap-3 font-bold my-5">
                        <MdOutlineLocationOn></MdOutlineLocationOn><h2>{location}</h2>
                        <MdCurrencyExchange /> <h2>{salary}</h2>
                    </div>
                    <div className="card-actions justify-start">
                        <Link to={`/job/${id}`}>
                            <button className="btn text-white bg-gradient-to-r from-sky-500 to-indigo-500 outline-none ">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;