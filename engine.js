const fs = require('fs');
const rules = require('./dictionary.js');

const run = async (fileName) => {
    try {
        let code = fs.readFileSync(fileName, 'utf8');

        rules.forEach(rule => {
            code = code.replace(rule.target, rule.replace);
        });

        code += '\nawait main();';

        const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
        const output = {
            push: (msg) => {
                console.log(msg);
            }
        };
        
        const fn = new AsyncFunction('output', 'process', code);
        
        await fn(output, process);
        
        process.stdin.pause();
    } catch (e) {
        console.log("\x1b[31m【エラー】ｱｯｱｯｱｯｱ\x1b[0m\n", e.message);
    }
};

run(process.argv[2]);
