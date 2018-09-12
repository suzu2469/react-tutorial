# やっていき
## 何をやるのか
- 目標 -> 1ヶ月でゆるいSPAを作る
- やること
  - JavaScript特有の考え方を覚える
  - 最近のフロントエンド開発環境を作る
  - React & TypeScriptでTODOアプリを作る
  - React & TypeScriptでSPAを作る
- やらないこと
  - プログラミング基礎
  - JavaScriptの基礎(雰囲気がわかればOK)

---
以下更新予定
- 悪魔のWebpack
    - バンドラーとは
    - webpack.config.jsの書き方
    - 開発するときのTips
      - npm scripts
      - webpack-serve
      - DevelopmentビルドとProductionビルド

- いよいよReact
    - 最低限のコード
    - VirtualDOM？
    - jsx? tsx?
    - cssを書く

- コンポーネント至向とVirtualDOM
    - Reactにおけるコンポーネントとは
    - コンポーネントの書き方
      - SFC (Stateless Functional Component)
      - Class Style Component

- ゆるいSPAを作る(考え中)
    - React Router

- Ex. Redux
    - Storeとは
      - バケツリレー問題
    - State/Reducer/Action/View

## Nodeとエディタ あとyarnとか

### Node.jsインストールする
```bash
$ brew install node

# バージョン管理アプリ n を使う
$ npm install -g n

# LTS版のNodeが入る
$ n lts
 
$ node --version
v8.11.4
```

### node & npm の使い方
```bash
# REPLの起動
$ node

# ファイルの実行 (例)
$ node ./app.js

# プロジェクトのセットアップ
$ npm init

# プロジェクトにパッケージ追加
$ npm install --save PACKAGE_NAME

# 開発用のパッケージ追加
$ npm install --dev PACKAGE_NAME

# PCにパッケージ追加
$ npm install --global PACKAGE_NAME
```

### yarnを使おう
npmはパッケージの依存関係が壊れたりするのでできるだけ`yarn`を使いましょう

```bash
$ brew install yarn --without-node

# プロジェクトのセットアップ
$ yarn init

# プロジェクトにパッケージ追加
$ yarn add PACKAGE_NAME

# 開発用のパッケージ追加
$ yarn add --dev PACKAGE_NAME

# PCにパッケージ追加
$ yarn global add PACKAGE_NAME
```

### エディタ
何でもいいです(建前) VSCodeを使おう(本音)   
*TypeScript* を使った時にVSCodeならいい感じにしてくれます(宗教勧誘)

### Hello World!
```javascript
// 文字列を代入
const message = 'Hello World!'
// 標準出力
console.log(message)
```

```bash
$ node ./hello.js
Hello World!
```

## JavaScript基礎の基礎
知ってる人も知らない人も復習しましょう！

### REPL
JavaScriptをサクッと試すには *Node.js* のREPLを使うのが便利です。

```bash
$ node
> console.log('Hello World!')
Hello World!
undefined
```

### 変数
なんの変哲も無い変数です！   
動的型付けのため型を宣言する必要はありません。
```javascript
var a = 1
var b = 2

console.log(a + b) // -> 3
```

### 四則演算
両者が `number` 型である必要があります。
```javascript
var a = 6
var b = 2

console.log(a + b) // -> 8
console.log(a - b) // -> 4
console.log(a * b) // -> 12
console.log(a / b) // -> 3
```

### 文字列連結
これも両者が `string` 型である必要があります。
```javascript
var msg = 'Hello'

console.log(msg + ' World!') // -> Hello World!
```

### 関数
```javascript
function doubleMe(a) {
  return a * 2
}

console.log(douleMe(2)) // -> 4
```

### 配列
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

### 連想配列
*JSON* としてお馴染みですね！   
値を取り出すには `.` を付けてラベル名を続けます。
```javascript
var book = { name: '鈍器', page: 782 }

console.log(book.name) // -> 鈍器
console.log(book.page) // -> 782
```

