const fs = require('fs');
const rules = require('./dictionary.js'); 

const run = async (fileName) => {
    try {
        let code = fs.readFileSync(fileName, 'utf8');
        
        // 辞書に基づいて語録をJSに変換
        rules.forEach(rule => {
            code = code.replace(rule.target, rule.replace);
        });

        // 実行準備
        code += '\nmain();';
        let output = [];
        
        // 実行用の関数を作成
        const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
        const fn = new AsyncFunction('output', code);
        
        await fn(output);
        console.log("\x1b[33m--- 実行結果 ---\x1b[0m");
        console.log(output.join('\n'));
    } catch (e) {
        console.log("\x1b[31m【エラー】ｱｯｱｯｱｯｱ\x1b[0m\n", e.message);
    }
};

run(process.argv[2]);
