module.exports = [
    // --- 基本 ---
    { name: 'start', target: /24歳、学生です。/g, replace: 'async function main() {' },
    { name: 'var', target: /やりますねぇ！?[\s　]*(\w+)[\s　]*=[\s　]*(.+)/g, replace: 'let $1 = $2;' },
    { name: 'print', target: /ブッチッパ！[\s　]*[「"'](.+?)[」"']/g, replace: 'output.push("$1");' },
    { name: 'end', target: /王道を往く/g, replace: '}' },

    // --- 計算・定数 ---
    { name: 'add', target: /菅野美穂/g, replace: '+' },
    { name: 'num1', target: /いいよ.*?来いよ！?/g, replace: '114514' },
    { name: 'num2', target: /イクイク/g, replace: '1919' },

    // --- 制御・時間・エラー ---
    { name: 'wait', target: /おまたせ！.*?(\d+)/g, replace: 'await new Promise(r => setTimeout(r, $1));' },
    { name: 'error', target: /ンアッー！/g, replace: 'throw new Error("（迫真）");' },
    { name: 'try', target: /✝悔い改めて✝/g, replace: 'try {' },
    { name: 'catch', target: /これもうわかんねぇなぁ。/g, replace: '} catch (e) {' },
    { name: 'end_block', target: /おわり/g, replace: '}' },

    // --- 比較 ---
    { name: 'if', target: /アアーッ！?[\s　]*\((.+)\)/g, replace: 'if ($1) {' },
    { name: 'else', target: /ぬわあああん！/g, replace: '} else {' }
];