### 条件分岐
```javascript
var isTrue = true

if (isTrue) {
  console.log('本当だよ')
} else {
  console.log('嘘だよ')
}
```

### 条件式
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

### 三項演算子
```javascript
var a = 1
var b = 2

// [条件] ? [trueだった時] : [falseだった時]
var result = a > b ? 'aはbより大きい' : 'aはbより小さい'
console.log(result) // -> 'aはbより小さい'
```

### 反復処理
- 初期化 ... 変数を宣言して「何から始めるか」を決めます
- 継続条件式 ... この条件式が `true` である限り `for` 内の処理をループします
- 増幅処理 ... 1ループ終わったら何をするかを決めます
```javascript
// for ([初期化]; [継続条件式]; [増幅処理])
for (var i = 0; i <= 10; i++) {
  console.log(i + '回目')
}
```

### 練習しよう！
#### 文字を繰り返したい
`str` を `count` 回繰り返して返却する関数を作って下さい！
```javascript
function strRepeater(count, str) {
  // ... Write your code here.
}

console.log(strRepeater(3, 'sushi')) // -> sushisushisushi
console.log(strRepeater(7, 'tabetai')) // -> tabetaitabetaitabetaitabetaitabetaitabetaitabetai
```

#### ネタを数えたい
新米板前が握った寿司は稀にネタが載っていないようです。   
ネタが載っていないものだけ数える関数を作って下さい！
```javascript
function countShari(s) {
  // ... Write your code here.
}

var sushis = ['イカ', 'シャリ', 'カンパチ', 'イカ天', 'シャリ', 'イカ', 'シャリ']
console.log(contShari(sushis)) // -> 3
```

## JavaScriptの闇に迫る

### JavaScriptの時代格差
JavaScriptはもともとプログラミング言語として開発されたわけではありませんでしたが、ココ数年で爆発的に機能が追加されて1プログラミング言語として十分に使えるようになりました。   
しかし、その成長故に古いJavaScriptと新しいJavaScriptではSyntaxが全然違います。（一部の処理は全く別言語のように見えます）   
大抵の場合 *IE11* までがサポートする **ES5** とそれ以降のブラウザがサポートする **ES6** に分けられます。   
これは *ECMAScript* として界で標準化されており、バージョンによって名前が違います。
最新のものだと **ES2018** まであります。詳しくは後ほど解説します。   
今 *ES5* を学ぶメリットは少ないのでこのハンズオンでは *ES6* 以降を中心に扱います。

#### ES5
```javascript
var elm = document.getElementById('app')
```

#### ES6
```javascript
const elm = document.querySelector('#app')
```

### トランスパイル
*IE11* は残念ながら *ES6* に対応していませんが、**トランスパイル** を利用することで *IE11* 向けでも *ES6* を使って開発することが出来ます。   
*トランスパイル* するライブラリを **トランスパイラ** と呼びます。   
*トランスパイラ* には **Babel** と呼ばれる *トランスパイラ* が一番使われています。これの使い方は後ほど詳しく説明します。   
(広義で言えば *TypeScript* も *トランスパイラ* の一つです)

### バンドル
#### ありがちパターン
例えばあるプロジェクトを運用している時、開発時よりライブラリをどんどん増やしたとします。   
その時、あなたの *HTML* ファイルは大抵こうなっているでしょう。（実話）

```html
<html lang='ja'>
<head>
  <script src="./assets/js/jquery.min.js">
  <script src="./assets/js/slick.min.js">
  <script src="./assets/js/bootstrap.min.js">
  <script src="./assets/js/utils.js">
  <script src="./assets/js/index.js">
</head>
<!-- ...some code -->
```

このように `<script>` タグで読み込むjsファイルが多すぎて管理が大変です。   
これはまだ良い方で、本当に煩雑なったものは同じ *HTML* 内で *jQuery* を `1.11.2` と `1.9.2` と `3.2.1` を重複して読み込んでいたりします（実話）

