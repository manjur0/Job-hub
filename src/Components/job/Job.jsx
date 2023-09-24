

const Job = ({ job }) => {
    const { logo, job_title, } = job
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default Job;