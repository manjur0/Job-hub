import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplications } from "../../Utility/LocalStorage";


const AppliedJosbs = () => {
    const jobs = useLoaderData()
    useEffect(() => {
        const storedJobsIds = getStoreJobApplications();
        if (jobs.length > 0) {
            const JobsApplied = jobs.filter(job => storedJobsIds.includes(job.id))
        }
    }, [])
    return (
        <div>
            <h1>Applied Jobs</h1>
        </div>
    );
};

export default AppliedJosbs;