#### そういうのやめるために
これらを解決するためには **バンドラー** を使うのが一般的です。   
*バンドラー* とは、プロジェクトの全ての *JS* ファイルや *CSS* ファイル、また静的なアセットファイル（画像等）をまとめて管理し、適切なファイル数に出力してくれるライブラリです。   
例えば上記の例は、*バンドラー* を使用すると以下のようになるでしょう。

```html
<html lang='ja'>
<head>
  <script src="./assets/js/app.js">
</head>
```

*バンドラー* には `Webpack` `Browserify` `Parcel` など様々ありますが、今回は一番よく使われる `Webpack` を取り入れて説明していきます。

## ES6で綺麗に書こう
うるせ〜〜〜〜〜！！！ES6で書こう〜〜〜〜〜〜！！！！！（ドンッ！！！！）

### 変数宣言
基本的に`const`推奨です。   
`const`で宣言すると再代入不可になります。   
~~varなんて無かった~~
```javascript
const a = 1
a = 2 // Error!

let b = 1
b = 2 // OK!
```

### 文字列の結合
バッククオートで囲みます
```javascript
const str = 'World'

// 上と下は同じ
console.log('Hello ' + str)
console.log(`Hello ${str}`)
```

### ラムダ
関数の省略記法です。   
`function`の代わりに`=>`を使って関数を表すことができます。   
これを **アロー関数** と呼びます
```javascript
// 上と下は一緒です
function double(a) {
  return a * 2
}
const doubleLambda = (a) => {
  return a * 2
}
```
また、引数が1つのときは`()`を省略することが出来ます。
更に関数内で`return`しかしない場合は`{}`と`return`を省略できます。
```javascript
const double = a => a * 2
```
`=>`を連ねることで *高階関数* にすることが出来ます。
```javascript
const myAge = 22

const add = a => b => a + b
const addToMyAge = add(myAge)
console.log(`My next age is ${addToMyAge(1)}`)
```

### スプレッド演算子
配列やオブジェクトの前に`...`を書くとそれらを展開する事ができます。
```javascript
const abc = ['a', 'b', 'c']
const abcd = [...abc, 'd']
const dabc = ['d', ...abc]

console.log(abcd) // -> ['a', 'b', 'c', 'd']
console.log(dabc) // -> ['d', 'a', 'b', 'c']
```
```javascript
const product = { name: 'Tシャツ', price: 1980, description: '無地T' }

const changedProduct = { ...product, price: 980 }
console.log(changedProduct) // -> { name: 'Tシャツ', price: 980, description: '無地T' }
```

### 反復処理
`for`文はできるだけ使わないのが好ましいです。   
例えば以下のような例で、配列を操作する時は`for`を使わずにもっと短く書けます。
```javascript
const chars = ['H', 'e', 'l', 'l', 'o']
// BAD!
for (let i = 0; i <= chars.length; i++) {
  console.log(chars[i])
}
// GOOD!
chars.forEach(char => console.log(char))
```
また、規定の回数繰り返したい場合は以下のように書くと良いでしょう。   
ただしJavaScriptには`range`を作る関数が無いため以下のような黒魔術を使います。   
これは`Immutable.js`等を使用して回避することができますがココでは解説しません。
```javascript
const count = 5
// BAD!
for (let i = 0; i <= count; i++) {
  console.log('Bang!')
}
// GOOD...?
[...Array(count).keys()].forEach(i => console.log('Bang!'))
```

### 配列処理
#### .map()
配列を加工し新しい配列を返却します
```javascript
const persons = [
  { firstname: 'Taro', lastname: 'Sato' },
  { firstname: 'Kojiro', lastname: 'Sasaki' },
  { firstname: 'Eri', lastname: 'Kihara' }
]
const fullnames = persons.map((person, index) => {
  return `${person.firstname} ${person.lastname}`
})
console.log(fullnames) // -> ['Taro Sato', 'Kojiro Sasaki', 'Eri Kihara']
```

