JavaScript基礎の基礎
===
知ってる人も知らない人も復習しましょう！

# REPL
JavaScriptをサクッと試すには *Node.js* のREPLを使うのが便利です。

```bash
$ node
> console.log('Hello World!')
Hello World!
undefined
```

# 変数
なんの変哲も無い変数です！   
動的型付けのため型を宣言する必要はありません。
```javascript
var a = 1
var b = 2

console.log(a + b) // -> 3
```

# 四則演算
両者が `number` 型である必要があります。
```javascript
var a = 6
var b = 2

console.log(a + b) // -> 8
console.log(a - b) // -> 4
console.log(a * b) // -> 12
console.log(a / b) // -> 3
```

# 文字列連結
これも両者が `string` 型である必要があります。
```javascript
var msg = 'Hello'

console.log(msg + ' World!') // -> Hello World!
```

# 関数
```javascript
function doubleMe(a) {
  return a * 2
}

console.log(douleMe(2)) // -> 4
```

# 配列
取り出すには `0` から始まる `index` の値を `[]` 内に入れます
```javascript
var curry = ['にんじん', 'じゃがいも', 'たまねぎ']

console.log(curry[1]) // -> じゃがいも
```
配列の末尾に `.length` 付けると配列に入っている要素の数を知ることが出来ます！
```javascript
console.log(curry.length)
console.log([0, 0, 0, 0, 0].length) // -> 5
```

# 連想配列
*JSON* としてお馴染みですね！   
値を取り出すには `.` を付けてラベル名を続けます。
```javascript
var book = { name: '鈍器', page: 782 }

console.log(book.name) // -> 鈍器
console.log(book.page) // -> 782
```

# 条件分岐
```javascript
var isTrue = true

if (isTrue) {
  console.log('本当だよ')
} else {
  console.log('嘘だよ')
}
```

# 条件式
```javascript
var a = 1
var b = 2
var c = a

console.log(a > b) // -> false
console.log(a < b) // -> true
console.log(a === c) // -> true
console.log(a !== b) // -> false
```
その他にも…   

|条件演算子|意味|
|:-|:-|
|a > b|aはbより大きい|
|a < b|aはbより小さい|
|a >= b|aはb以上|
|a <= b|aはb以下|
|a === b|aはbと等しい|
|a !== b|aはbと等しくない|

# 三項演算子
```javascript
var a = 1
var b = 2

// [条件] ? [trueだった時] : [falseだった時]
var result = a > b ? 'aはbより大きい' : 'aはbより小さい'
console.log(result) // -> 'aはbより小さい'
```

# 反復処理
- 初期化 ... 変数を宣言して「何から始めるか」を決めます
- 継続条件式 ... この条件式が `true` である限り `for` 内の処理をループします
- 増幅処理 ... 1ループ終わったら何をするかを決めます
```javascript
// for ([初期化]; [継続条件式]; [増幅処理])
for (var i = 0; i <= 10; i++) {
  console.log(i + '回目')
}
```

# 練習しよう！
## 文字を繰り返したい
`str` を `count` 回繰り返して返却する関数を作って下さい！
```javascript
function strRepeater(count, str) {
  // ... Write your code here.
}

console.log(strRepeater(3, 'sushi')) // -> sushisushisushi
console.log(strRepeater(7, 'tabetai')) // -> tabetaitabetaitabetaitabetaitabetaitabetaitabetai
```

## ネタを数えたい
新米板前が握った寿司は稀にネタが載っていないようです。   
ネタが載っていないものだけ数える関数を作って下さい！
```javascript
function countShari(s) {
  // ... Write your code here.
}

var sushis = ['イカ', 'シャリ', 'カンパチ', 'イカ天', 'シャリ', 'イカ', 'シャリ']
console.log(contShari(sushis)) // -> 3
```
