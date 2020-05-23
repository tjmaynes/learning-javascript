const getDIContainer = require('./di_container');

module.exports = () => {
    const config = {
        program: process.env.PROGRAM,
        requests: process.env.REQUESTS
    };

    return getDIContainer(config).then(container => {
        return Promise.all([
            container.checkIfProgramExistsRunner(container.commandRunner, container.program),
            container.getCommandsRunner(container.program, container.args)
        ]).then(results => {
            const commands = results[1];
            return commands.map(container.commandRunner);
        });
    });
};
