const fs = require('fs');
const rules = require('./dictionary.js');

const run = async (fileName) => {
    try {
        let code = fs.readFileSync(fileName, 'utf8');

        // 翻訳処理
        rules.forEach(rule => {
            code = code.replace(rule.target, rule.replace);
        });

        // 実行準備
        code += '\nmain();';
        
        // 【デバッグ機能】日本語が残っていたら警告
        const leftover = code.match(/[ぁ-んァ-ヶ亜-熙]/);
        if (leftover) {
            console.log(`\x1b[31m【警告】翻訳ミスを発見しました: "${leftover[0]}"\x1b[0m`);
            console.log("--- 現在のコード（デバッグ） ---");
            console.log(code);
            console.log("-------------------------------");
        }

        let output = [];
        const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
        const fn = new AsyncFunction('output', code);
        
        await fn(output);
        console.log("\x1b[33m--- 実行結果 ---\x1b[0m");
        console.log(output.length > 0 ? output.join('\n') : "（出力なし）");
    } catch (e) {
        console.log("\x1b[31m【エラー】ｱｯｱｯｱｯｱ\x1b[0m\n", e.message);
    }
};

run(process.argv[2]);
