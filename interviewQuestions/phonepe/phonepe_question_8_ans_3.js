question 8 - answer 3 - check solution

function formatter(input) {
    const topLevelJobs = input.filter(job => job.parent === -1);
    const output = [];
    
    topLevelJobs.forEach(job => {
        const jobIdsQueue = [job.id];
        const jobChildren = [];
        
        while(jobIdsQueue.length > 0) {
            const currentJobId = jobIdsQueue.shift();
            const currentJob = input.find(job => job.id === currentJobId);
            jobChildren.push(currentJobId);
            jobIdsQueue.push(...currentJob.children);
        }
        
        output.push({
            id: job.id,
            children: jobChildren
        })
    })
    return output;
}

module.exports = formatter;