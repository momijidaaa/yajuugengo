const fs = require('fs');
const rules = require('./dictionary.js');

const run = (fileName) => {
    let code = fs.readFileSync(fileName, 'utf8');
    
    // 全ての語録をJSに変換
    rules.forEach(rule => {
        code = code.replace(rule.target, rule.replace);
    });

    code += '\nmain();';

    try {
        eval(code);
    } catch (e) {
        console.log("【エラー】ｱｯｱｯｱｯｱ");
        console.log(e.message);
    }
};

run(process.argv[2]);
