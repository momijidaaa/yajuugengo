const fs = require('fs');
const rules = require('./dictionary.js');

const run = async (fileName) => {
    try {
        let code = fs.readFileSync(fileName, 'utf8');

        rules.forEach(rule => {
            code = code.replace(rule.target, rule.replace);
        });

        code += '\nmain();';

        const checkCode = code.replace(/".*?"/g, "").replace(/'.*?'/g, "");
        const leftover = checkCode.match(/[ぁ-んァ-ヶ亜-熙]/);
        
        if (leftover) {
            console.log(`\x1b[31m【警告】翻訳ミス: "${leftover[0]}"\x1b[0m`);
            console.log(code);
        }

        const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
        const output = {
            push: (msg) => console.log(msg)
        };
        
        const fn = new AsyncFunction('output', code);
        
        await fn(output);
        process.exit();
    } catch (e) {
        console.log("\x1b[31m【エラー】ｱｯｱｯｱｯｱ\x1b[0m\n", e.message);
    }
};

run(process.argv[2]);
