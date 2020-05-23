const application = require('../../src/index.js');
const childProcess = require('child_process');

describe("SimpleCLIExecutor", () => {
    it("should be able to run a program with some args", (done) => {
        const sandbox = sinon.createSandbox();
        const execStub = sandbox.stub(childProcess, 'exec');
        execStub
            .onFirstCall().callsFake((arg1, arg2) => { arg2(null, "Running 'which ls'...", null); })
            .onSecondCall().callsFake((arg1, arg2) => { arg2(null, "Running 'ls -la'...", null); })
            .onThirdCall().callsFake((arg1, arg2) => { arg2(null, "Running 'ls -a'...", null); });

        sandbox.stub(process, 'env').value({
            'PROGRAM': 'ls',
            'REQUESTS': '-la,-a'
        });

        application()
            .then(_ => {
                expect(execStub.withArgs("which ls").calledOnce).to.be.true;
                expect(execStub.withArgs("ls -la").calledOnce).to.be.true;
                expect(execStub.withArgs("ls -a").calledOnce).to.be.true;
                done();
            })
            .catch(done);
    });

    it("should not run if PROGRAM is missing", (done) => {
        const sandbox = sinon.createSandbox();
        sandbox.stub(process, 'env').value({
            'PROGRAM': null,
            'REQUESTS': '-ls,-a'
        });

        application()
            .then(done)
            .catch(error => {
                expect(error).to.equal("No PROGRAM was provided!");
                done();
            });
    });

    it("should not run if REQUESTS are missing", (done) => {
        const sandbox = sinon.createSandbox();
        sandbox.stub(process, 'env').value({
            'PROGRAM': 'ls',
            'REQUESTS': null
        });

        application()
            .then(done)
            .catch(error => {
                expect(error).to.equal("No REQUESTS were provided!");
                done();
            });
    });
});
