import { useEffect, useState } from "react";
import Job from "../job/job";


const Featured = () => {
    // show display 4 dta 
    const [loadData, setLoadData] = useState(4);
    // Api loading 
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);
    return (
        <div className="my-20">
            <div className="my-5">
                <h2 className='text-5xl text-center'>Featured Jobs: {jobs.length}</h2>
                <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, loadData).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center my-5">
                <div className={loadData === jobs.length && 'hidden '} >
                    <button onClick={() => setLoadData(jobs.length)}
                        className="btn text-white bg-gradient-to-r from-sky-500 to-indigo-500 outline-none ">Show All</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;