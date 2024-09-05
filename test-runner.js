const { spawn } = require('child_process');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const testName = args._[0];

let testPath = 'test/**/*.test.ts';

if (testName) {
    testPath = `test/**/*${testName}*.test.ts`;
}

const child = spawn('npx', ['ts-mocha', testPath], { stdio: 'inherit' });

child.on('exit', (code) => {
    process.exit(code);
});