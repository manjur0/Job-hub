import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplications } from "../../Utility/LocalStorage";


const AppliedJosbs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const storedJobsIds = getStoreJobApplications();
        if (jobs.length > 0) {
            const JobsApplied = jobs.filter(job => storedJobsIds.includes(job.id))
            setAppliedJobs(JobsApplied);
        }
    }, [])
    return (
        <div className="text-center my-20 text-3xl">
            <h1 className="font-bold mb-5">Applied Jobs</h1>
            <hr className="mb-5"/>
            <ul>
                {
                    appliedJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJosbs;