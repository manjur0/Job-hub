
const getStoreJobApplications = () => {
    const storeJobApplication = localStorage.getItem('job-applied');
    if (storeJobApplication) {
        return JSON.parse(storeJobApplication)
    } return [];
}
const saveJobApplication = id => {
    const storeJobApplication = getStoreJobApplications();
    const exists = storeJobApplication.find(jobId => jobId === id);
    if (!exists) {
        storeJobApplication.push(id);
        localStorage.setItem('job-applied', JSON.stringify(storeJobApplication));
    }

}

export { getStoreJobApplications, saveJobApplication }