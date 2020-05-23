module.exports = {
    getCommands: (program, requests) => {
        if (!requests || requests === undefined || requests === null) {
            return Promise.reject("No REQUESTS were provided!");
        } else {
            const args = requests.split(',');
            return Promise.resolve(args.map(arg => `${program} ${arg}`));
        }
    },
    checkIfProgramExists: (executor, program) => {
        if (!program || program === undefined || program === null) {
            return Promise.reject("No PROGRAM was provided!");
        } else {
            return executor(`which ${program}`);
        }
    }
};