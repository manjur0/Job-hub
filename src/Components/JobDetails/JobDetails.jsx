import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const inds = parseInt(id)
    const job = jobs.find(job => job.id === inds);
    console.log(job);
    const handleApllyJob = () => {
        saveJobApplication(inds)
        if (saveJobApplication) {
            toast.success('You Have Sucsessfuly Added');
        } 
    }
    return (
        <div className="container mx-auto">
            <div className="grid gap-4 grid-cols-4 my-8 ">
                <div className="col-span-3 pr-8">
                    <h2 className="text-2xl font-semibold py-4">Job description:</h2>
                    <p>{job.job_description}</p>

                    <h2 className="text-2xl font-semibold py-4 ">Job responsibility: </h2> <p>{job.job_responsibility}</p>

                    <h2 className="text-2xl font-semibold py-4">Educational requirements: </h2> <p>{job.educational_requirements}</p>

                    <h2 className="text-2xl font-semibold py-4">Experiences: </h2>
                    <p>{job.experiences}</p>

                </div>

                <div className="col-span-1 m-4 rounded-lg border  shadow-lg p-4">
                    <h2 className="text-2xl font-semibold">Job Details</h2>

                    <div className="flex">
                        <h4 className="font-semibold mr-2">Salary:  </h4>
                        <p>{job.salary}</p>
                    </div>

                    <div className="flex">
                        <h4 className="font-semibold mr-2 mb-2">Job Title:  </h4>
                        <p>{job.job_title}</p>
                    </div>
                    <hr />
                    <h2 className="text-2xl my-2 font-semibold">Contact information</h2>

                    <div className="flex">
                        <h4 className="font-semibold mr-2">Phone:  </h4>
                        <p>{job.contact_information.phone}</p>
                    </div>

                    <div className="flex">
                        <h4 className="font-semibold mr-2">Email:  </h4>
                        <p>{job.contact_information.email}</p>
                    </div>

                    <div className="flex pb-5">
                        <h4 className="font-semibold mr-2">Address:  </h4>
                        <p>{job.contact_information.address}</p>
                    </div>

                    <button onClick={handleApllyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;