module.exports = [
    { name: 'start', target: /24歳、学生です。/g, replace: 'async function main() {' },
    { name: 'try', target: /✝悔い改めて✝/g, replace: 'try {' },
    { name: 'catch', target: /これもうわかんねぇなぁ。/g, replace: '} catch (e) {' },
    { name: 'if', target: /アアーッ！?[\s　]*\((.+)\)/g, replace: 'if ($1) {' },
    { name: 'for', target: /多スギィ！\s*\((\d+)\)/g, replace: 'for (let i = 0; i < $1; i++) {' },
    { name: 'var', target: /やりますねぇ！?[\s　]*(\w+)[\s　]*=[\s　]*(.+)/g, replace: 'let $1 = $2;' },
    { name: 'input', target: /お前の名前は何だ？\s*(\w+)/g, replace: 'let $1 = await new Promise(r => { process.stdout.write("> "); process.stdin.once("data", d => r(d.toString().trim())) });' },
    { name: 'print', target: /見とけよ見とけよ〜[\s　]*([「"'](.+?)[」"']|(\w+))/g, replace: (match, p1, p2, p3) => `output.push(${p2 ? `"${p2}"` : p3});` },
    { name: 'end', target: /王道を往く/g, replace: '}' },
    { name: 'end_block', target: /おわり/g, replace: '}' },
    { name: 'add', target: /菅野美穂/g, replace: '+' },
    { name: 'num1', target: /いいよ.*?来いよ！?/g, replace: '114514' },
    { name: 'num2', target: /イクイク/g, replace: '1919' },
    { name: 'random', target: /どうなんすかね/g, replace: 'Math.floor(Math.random() * 100) + 1' },
    { name: 'and', target: /そうだよ/g, replace: '&&' },
    { name: 'or', target: /あるいは/g, replace: '||' },
    { name: 'error', target: /ンアッー！/g, replace: 'throw new Error("（迫真）");' }
];