#### .filter()
条件から配列を検索し`true`の物だけ新しい配列として返却します
```javascript
const products = [
  { name: 'Apple pie', category: 'snack' },
  { name: 'Croissant', category: 'bread' },
  { name: 'Donut' , category: 'snack' },
  { name: 'Sandwich', category: 'bread' }
]

const snacks = products.filter((product, index) => {
  return product.category === 'snack'
})
console.log(snacks) // -> [{ name: 'Apple pie', category: 'snack' }, { name: 'Donut', category: 'snack' }]
```

#### .find()
**注意！動かないブラウザーがあります**   
条件から配列を検索し一番最初に`true`だった中身の値を返却します
```javascript
const users = [
  { id: 1, email: 'example@example.com' },
  { id: 2, email: 'hoge@hoge.com' }
]

const exampleUser = users.find((user, index) => {
  return /example@example.com/.test(user.email)
})
console.log(exampleUser) // -> { id: 1, email: "example@example.com" }
```

#### .reduce()
配列の中身を使って処理をし新しい値を返却します
```javascript
const numbers = [1, 2, 3, 4, 5]

// 第二引数は初期値
const sum = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue
}, 0)
console.log(sum) // -> 15
```

#### .reduceRight()
`.reduce()`の順番が逆向きバージョンです

#### .every()
全ての配列の中身が条件に合っているかを真偽値で返します
```javascript
const ages = [20, 33, 56, 35, 44]

const isAdult = ages.every((age, index) => age >= 20)
console.log(isAdult) // -> true
```

####.some()
いずれか一つの配列の中身が条件に合っているかを真偽値で返します
```javascript
const genders = ['women', 'women', 'women', 'men', 'women']

const hasMen = genders.some((gender, index) => gender === 'men')
console.log(hasMen) // -> true
```
## 非同期 is 何

### 非同期I/O
*JavaScript* が他のプログラミング言語と一番違う点として、 **イベント駆動型** であることが挙げられます。
そもそも通常のプログラミング言語はソースの上から流れるように実行されます。   
例えば *Python* なら、

```python
from time import sleep

print("Waiting 2 seconds.")
sleep(2000)
print("Done!")
```
上のように書けば「2秒待ってから"Done!"と表示する」処理を簡単に書けます。   
これは`sleep`関数が明示的に「待つ」ことを *Python* が理解しているためです。
一方 *JavaScript* はこうではありません。
*JavaScript* は関数から「待ってね」と言われると「ならそれまで別のことやってるから終わったら言ってね」と言い返します（せっかちですね）   
この「待つ必要がある処理を後回しにする」ことを **非同期I/O** と言います。   

### 実行タイミングのズレ
*非同期I/O* は「処理を後回しにする」と言いました。   
では以下のようなソースはどのように処理されるでしょうか？   
`./lazyYo.js`を実際に実行してみましょう。   
`setTimeout`関数は第二引数ミリ秒後に第一引数の関数を実行するものです。
```javascript
// この関数は実行に1秒かかります
function syncFunc() {
  setTimeout(function() {
    console.log('Yo')
  }, 1000)
}

console.log('Hey')
syncFunc()
console.log('Check it out!')
```
```bash
$ node ./lazyYo.js
Hey
Check it out!
Yo
```
なんだか語感が悪くなってしまいました。   
`syncFunc()` が「時間のかかる処理」だから、後回しにされて"Check it out!"が先に表示されているのがわかるでしょうか？
正しく表示させるには下記のようにします。
```javascript
function syncFunc(callback) {
  setTimeout(function() {
    console.log('Yo')
    callback()
  }, 1000)
}

console.log('Hey')
syncFunc(function() {
  console.log('Check it out!')
})
```
`callback`とは「終わったら呼んでね」の「呼んでね（何を？）」に当たる処理になります。   
便宜上`callback`と命名していますがデファクトなだけで何でも良いです。    
`syncFunc`の引数に関数を取り、自分の処理が終わるタイミングで実行させています。   
そう考えると`setTimeout`の第一引数の関数も`callback`であることにお気づきでしょうか？   
この「何か変わってから呼ぶ処理」のことを **コールバック処理** と呼びます。