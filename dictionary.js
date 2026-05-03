module.exports = [
    { name: 'start', target: /24歳、学生です。/g, replace: 'async function main() {' },
    { name: 'var', target: /やりますねぇ！\s+(\w+)\s*=\s*(.+)/g, replace: 'let $1 = $2;' },
    { name: 'print', target: /ブッチッパ！\s*「(.+?)」/g, replace: 'console.log("$1");' },
    { name: 'add', target: /菅野美穂/g, replace: '+' },
    { name: 'if', target: /アアーッ！\s*\((.+)\)/g, replace: 'if ($1) {' },
    { name: 'end', target: /王道を往く/g, replace: '}' }, // ブロックの終わり
];
