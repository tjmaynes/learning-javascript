const childProcess = require('child_process');
const commandRunner = require('./command_runner');
const utils = require('./utils');

module.exports = ({ program, requests }) => {
    const executor = childProcess.exec;
    const logger = console;

    return Promise.resolve({
        program: program,
        args: requests,
        getCommandsRunner: utils.getCommands,
        checkIfProgramExistsRunner: utils.checkIfProgramExists,
        commandRunner: commandRunner(executor, logger)
    });
};
