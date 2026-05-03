const fs = require('fs');
const rules = require('./dictionary.js');

const run = async (fileName) => {
    try {
        let code = fs.readFileSync(fileName, 'utf8');

        rules.forEach(rule => {
            code = code.replace(rule.target, rule.replace);
        });

        code += '\nmain();';

        // 文字列の中身を除いた日本語チェック（表示用テキストを除外）
        const checkCode = code.replace(/".*?"/g, "").replace(/'.*?'/g, "");
        const leftover = checkCode.match(/[ぁ-んァ-ヶ亜-熙]/);
        
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
