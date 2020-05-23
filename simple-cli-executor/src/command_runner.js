module.exports = (executor, logger) => (command) => new Promise((resolve, reject) => {
    logger.log(`Started executing command: "${command}".`);
    executor(command, (error, stdout, stderr) => {
        logger.log(`Finished executing command: "${command}".`);

        if (error) { reject(error); }
        if (stderr) { logger.log(`Error Output: ${stderr}`); }
        if (stdout) { logger.log(`Results Output: ${stdout}`); }

        resolve(stdout);
    });
});