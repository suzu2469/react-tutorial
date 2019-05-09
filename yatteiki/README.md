# やっていき
結構適当言ってるので、マサカリは[Github](https://github.com/suzu2469/react-tutorial)のIssueから飛ばして下さい。
## 何をやるのか
### やること
  - JavaScript特有の考え方を覚える
  - 最近のフロントエンド開発環境を作る
  - React & TypeScriptでTODOアプリを作る
  - React & TypeScript + Firebase でSPAを作る
  
 ### やらないこと
  - プログラミング基礎
  - JavaScriptの基礎(今の時点で雰囲気がわかればOK)

---

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
// ./hello.js
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

#### .some()
いずれか一つの配列の中身が条件に合っているかを真偽値で返します
```javascript
const genders = ['women', 'women', 'women', 'men', 'women']

const hasMen = genders.some((gender, index) => gender === 'men')
console.log(hasMen) // -> true
```


## クラス
*JavaScript* には`ES5` までクラスが無かったのですが、`ES6` より本格的に導入されました。   
*React* でふんだんに使うので是非覚えていきましょう。   

### クラスを作ってみる
例として人物の情報を扱う `Person` クラスを作ってみましょう。

```javascript
class Person {
  // コンストラクタ
  constructor(firstName, lastName, age) {
    // クラスメンバーには this を使ってアクセスします
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
}
```

`Person` は姓, 名, 年齢の情報を持っていて、 *コンストラクタ* でそれぞれ初期化されます。   
インスタンスにするには、 `new` を使って宣言します。

```javascript
const ichro = new Person('ichiro', 'suzuki', 44)
ichiro.firstName // -> ichiro
ichiro.age // -> 44
```

### ゲッターとセッター

このままだとフルネームが取れなくて不便なので、`Person` に `fullName` を取れるゲッターを設定してみましょう。

```javascript
class Person {
  // ... 省略
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const ichiro = new Person('ichiro', 'suzuki', 44)
ichiro.fullName // -> ichiro suzuki
```

これで `fullName` からフルネームを取れるようになりました。   
`get` を使ってメソッドを定義するとインスタンスでは変数のように扱われます。   
但し `ReadOnly` であることに注意して下さい。

```javascript
// これはできない
ichiro.fullName = 'Ichiro Suzuki'
```

加えて、 `set` を使ってセッターを定義することができます。   
また、メンバー名の先頭に `_` を付けるとプライベートメンバーになります。   
`age` が文字列の数字 `'45'` でも代入されてしまうため、以下のようにセッターを設定します。

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  // ... 省略
  get age() {
    return this._age
  }
  set age(age) {
    // number型に直して代入する
    this._age = parseInt(age)
  }
}

const ichiro = new Person('ichiro', 'suzuki', 44)
console.log(ichiro.age) // -> 44
ichiro.age = '45'
console.log(ichiro.age) // -> 45
```

### メソッド
これで `age` が文字列であっても数値に直して代入することができるようになりました。   
しかし、今の `Person` は何もしてくれないしつまらないので、自己紹介ができるようにしてみましょう。

```javascript
class Person {
  // ... 省略
  whoAreYou() {
    return `僕は${this.fullName}です。年齢は${this.age}歳です。`
  }
}

const ichiro = new Person('ichiro', 'suzuki', 44)
console.log(ichiro.whoAreYou()) // -> 僕はichiro suzukiです。年齢は44歳です。
```

自己紹介してもらえるようになりました。この `whoAreYou()` のようなメソッドを *インスタンスメソッド* と呼びます。   
その他に *プライベートメソッド* と *静的メソッド* があります。   

```javascript
class Person {
  // ... 省略
  // プライベートメソッド
  _nextAge() {
    return this.age + 1
  }
  // 静的メソッド
  static handShake() {
    return `🤝`
  }
}

Person.handShake() // -> 🤝
```

*静的メソッド* はインスタンス化していないクラスから使用します。   

## 非同期 is 何

### 非同期I/O
*JavaScript* が他のプログラミング言語と一番違う点として、 **イベント駆動型** であることが挙げられます。
そもそも通常のプログラミング言語はソースの上から流れるように実行されます。   
例えば *Python* なら、

```python
from time import sleep

print("Waiting for 2 seconds.")
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

## もっと非同期する

### Promise
さて、 *JavaScript* は *非同期I/O* という話をしました。   
このサンプルコードの動作はもう違和感なく想像できるでしょうか？

```javascript
const waitOneSec = callback => {
  setTimeout(callback, 1000)
}

console.log('Waiting...')
waitOneSec(() => {
  console.log('Yeah!')
})
```

一秒間待ってから "Yeah!" と表示するための簡単なコードでした。   
しかし、例えばある関数 `lazyFunc` があったとして、   
中で何をしているかわからないし、いつ終わるのかもわからない状態ではどうでしょう。

```javascript
// callbackもない！
lazyFunc()
console.log('Called after lazyFunc!')
```

これはお手上げです。    
*JavaScript* ではこのような状態を簡単に解決するため **Promise型** というものが用意されています。   
これは「ある関数が終わったら、次の関数を実行する」という処理を直感的に記述することができます。   
実際にサンプルコードを見てみましょう。

```javascript
const stepOne = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('1 sec')
      resolve()
    }, 1000)
  })
}

const stepTwo = () => {
  setTimeout(() => {
    console.log('3 sec')
  }, 2000)
}

stepOne().then(() => stepTwo())
```

まず関数定義では *Promise型* を返しているのがわかります。   
`stepOne` 関数を実行すると *Promise型* が返ってくるので、 *Promise型* に倣ったオペレーションを実行することができます。    
`stepOne().then()` とは何か？についてはこれから詳しく解説しますが、とにかくこのサンプルコードを実行して何が起こっているのか少し考えてみてください。

#### Promiseをもっと理解する
`Promise` は直訳すると「約束する・保証する」などの意味になりますが、 *JavaScript* では「処理が終わったかどうかを管理。するオブジェクト」という意味合いが近いかもしれません。   
まず `new Promise` で作られた `Promise` インスタンスは、以下のような特性があります。

```javascript
new Promise((resolve, reject) => { /* ...some code */ })
```

`Promise` インスタンスは `resolve` と `reject` の引数を取った関数を引数にとることがわかります。   
その関数内での処理は `Promise` によって保証され、順番を安全に次の処理に移すことができます。   
ではどのようにして次の処理へ順番を移すのでしょうか？

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 1000)
}).then(() => {
  console.log('After 1 second.')
})
```

まずは `setTimeout` の部分に注目してください。   
1秒後に引数から取った `resolve()` が実行されています。   
`Promise` はまさにこの `resolve` が実行されたタイミングで順番を次の処理に移しているのです！   
その「次の処理」は `.then()` と記述でき、「○○の関数が終わったら」実行する処理を入れることができます。   
先ほどのサンプルコードをもう一度振り返ってみましょう。   

```javascript
const stepOne = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('1 sec')
      resolve()
    }, 1000)
  })
}

const stepTwo = () => {
  setTimeout(() => {
    console.log('3 sec')
    resolve()
  }, 2000)
}

stepOne().then(() => stepTwo())
```

`stepOne` は「１秒後にresolveするPromise」を返します。
ですから実行された `stepOne` には `.then()` をつけることができ、 `stepTwo` の順番が保証されるのです。
。   
#### エラーハンドリング
さて、 `resolve` で順番を次の処理へ渡すことができました。   
しかし `resolve` と一緒に渡されていた `reject` とは何だったのでしょうか？   
試しに以下のコードを実行してみます。

```javascript
new Promise((resolve, reject) => reject())
```

何か良くないエラーが出てきたはずです。   
この `reject` は `Promise` 内で起こったエラーを任意のタイミングで返却し、その全ての処理を止めるものです。   
「全ての処理」とは本当に「そのPromiseで管理された全ての処理」のことで、例えば以下のような処理です。

```javascript
new Promise((resolve) => {
  console.log('Step One')
  resolve()
}).then(() => {
  return new Promise((resolve, reject) => {
    console.log('Step Two')
    reject()
  })
}).then(() => {
  return new Promise(resolve => {
    console.log('Step Three')
    resolve()
  })
})
```

この処理は "Step One" しか表示されなかったはずです。なぜなら、 "Step Two" の時点で `reject` を実行しそれ以降の全ての処理を中止しているからです。   
しかし `reject` はただエラーを返すだけではありません（それなら `throw new Error()` でも良いはずです）   
その本質は「エラーハンドリング」にあります。以下のコードを見てみましょう

```javascript
new Promise(resolve => {
  console.log('Step One')
  resolve()
}).then(() => new Promise((resolve, reject) => {
  console.log('Step Two')
  reject()
}).catch(e => {
  console.log(e)
})
```

新しく `.catch()` が出てきました。   
`try/catch` と全く同じ意味の `.catch()` です。    
察しの良い方ならもうお気づきかもしれませんがこの `.catch()` を指定すると `reject()` された時のエラーハンドリングをすることができます。  
例えばAPIからの値を [fetch](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch) する時、よくお世話になるでしょう。

```javascript
// fetchはPromise型が返ってきます
fetch('https://example.com/api/example')
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(e => console.error('Failed fetch'))
```

### async/await
さて、一通り `Promise` の概要を読んで頂いたわけですが、実は昨今の *JavaScript* で `Promise` をそのまま使うことは少なくなってきています。   
問題は、`Promise` はその処理を繋げるためコールバック関数の使用を余儀なくされているからです。   
単純な順番管理であれば良いですが、例えば `fetch` で取得した値の副作用によって処理を分けたい場合、

```javascript
fetch('https://example.com/api/example')
  .then(res => res.json())
  .then(json => {
    if (json.data) {
      return new Promise(resolve => {
        // ... some code
      })
    } else return Promise.reject()
  })
  .catch(e => console.error('Failed'))
```

のように、複雑になればなるほど無限にネストすることになるでしょう。   
これを **コールバック地獄** と呼び、 *JavaScript* ではその可読性の低さから良く思われていません。   
これを解決するために、 **ES2017** にて以下のような文法が策定されました。

```javascript
const asyncFunc = async () => {
  const res = await fetch('https://example.com/api/example')
  const json = res.json()
  if (!json.data) return Promise.reject()
  // ... some code
}

asyncFunc()
```

如何でしょうか？先ほどの例と比べかなりスッキリとした見た目になり、処理を追いやすくなりました。   
よく見ると `async` `await` の記述が増えています。単純に記述できるのはこの二つの文法のおかげです。   
この二つは互いにペアだと思っていてください。   
まずは `async` についてですが、

```javascript
// ラムダ式の場合
const asyncFunc = async () => {
  // ... some code
}

// 普通の関数定義の場合
const asyncFunc = async function () {
  // ... some code
}
```

このように関数を定義するときに使用します。   
これはそんなに難しいものではありません。`async` を付けた関数は今まで通り以下のような関数と同義です。

```javascript
const asyncFunc = () => {
  return new Promise(resolve => {
    // ... some code
    resolve()
  })
}
```

`async` を付けた関数は *Promise型* になるのです。   
いままで *コールバック関数* によって定義しなければいけなかった処理内容を通常の関数と同じように記述できます。   
行数にして3行省略されるだけかもしれませんが、それはあなたのコードをもっとスマートにしてくれるでしょう。   
また、`await` についても同じく難しくありません。しかしこれは `async` の関数の中でのみ使用することができます。

```javascript
const waitOneSec = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 1000)
  })
}

const asyncFunc = async () => {
  console.log('Waiting for a second...')
  await waitOneSec()
  console.log('Done!')
}
```

`await` は付与された関数（もしくは *Promise型* ）の処理がおわるまで待ってねという命令です。   
上記のサンプルコードでは `waitOneSec` 関数が1秒待ってから *Promise* 型を返しますが、それを `asyncFunc` 関数内で実行し、`await` を付与して待たせています。   
**ただし `await` を付けられるものは *Promise型* が返ってくるものに限ります。** 
   
さて、4章で例に出した *Python* の以下のコードを少し思い出してみましょう。

```python
from time import sleep

print('Waiting for 2 seconds.')
sleep(2000)
print('Done!')
```

*Python* は *非同期I/O* ではないのでコードが書かれた順番に実行されるという話をしました。   
実は *JavaScript* でも `async/await` を使って同じようなSyntaxを再現することができます。

```javascript
// sleep関数の定義
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const main = async () => {
  console.log('Waiting for 2 seconds.')
  await sleep(2000)
  console.log('Done!')
}

main()
```

これが `async/await` の本当の力です。   
*非同期I/O* の *JavaScript* でも今までの手続き型のような処理を簡単に記述することができます。   
今まで `Promise` のコールバック関数を無限にネストしていたことに比べたら、大きな進歩だと思いませんか？


## TypeScript
*TypeScript* は *JavaScript* に静的な型を定義できる *altJS* です。   

```typescript
const n: number = 1

function double(a: number): number {
  return a * 2
}
```

このように関数や変数の後に `:` を付けて型を定義することが出来ます。

### REPLを用意する
*TypeScript* をサクッと試すために、REPLを用意してみましょう。   
*npm* パッケージの *ts-node* を使用します。   

```bash
$ yarn global add ts-node
$ ts-node -v
$ ts-node
>"Hello World"
'Hello World'
```



### 型の基本 (プリミティブ型)
TypeScriptで扱う型は主に以下です。   

|定義|説明|
|:-|:-|
|any|何でも可|
|number|数値|
|string|文字列|
|boolean|真偽値|
|null|null値|
|void|無|
|undefined|undefined|

これらは互いに代入不可で、途中で型を変える事はできません。

```typescript
let n: number = 1
n = 'hoge' // ->  error: Type '"hoge"' is not assignable to type 'number'.
```

#### 配列
```typescript
const numbers: number[] = [1, 2, 3]
```

型の語尾に`[]`を付けるとその型の配列になります。   
また、`[]`が使えない時は以下のような方法で作ることもできます。

```typescript
const numbers: Array<number> = [1, 2, 3]
```

#### タプル
```typescript
const tuple: [string, number] = ['カツ丼', 500]
```

`[]` 内で順番に型を入れると、その型のタプルを作ることができます。

#### 型の後付け
何かの型が `any` だった時、型を上書きすることができます

```typescript
const value: any = 'hello'

const upperValue: string = (<string>value).toUpperCase()
// もしくは
const length: number = (value as string).length()
```


### リテラル型
#### Type alias
以下のようにするとプリミティブ型に別名を付けることが出来ます。

```typescript
type UserID = number
let id: UserID

id = 1
id = 'hoge' // -> error: Type '"hoge"' is not assignable to type 'number'.
```

型に別名を付けることでコード全体の可読性を上げることができ、コンパイラにバグを見つけてもらうことができます。   
また、`type` はオブジェクトの型を作ることもできます。

```typescript
type ShopID = number
type ProductID = number

type ProductType = {
  id: ProductID
  name: string
  description: string
  shopId: shopId
}

const product: ProductType = {
  id: 1,
  name: 'かばん',
  description: '便利',
  shopId: 3
}
```

このオブジェクトの型内で変数名の直後に `?` を入れるとあってもなくても良いプロパティを作成できます。

```typescript
type ProductType = {
  id: number
  name: string
  description?: string
  isSale?: boolean
}
```

#### Interface
`type` と同じく、`interface` を使って型を作ることもできます。

```typescript
type ShopID = number
type ProductID = number

interface IProduct {
  id: ShopID
  name: string
  description?: string
  shopId: ShopID
}

const product: ProductType = {
  id: 1,
  name: 'かばん',
  description: '便利',
  shopId: 3
}
```

また、`interface` は `extends` すると継承できます。

```typescript
interface BaseProduct {
  id: number
  name: string
}

interface ProductWithOptions extends BaseProduct {
  options: string[]
}

const product: ProductWithOptions = {
  id: 1,
  name: 'Tシャツ',
  options: ['S', 'M', 'L']  
}
```

`class` と併用すると `class` の型を定義することが出来ます。   
クラス宣言後に `implements` を記述して継承したい `interface` 名を指定します。   

```typescript
interface IProduct {
  id: number
  name: string
  description?: string
}

class Product implements IProduct {
  constructor(id: number, name: string, description?: string) {
    this.id = id
    this.name = name
    this.description = description || null
  }
}
```

### TypeScriptのトランスパイル
*TypeScript* は *JavaScript* の実行環境では動きません。   
`ts-node` を使って例外的に実行できていましたが、基本は `.ts` ファイルを `.js` ファイルにトランスパイルして使うものです。   
実際に *TypeScript* のプロジェクトを作ってみて、どうやってトランスパイルしていくか学んでいきましょう。   


#### プロジェクトを作る
```bash
# お好きな場所にフォルダを作って下さい
$ mkdir ./ts-project
$ cd ./ts-project

# ./package.json を作成します
$ yarn init -y

# TypeScript のトランスパイラを追加します (本番環境では使用しないのでdevDependenciesに追加します)
$ yarn add --dev typescript
```

プロジェクトに `typescript` パッケージを追加できました！   

#### TypeScriptの設定
次に `typescript` で使用する設定を決めていきます。   
`./tsconfig.json` を作って、一先ず以下のように入れてみましょう。

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "lib": [
      "es2017",
      "dom"
    ]
  }
}
```

`tsconfig.json` には他にもたくさんのオプションを指定することができますが、上記の例だけ記載しておけば大抵動くと思います（多分）   
もっと詳しく`tsconfig.json`の設定を知るには、[この記事](https://qiita.com/shora_kujira16/items/73ccf53a5ecfef8f07c1)が参考になります。   
#### トランスパイルしてみる

ということで初めの一歩をやってみましょう！まずは `./app.ts` を作って、その中に下記のコードを記載します。

```typescript
const a: number = 1

console.log(a + 2)
```

この `./app.ts` をトランスパイルしてみましょう！

```bash
$ yarn exec tsc ./app.ts
```

するとプロジェクトフォルダに `./app.js` が作られていると思います。   
中身を確認すると、しっかりトランスパイルされていることがわかるでしょうか？   

```javascript
var a = 1;
console.log(a + 2);
```

もちろん `node` で実行できます！

```bash
$ node ./app.js
3
```

`./app.ts` をトランスパイルして実行することができました。   

#### プロジェクトを整える
しかし、プロジェクトフォルダに出力されるのは分かりづらいので、   

- `.ts` を `./src` へ   
- `.js` を `./dist` へ    

置くように設定します。   
(フォルダの名前は何でも良いですが、デファクトでそうすることが多いです)   
`tsconfig.json` を編集してみましょう。   

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "outDir": "dist",
    "rootDir": "src",
    "lib": [
      "es2017",
      "dom"
    ]
  }
}
```

`app.ts` を `./src` に移動します。   

```bash
$ rm -rf ./app.js
$ mkdir src
$ mv ./app.ts ./src/
```

トランスパイルを実行します。

```bash
$ yarn exec tsc
$ tree dist
dist
└── app.js

0 directories, 1 file
```

無事 `./src` の中の `.ts` ファイルを `./dist` へトランスパイルすることができました！   
ところで、一々 `yarn exec` するのは面倒なので、 `npm scripts` に登録してしまいしょう。   

```./package.json
{
  "name": "ts-project",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build": "tsc",
    "start": "node ./dist/app.js"
  },
  "devDependencies": {
    "typescript": "^3.0.3"
  }
}

```

`yarn build` でトランスパイルして、 `yarn start` で実行できるようにしました。   
実際にやってみます。

```bash
$ yarn build
yarn run v1.7.0
$ tsc
✨  Done in 1.49s.

$ yarn start
yarn run v1.7.0
$ node ./dist/app.js
3
✨  Done in 0.14s.
```

これ以降で出てくる例を実行する際は `yarn build` `yarn start` の順に実行すればOKです。   
それが面倒な場合は `ts-node ./src/app.ts` として頂いてもOKです！

### importとexport
#### export default
*TypeScript* と一部の *JavaScript* では、コードを複数ファイルに分割し再利用することができます。   
例として、非同期の話のときに出てきた `sleep` 関数を実装したファイルを作ってみましょう。   

```typescript
// ./src/sleep.ts
const sleep = ms => {
  return new Promise(resolve => {
    setTimeout{resolve, ms}
  })
}
```

さて、この関数をメインとなる `app.ts` の中で使っていきたいわけですが、このままでは使えません。   
正しく使用するためにまず `sleep` 関数を外部で使用可能であると宣言します。

```typescript
// ./src/sleep.ts
const sleep = ms => {
  return new Promise(resolve => {
    setTimeout{resolve, ms}
  })
}

export default sleep
```

`export default` の後に `sleep` を置くことによって、「このファイルは `sleep` 関数を標準で出力します」と宣言することができます。   
実際に `app.ts` で読み込むには以下のようにします。(`app.ts`の中身は空にしておきました)

```typescript
// ./src/app.ts
import sleep from './sleep'
```

`import` の後に読み込んだ物の名前（自由です）を決め、`from` の後にどこから読み込むかを書きます（拡張子は省略可能）   
実際に `sleep` を使う処理を記述して実行してみましょう！

```typescript
// ./src/app.ts
import sleep from './sleep'

const main = async () => {
  console.log('Waiting...')
  await sleep(3000)
  console.log('Done!')
}

main()
```

```bash
$ yarn build
$ yarn start
yarn run v1.7.0
$ node ./dist/app.js
Waiting...
Done!
✨  Done in 3.15s.
```

#### deafult しない
`export default` は `default` 抜きでも使うことができます。   
例として1秒待つだけの `sleepOneSec` を実装してみましょう。

```typescript
// ./src/sleep.ts
const sleep = ms => {
// ...省略
}

export const sleepOneSec = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 1000)
  })
}

export default sleep

```

既に `export default` は使用されているので、 `default` 抜きで `export` しています。   
この場合 `import` する際は以下のように工夫が必要です。

```typescript
// ./src/app.ts
import sleep from './sleep'
import { sleepOneSec } from './sleep'
```

`{}` を使って `import` していますが、`default` の時と違い名前は `export` した時と同じにしなければいけません。   
また、`from` が被っている場合 `,` を使用して複数 `import` することができます。

```typescript
// ./src/app.ts
import sleep, { sleepOneSec } from './sleep'
```

さらに、`{}` の中では `as` を使って別名で宣言することが可能です。

```typescript
import sleep, { sleepOneSec as soc } from './sleep'

// 別名で宣言される
soc()
```

ということで、`app.ts` を以下のようにしてみましょう！

```typescript
// ./src/app.ts
import sleep, { sleepOneSec } from './sleep'

const main = async () => {
  console.log('Waiting...')
  await sleep(3000)
  console.log('Done!')
  console.log('Waiting for a second')
  await sleepOneSec()
  console.log('Done!')
}

main()
```

```bash
$ yarn build
$ yarn start
yarn run v1.7.0
$ node ./dist/app.js
Waiting...
Done!
Waiting for a second
Done!
✨  Done in 4.15s.
```

## Webpackと戦う
さて、「*TypeScript* も理解したことだし、そろそろ *React* やりましょう！」と言いたいところですが、あともう一つだけお付き合いください。   
タイトルにもある通り *Webpack* の話ですが、こいつが中々厄介でフロントエンドを難しくしている要因の一つになっています。   
以前お話した通り *Webpack* はバンドラなわけですが、一先ず先程までやっていた *TypeScript* のコードを見てみましょう。   

```bash
$ yarn build
$ tree ./dist
./dist
├── app.js
└── sleep.js

0 directories, 2 files
```

`app.js` と `sleep.js` の2つあります。   
ご存知の通り、ブラウザーでは複数ファイルに分割した *JavaScript* を実行できません！   
(`<script>` を使えばできないことはないですが、いずれにせよこのままでは動かせません)   
ですので、このファイル達を一つの `.js` ファイルに纏める必要があります。   
それをいい感じにやってくれるのが *Webpack* ということです。   

### パッケージを追加する
何はともあれやってみましょう。   
前回に引き続き `./ts-project` を使ってやっていきます。   
まずは *Webpack* のパッケージを追加しましょう。

```bash
$ yarn add --dev webpack webpack-cli
```

`webpack` が実際にバンドルしてくれるコアライブラリで、`webpack-cli` はそれを実行するためのコマンドラインツールです。   
次に、`webpack` に `.ts` ファイルを読み込ませるため *Loader* というものを追加します。

```bash
$ yarn add --dev ts-loader
```

### 設定ファイルを作る
`webpack` がどのようにバンドルするかを決める設定ファイルを作ります。   

```javascript
// ./webpack.config.js
const path = require('path')

module.exports = {
  // 読み込むファイルの設定
  entry: './src/app.ts',
  output: {
    // 書き出すファイルの設定
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

（`path` は `node` の標準パッケージで、`require` は `import` と似たようなものです）
これで `./src/app.ts` を読み込んで、`./dist/app.js` として書き出してくれるようになります。   
普通はこれでOKなのですが、今回は *TypeScript* を使っているため *Loader* の設定が必要です。

```javascript
// ./webpack.config.js
const path = require('path')

module.exports = {
  // 読み込むファイルの設定
  entry: './src/app.ts',
  output: {
    // 書き出すファイルの設定
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  // .ts 等を省略する設定
  resolve: {
    extensions: ['.ts', '.js']
  },
  // Loaderの設定
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Loaderを適用したいファイルを正規表現で指定します
        use: 'ts-loader', // 何のLoaderを使うか指定
        exclude: /node_modules/ // Loaderから除外するフォルダーをしています
      }
    ]
  }
}
```

*Loader* を指定して `.tsx` ファイルを `webpack` が扱える様になったので、いよいよバンドルしてみましょう。

```bash
$ rm -rf dist
$ yarn exec webpack
yarn exec v1.7.0
Hash: 021a04d1575ddeb2e461
Version: webpack 4.18.0
Time: 1535ms
Built at: ****-**-** **:**:**
 Asset      Size  Chunks             Chunk Names
app.js  2.83 KiB       0  [emitted]  main
Entrypoint main = app.js
[0] ./src/app.ts 3.08 KiB {0} [built]
[1] ./src/sleep.ts 344 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack willfallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
```

このような感じになればOKです。   
出力されたファイルは

```bash
$ tree dist
dist
└── app.js

0 directories, 1 file
```

`app.js` のみになりました！これでブラウザで使用することができます。

### Webpackの何が難しいのか？
さて、*Webpack* で `.ts` ファイルをバンドルすることができました。   
「普通に楽勝だったし、何がフロントを複雑にしている要因なんだ？」と思いますよね。   
実はまだ 1/5 くらいしか完了していません。   
このセクションではもうやりませんが、思いつくだけでもあと以下をやる必要があります。

- `css-loader` と `style-loader` と併せてプリプロセッサ用の `sass-loader` とかを設定する
- *HTML* ファイルを自動出力するために `html-webpack-plugin` を設定する
- 画像は `file-loader` で指定のフォルダ(`./dist/assets/img`とか)に出力する
- 本番環境用にファイルを軽くするため、*Split Chunks* や *Tree Shaking* を利用する
- 本番環境でキャッシュの影響を受けないように、`.js`ファイルに *Hash* を付ける
- *IE11* じゃ動かないので `babel` `babel-loader` を設定して、エントリーポイントに `core-js` を入れる

と、やることが盛り沢山です。   
この「フロントする上での最低ライン」を整えるだけで、設定ファイルがかなり肥大化し複雑になります。   
また、設定ファイルが大きくないといけないということはそれだけ構築する人の知識に依存することになり、時間もかかります。   
最近ではこういった *Webpack* の設定を包括して面倒を見てくれるパッケージ等が増えていて、あまり気にする必要も無くなってきました。   
（`create-react-app`や`vue-cli v3`など）   
しかし、プロジェクトを進めていく内に独自の設定を記述したくなり、カスタマイズしようとすると途端に *Webpack* の知識が求められます。   
ですので、今回やっている内容は是非覚えていって下さい。*React* をやらないにしてもきっと役に立つでしょう。

### 他の選択肢
*Webpack* はとにかく大変なので、サクッとなにか作るには [Parcel](https://parceljs.org/) を使うのが良いと思います。   
「ゼロコンフィグ」を掲げていて、何も設定しなくても *TypeScript* や *Sass* などを勝手にバンドルしてくれます。   
但し、細やかな設定は苦手なので実際のプロダクトでは *Webpack* が使われることがほとんどです。   
使ってみたい人は公式ドキュメントを見て是非試してみて下さい。   

## いよいよReact
ここまでお疲れ様でした。   
長かったですがこれから本命の *React* をやっていきましょう。   
とはいえいきなり大きなアプリケーションを作るのは難しいので、 *React* も段階を踏んで少しずつ学べるように書いていこうと思います。

### 0から始める
まずは *React* を快適に書けるように、プロジェクトをセットアップしていきます。   
お好きな場所にからのディレクトリを作って *TypeScript* *Webpack* *React* をインストールしていきます。   

```bash
$ mkdir react-ts-firstapp
$ cd react-ts-firstapp
$ yarn init -y

# 開発時にしか使わないので DevDependencies に追加する
$ yarn add --dev typescript webpack webpack-cli ts-loader

# VSCodeで型を保管してもらうためのパッケージ
$ yarn add --dev @types/react @types/react-dom

# Reactの基本パッケージと DOMにレンダリングするパッケージ
$ yarn add react react-dom
```

次に、*TypeScript* を使うための `./tsconfig.json` を作ります。

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "baseUrl": "src",
    "outDir": "dist",
    "jsx": "react",
    "lib": [
      "es2017",
      "dom"
    ]
  }
}
```

`"jsx": "react"` オプションを指定することで *TypeScript* 上で *React* が使えるようになります！忘れがちなので覚えておいて下さい。   
次に *Webpack* でバンドルするための `./webpack.config.js` を設定します。   

```javascript
const path = require('path')

module.exports = {
  // React(厳密にはJSX)を使う時は拡張子を 'tsx' にします
  entry: './src/index.tsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  }
}
```

*JSX* の話は後ほどお話しますが、*React* を使う時は拡張子に 'x' をつける必要があります。   
*JavaScript* だったら 'jsx' に、*TypeScript* だったら 'tsx' という具合です。  

あとは、*Webpack* を簡単に実行できるように `NPM Scripts` を作って終わりです。   

```json
{
  "name": "react-ts-firstapp",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build": "webpack -p"
  },
  "devDependencies": {
    "@types/react": "^16.4.14",
    "@types/react-dom": "^16.0.7",
    "ts-loader": "^5.1.1",
    "typescript": "^3.0.3",
    "webpack": "^4.19.0",
    "webpack-cli": "^3.1.0"
  },
  "dependencies": {
    "react": "^16.5.1",
    "react-dom": "^16.5.1"
  }
}

```

### 初めてのReact
さて、このままでは*React* を書いてもレンダリングするHTMLがありませんので、以下のようなHTMLファイル `./index.html` を作ります。   

```html
<!-- ./index.html -->
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Hello React!</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./dist/app.js"></script>
  </body>
</html>
```

`<div id="app"></div>` の中に *React* でレンダリングしていきます！   
*Webpack* でバンドルされたファイルは `./dist/app.js` フォルダに出力されるので、併せてそのファイルも読み込むように記述しておきます。   
   
次は *Webpack* が一番最初に読み込むファイル `./src/index.tsx` を作ります。   

```typescript
// ./src/index.tsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Reactのコンポーネントをインポートする
import App from './App'

// ReactDOM.render() でHTML要素をレンダリングする
ReactDOM.render(<App />, document.querySelector('#app'))
```

`ReactDOM.render()` は第一引数に「レンダリングする中身」を、第二引数に「レンダリング先」を指定します。   
この「レンダリングする中身」もとい *React* では **コンポーネント** という単位で管理しますが、   
`./App.tsx` はまだ作っていないので以下のように作成します。   
※ *コンポーネント* については後ほど詳しく説明します。

```tsx
// ./src/App.tsx
import * as React from 'react'

const App: React.FC = props => (
  <div>Hello World!</div>
)

export default App
```

これが *コンポーネント* となって、 `index.tsx` によってHTMLファイルにレンダリングしています。   
では実際にビルドして動かしてみましょう！   

```bash
$ yarn build
$ tree dist
dist
└── app.js
```

`index.html` をブラウザーで開くと、「Hello World!」が表示されます！   

<img src="/assets/img/yatteiki/react_hello_world.png" />

### 開発をもっと便利にする
今 `yarn build` して動作を確認していますが、これでは毎度毎度実行するのは面倒です。   
ですので、 `webpack-serve` を導入して便利にしましょう。   
これで開発用のローカルサーバーを建ててくれたり、ファイルを更新するとブラウザを勝手にリロードしてくれたりします。

```bash
$ yarn add --dev webpack-serve
```

これも *NPM Scripts* に登録してしまいます。

```json
{
  "name": "react-ts-firstapp",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build": "webpack",
    "dev": "webpack-serve"
  },
  "devDependencies": {
    "@types/react": "^16.4.14",
    "@types/react-dom": "^16.0.7",
    "ts-loader": "^5.1.1",
    "typescript": "^3.0.3",
    "webpack": "^4.19.0",
    "webpack-cli": "^3.1.0",
    "webpack-serve": "^2.0.2"
  },
  "dependencies": {
    "react": "^16.5.1",
    "react-dom": "^16.5.1"
  }
}
```

`yarn dev` から `webpack-serve` を呼び出せるようになりました。実際に実行してみましょう。   

```bash
$ yarn dev
yarn run v1.9.4
$ webpack-serve
ℹ ｢hot｣: WebSocket Server Listening on localhost:63584
ℹ ｢hot｣: Applying DefinePlugin:__hotClientOptions__
ℹ ｢hot｣: webpack: Compiling...
ℹ ｢serve｣: Serving Static Content from: /
ℹ ｢serve｣: Project is running at http://localhost:8080
ℹ ｢serve｣: Server URI copied to clipboard
ℹ ｢hot｣: webpack: Compiling Done
⚠ ｢wdm｣: Hash: 3f47c1ec4dc74eed06b9
Version: webpack 4.19.0
Time: 3415ms
Built at: ****-**-** **:**
 Asset     Size  Chunks             Chunk Names
app.js  179 KiB       0  [emitted]  main
Entrypoint main = app.js
# ...などなど
```

[http://localhost:8080](http://localhost:8080)にアクセスすると、先程の「Hello World!」が表示されると思います。   

しかし、これではHTMLファイルを *Webpack* 側が認識していないので *Hot Reload* の恩恵が受けれません。   
ですので *HTMLWebpackPlugin* を使って *Webpack* に `index.html` を認識させます。   

```bash
$ yarn add --dev html-webpack-plugin

# ./index.html は ./src に移動しておきます
$ mv index.html ./src
```

*HTMLWebpackPlugin* を使用するために、`webpack.config.js` を追記します。

```javascript
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html'
    })
  ]
}
```

また、 *HTMLWebpackPlugin* では `./app.js` を使用する `<script>` タグが自動挿入されるので、   
今記載しているタグを消しておきます。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Hello React!</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

これで準備完了です。 `yarn dev` を起動してみて下さい。   
`./App.tsx` を適当に変更すると、ブラウザーをリロードしなくても更新されることがわかります。   

<img src="/assets/img/yatteiki/hot_reload_demo.gif" />

### JSXとVirtualDOM
#### JSX?
さて、先程JSファイル内で出てきた `<div></div>` は何だったのでしょうか？   
そもそも *HTML* ファイルでもないのに *HTML* を書くのは違和感を感じられると思います。   
これは **JSX** と呼ばれる決まりによって可能になっているもので、   
`jsx`や`tsx`ファイル内では特別に *HTML* を書くことができるのです。

```jsx
const jsx = () => (
  <div>This is JSX!</div>
)
```

*JSX* を書く時はいくつかの決まりがあります。   

##### 要素全体は`()`使用して囲む

```jsx
// Good
const jsx = () => (
  <div>This is JSX Element!</div>
)

// Bad
const jsx = () => '
  <div>This is string type</div>
'
```

##### 全体は必ず1つの要素でなければならない

```jsx
// Good
const jsx = () => (
  <ul>
    <li>いか</li>
    <li>あじ</li>
    <li>かんぱち</li>
    <li>さば</li>
  </ul>
)
// Bad
const jsx = () => (
  <li>いか</li>
  <li>あじ</li>
  <li>かんぱち</li>
  <li>さば</li>
)
```

##### いつものAttributeと若干違う

```jsx
const jsx = () => (
  <div className="element__color-red">Red!</div>
)
```

#### VirtualDOM?
これらの *JSX* は時に **VirtualDOM** または **仮想DOM** と呼ばれることがありますが、広義で言えば一緒だと思って頂いて結構です。   
どちらかと言うと *JSX* は記法を表し、*VirtualDOM* は *JSX* を用いた効率的なレンダリング手法のことを指すことが多いです。   
   
**仮想DOM** は簡単に言うと *HTML* を予め *JavaScript* ファイル内に持っておいて、それをユーザのインタラクションに合わせて出し分けるための手法です。   
そしてこの *仮想DOM* が注目されている理由の1つとして、**レンダリングの速さ** にあります。   
ここでは詳しく解説しませんが、[@mizchi](https://twitter.com/mizchi)さんが執筆された[WEB+DB PRESS Vol.106](https://gihyo.jp/magazine/wdpress/archive/2018/vol106)の「仮想DOM革命」にわかりやすく書いてありますので、中はどう動いているのか詳しく知りたい方はそちらをご覧ください（丸投げ）

### コンポーネント指向
#### 基本のReact
*JSX* は *JavaScript* に書けますよと説明しましたが、ここに *CSS* を追加することができます。   
一般的な *React* は以下のようにディレクトリを切って `.css` ファイルを個別に作ります。   

```bash
$ tree src/components/RedText
src/components/RedText
├── index.tsx
└── style.css
```

```tsx
// ./src/components/RedText/index.tsx
import * as React from 'react'
import style from './style.css'

const Component: FC = () => (
  <div className={style.red}>Red!</div>
)
```

```css
/* ./src/components/RedText/style.css */
.red {
  color: red;
}
```

これにより、ディレクトリ毎に様々な *HTML*, *CSS*, *JS* を管理することができているのにお気づきでしょうか？   
このような手法を **コンポーネント指向** と呼びます。   
*React* ではこの *コンポーネント* をたくさん作って構築していくことになります。   
   
イメージはこのような感じです。   

```
src/
├── App.tsx
├── index.html
├── index.tsx
└── components
    ├── Card
    │   ├── style.css
    │   └── index.tsx
    ├── Button
    │   ├── style.css
    │   └── index.tsx
```

#### styled-components
しかし、上記のような例でたくさんのコンポーネントを作っていった場合、`index.tsx` と `style.css` をコンポーネント毎に作っていく必要があります。   
これでは若干不便ですし、*CSS* も全てグローバルスコープとなるため安全な作り方とは言えません。   
そこで今回は、CSS付きの `JSX` を自動で生成してくれる `styled-components` というライブラリを使用していきます。   

```bash
$ yarn add styled-components
```

*npm* から追加したら、`App.tsx` を以下のように書き換えてみましょう。   

```tsx
import * as React from 'react'
import styled from 'styled-components'

const App: React.FC = props => (
  <RedText>Hello My first App!</RedText>
)

const RedText = styled.div`
  color: red;
`

export default App
```

これで `App.tsx` 内に *CSS* を記述できるようになり、`style.css` を無くすことができました！   
更に `styled-components` によって書かれた *CSS* は *Scoped CSS* となり、**他のコンポーネント及びスタイルに影響することはありません。**   
`styled-components` は一般的に以下のように記述することができます。   

```tsx
// 変数に代入する
// styled.div は styled.ul や styled.li のようにしてもOK
const RedText = styled.div`
  /* ここにCSSを記述する */
  color: red; 

  /* SCSSのように & を使って記述することができます
  & > a {
    color: inherit;
    text-decoration: none;
  }
`

// コンポーネントは styled() を使って継承することができます
// ただし、使用するコンポーネントで `className` を親要素に設定している必要があります
const UserCard = styled(Card)`
  position: relative;
  padding: 16px;
  &::after {
    positon: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #e5e5e5;
  }
`
```

## TODOアプリを作ろう
前項では *React* の基本をざっとお教えしましたので、今回はより実践的にTODOアプリを作ってみましょう。   
まずは、[こちら](https://react-todo.suzurin.me)で完成品を公開していますので触ってみて下さい。

### 準備
では早速、プロジェクトフォルダを準備しましょう。   
ここでは前項のサンプルをそのまま使うことにします。
フォルダ階層は以下のようになります。

```bash
$ tree -I node_modules
.
├── package.json
├── src
│   ├── App.tsx
│   ├── index.html
│   └── index.tsx
├── tsconfig.json
├── webpack.config.js
└── yarn.lock
```

後々便利なので、このプロジェクト全体で使う色情報を置いておくファイルを作ります。

```bash
$ mkdir ./src/constants
$ touch ./src/constants/colors.tsx
```

```typescript
export default {
  primary: '#3949AB'
}
```

### コンポーネントを作る
それでは細かくコンポーネントを作って行きましょう。   
まずは基本的な `Button` コンポーネントを作ります

```tsx
// ./src/Button.tsx
import * as React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

type Props = {
  onClick?: (e: React.MouseEvent) => void
}

const Button: React.FC<Props> = ({ children, ...props }) => (
  <Wrap {...props}>{children}</Wrap>
)

const Wrap = styled.button`
  border-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${colors.primary};
  font-size: 16px;
  height: 32px;
  padding: 0 16px;
  cursor: pointer;
  color: ${colors.primary};

  transition: 0.08s;
  &:hover {
    background-color: ${colors.primary};
    color: white;
  }
`

export default Button
```

さて、新しく `Props` というものが出てきました。これな何でしょうか？

### Props
*React* のコンポーネントでは外部から値を受け取ることができます。   
例えば以下のようなコンポーネントは…

```tsx
const CountText: React.FC<{ count: number }> = (props) => (
  <div>{props.count}</div>
)
```

外部から `count` という値を受け取って、引数の `props` から `count` にアクセスし表示させています。   
このコンポーネントを使う時は、

```tsx
const ParentComponent: React.FC = () => (
  <div>
    <CountText count="3" />
  </div>
)
```

親コンポーネントから *Attribute* として記述することができます。   

#### Children
`React.FC` では、標準で `children` の `props` が使えるようになっています。

```tsx
const Heading: React.FC = (props) => {
  <h1>{children}</h1>
}

const ParentComponent: React.FC = () => {
  <Heading>Hello World!</Heding>
}
```

このように、 `children` を使用するとタグ内に記述された *JSX* またはテキストにアクセスすることが可能です。
   
#### 関数のProps
また、少し応用的な使い方として `props` に関数を渡すことができます。   

```tsx
const Button: React.FC<{ onClick: () => void }> = (props) => (
  <div onCLick={() => props.onClick()}>Click Me!</div>
)
```

例えばこのように、子コンポーネント上で `onClick` を定義しておいてから、

```tsx
const ParentComponent: React.FC = () => (
  <div>
    <Button onClick={() => console.log('Button is clicked!')} />
  </div>
)
```

親コンポーネントにその関数の内容を定義することができます。   
これにより子コンポーネントはイベント発火のタイミングだけ定義しておいて、その実行内容は親コンポーネントで定義することが可能です。   
このテクニックはよく使うので覚えておいて下さい。

### 続・コンポーネントを作る
#### Button
話を戻して、 `Button` コンポーネントの `props` はこの様になっていました。   

```tsx
type Props = {
  onClick?: (e: React.MouseEvent) => void
}

const Button: React.FC<Props> = ({ children, ...props }) => (
  <Wrap {...props}>{children}</Wrap>
)
```

まず `type Props` は `Props` の型定義をしています。   
`onClick` でクリックイベントを受け取れるようにしている、シンプルな `Props` です。   
   
`React.FC<Props>` で定義した `Props` を使用することを宣言しています。   
引数では `({ children, ...props })` とし、`children` とその他の `Props` として `...props` で代入しています。   

`<Wrap {...props}>{children}</Wrap>` の `{...props}` はこの受け取った `props` をそのままそっくり `Wrap` に展開しています。   
これで `onClick` や、もしあれば他の `props` が `Wrap` に展開されて使用可能になっています。

#### Title
ここまできたら、あとはじゃんじゃんコンポーネントを作っていくだけです。   
タイトルのスタイルを包括した `Title` コンポーネントを作ります

```tsx
// ./src/components/Title.tsx

import * as React from 'react'
import styled from 'styled-components'

const Title: React.FC = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
)

const Text = styled.h1`
  font-weight: bold;
  font-size: 48px;
`

export default Title
```

`Title` は特に `Props` は要らないので定義しません。

#### Todo
Todoを表示するために、まずは1つのTodoのスタイルを包括した `Todo` コンポーネントを作ります。

```tsx
import * as React from 'react'
import styled from 'styled-components'

import Button from './Button'

type Props = {
  completed?: boolean
  onClickOperation: () => void
}

const Todo: React.FC<Props> = ({ completed, children, onClickOperation,  ...props }) => (
  <Wrap {...props}>
    <TodoText className={completed ? 'strike' : null}>{children}</TodoText>
    <Button onClick={e => onClickOperation()}>{completed ? '削除' : '完了'}</Button>
  </Wrap>
)

const Wrap = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 24px;
  margin: 0;
`

const TodoText = styled.div`
  &.strike {
    text-decoration: line-through;
  }
`

export default Todo
```

`Todo` の `Props` ではそのTodoが完了済みかどうかを受け取る `completed` と、そのTodoを操作するボタンのイベントを受け取る `onClickOperation` を定義しています。   
   
`TodoText` の部分で `className` に対して `strike` を付けていることに注目してください。   
これは受け取った `compoleted` の状態によって `strike` を付けるかどうかを制御しています。   
`.strike` のクラスを付けると、 `text-decoration: line-through;` を付け、テキストに ~~取り消し線~~ を付与します。

更に、 `Button` 内では `completed` の状態によって表示するテキストを切り替えます。   

#### TodoList
1つのTodoを表示する `Todo` を作ったので、それらをリストとして表示した時のスタイルを調整する `TodoList` を作ります。

```tsx
import * as React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

const TodoList: React.FC = ({ children, ...props }) => (
  <List {...props}>
    {children}
  </List>
)

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: solid 1px ${colors.primary};

  & > li {
    border-top: solid 1px ${colors.primary};
  }
`

export default TodoList
```

::: tip
今回はコンポーネントの階層の設計をせずコンポーネントの依存関係をできるだけ減らすため、 `TodoList` をスタイル調整用と割り切りました。   
これにより `& > li` というちょっとヤバイ *CSS* がうまれてしまっており、この設計ではまずいと思った方もいるかもしれません。   
勿論、解決する方法として`Props` に `{ name: string }[]` のようなデータを受け取り、`.map(todo => <Todo>{todo.name}</Todo>` を使用して展開するような設計もできます。   
しかし、`Button` に依存した `Todo` を `TodoList` に依存させてしまうと、結果として `TodoList` は3階層のコンポーネントとなってしまいます。   
階層を管理できていない今回のプロジェクトでは得策ではありません。階層ルールや命名ルールを厳密に決めて疎結合と密結合をきちんと分ける必要もあるでしょう。   
このような問題を解決するために多くの手法が生まれています。*Extra* で紹介します（執筆中）
:::

### AddTodoForm
`TodoList` でTodoを表示できるようになったので、Todoを追加できるフォームも作ります。   

```tsx
import * as React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

import Button from './Button'

type Props = {
  value: string
  onChangeValue: (value: string) => void
  onClickAddTodo: () => void
}

const AddTodoForm: React.FC<Props> = ({ value, onChangeValue, onClickAddTodo, ...props }) => (
  <Outer {...props}>
    <Input type="text" value={value} onChange={e => onChangeValue(e.target.value)} />
    <AddButton onClick={e => onClickAddTodo()}>追加</AddButton>
  </Outer>
)

const Outer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  border: solid 1px ${colors.primary};
`

const Input = styled.input`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 0 16px;
  flex-grow: 1;
  height: 100%;
  border-style: none;
  color: ${colors.primary};

  &:focus {
    outline: 0;
  }
`

const AddButton = styled(Button)`
  height: 100%;
  border-top: 0px;
  border-right: 0px;
  border-bottom: 0px;
  background-color: ${colors.primary};
  color: white;
`

export default AddTodoForm
```

まず注目して欲しいのは　`Input` のところです。   
`<input type="text" />` のようなフォームの値を *React* から管理するには、2つの `props` を渡す必要があります。   

#### value
通常のHTMLと同じように、 `value` は `input` の中の値を入れることができます。   
ただし、これは「初期値」という意味合いではなく `value` に入れた値が変わる度に更新されるようになります。   
「初期値」として値を入れたい場合、 `defaultValue` という `props` を利用できます。

#### onChange
この `input` の値を更新するには、 `value` に代入している変数を変更する必要があります。   
`input` は中の値が変更されたことを `onChange` で発火し値を返すため、その度 `value` に代入し直すメソッドを定義します。   
ただし、`onChange` の引数は `e: React.MouseEvent` の型になっているため、実際の値には `e.target.value` でアクセスします。

### Class ComponentとState
全てのコンポーネントを作り終えたのでこれを合わせて完成を目指したいところですが、
その前に知っておかなければ行けないことが何点かありますのでそれについて説明します。

#### Function Component とクラスComponent
これまでいくつかのコンポーネントを作ってきましたが、実はこれらはすべて **FC** (Function Component)と呼ばれる方法で作っていました。
*React* ではこれに加え、**Class Component** と呼ばれる作り方もあります。   
*FC* に比べ *Class Component* は以下のようなメリットがあります。   

- 後述する **State** を扱えること
- クラスとしてメソッドを持たせることができること

*Class Component* は多機能で複雑なコードになりがちなため、できるだけ *FC* で書いた方が良いとされています。   
今回のTodoアプリもこれに倣って作っていました。   
   
*Class Component* は、コンポーネントを `class` として宣言して `React.Component` を継承して作ります。

```tsx
class Component extends React.Component {
  render() {
    return (
      <div>Hello!</div>
    )
  }
}
```

HTMLビューの部分は`render()` メソッドの返り値として *JSX* を返します。   
   
`Props` を使う場合は *FC* とそう変わりありません。   

```tsx
class Component extends React.Component<{ color: string }> {
  render() {
    const { color, children, ...props } = this.props
    return (
      <div style={{ color }} {...props}>{children}</div>
    )
  }
}
```

勿論クラスメソッドを `render()` 関数内で使用することができます。   

```tsx
class Component extends React.Component {
  handleClick() {
    console.log('Clicked!')    
  }

  render() {
    return (
      <button onClick={e => this.handleClick()}>Click Me!</button>
    )
  }
}
```

このようにすれば複雑なロジックをクラスメソッドに閉じ込め、 `render()` 関数内はビューロジックに集中することができます。   
*JSX* 内に複雑なロジックを書きっぱなしにすると最悪になります。本当です。
大事なことなのでしっかり覚えておきましょう。   
   
#### State
*React* ではビューの状態を保存し効率的に更新するため **State** と呼ばれる機能が用意されています。   
この *State* は *Class Component* でしか使用できませんので注意して下さい。

```tsx
class Component extends React.Component<{}, { count: number }> {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <button onClick={e => this.setState(state => ({ count: state.count + 1 }))}> + </button>
        <div>{this.state.count}</div>
        <button onClick={e => this.setState(state => ({ count: state.count - 1}))}> - </button>
      </div>
    )
  }
}
```

上記はシンプルなカウンターアプリケーションの例です。
*State* を使用する時は、`constructor()` を使って **必ず** 初期化します。   

::: tip
`constructor()` メソッドを呼ぶ時は、`props` が引数で渡されるので `super()` でこれを渡し直す必要があります。
:::

*State* は `count` プロパティを持っており、`render()` 関数内で表示させています。   
*State* へのアクセスは `this.state` から可能です。ただしこれは **読み取り専用** なことに注意して下さい。(constructorなどの例外を除いて)   
   
変更を加えるには `this.setState()` 関数を呼ぶ必要があります。   
`button` エレメント内の `onClick` に `this.setState()` が記述されています。   
ボタン押下時に `count` プロパティを増やしたり減らしたりしたいためです。   
   
ただ、この例はビューにロジックが書いてあって最悪になってるので、これらをクラスメソッドに逃しましょう。

```tsx
class Component extends React.Component<{}, { count: number }> {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }

  decrement = () => {
    this.setState(state => ({ count: state.count - 1 }))
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <button onClick={e => this.increment()}> + </button>
        <div>{this.state.count}</div>
        <button onClick={e => this.decrement()}> - </button>
      </div>
    )
  }
}
```

関心が分離できて、わかりやすいコードになりました。

### ページを作る
最後に、これまで作ってきたコンポーネントを組み合わせてページを作りましょう。   
ページ用にフォルダとコンポーネントを作っても良いですが、今回は1ページのみの単純なアプリのため `App.tsx` に記述することにします。   
   
#### 静的に作る
いきなりロジックを書き始めると訳わからなくなるので、最初は単純なビューだけ書くと良いです。

```tsx
// ./src/App.tsx
import * as React from 'react'
import styled from 'styled-components'
import colors from './constants/colors'

import Todo from './components/Todo'
import TodoList from './components/TodoList'
import Title from './components/Title'
import AddTodoForm from './components/AddTodoForm'

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <TodosWrap>
          <Title>TODOS</Title>
          <AddTodoForm
            value={'適当'}
            onChangeValue={value => null}
            onClickAddTodo={() => null}
          />
          <SpacedTodoList>
            <Todo onClickOperation={() => null}>テスト</Todo>
          </SpacedTodoList>
        </TodosWrap>
        <CompletedTodosWrap>
          <Title>COMPLETED</Title>
          <TodoList>
            <Todo onClickOperation={() => null} completed>テスト</Todo>
          </TodoList>
        </CompletedTodosWrap>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  margin: 0;
  width: 375px;
  margin: 0 auto;
  padding: 0 8px;
  color: ${colors.primary};
`

const TodosWrap = styled.div``

const SpacedTodoList = styled(TodoList)`
  margin-top: 32px;
`

const CompletedTodosWrap = styled.div`
  margin-top: 70px;
`

export default App
```

すると、このような画面になります。

<img src="/assets/img/yatteiki/react-todo-statc-app.png" />

まだロジックをつくってないので、ボタンを押したり文字を変えようとしても何も起きないと思います。   
これからこのロジック部分を作っていきましょう。   

#### データ型を決める
まずはTodoを管理する *State* の型を決めます。ロジックを作るには操作するデータがないと作れません。

```tsx
// ... some code
type State = {
  todos: TodoType[]
  newTodoName: string
}

type TodoType = {
  name: string
  completed: boolean
}

class App extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    this.state = { todos: [], newTodoName: '' }
  }
// ... some code
```

`todos` に作ったTodoを入れ、新しいTodoのInputは違う `newTodoName` で管理します。   
   
#### Todoのリストを表示する
`todos` のリストを表示するロジックを `render()` 関数内に追加します

```tsx
  // ...some code
  constructor(props) {
    super(props)
    // 仮でモックデータを入れておきます
    this.state = {
      todos: [
        {
          name: 'モック1',
          completed: false
        },
        {
          name: 'モック2',
          completed: true
        }
      ]
    }
  }

  render() {
    return (
      <Wrapper>
        <TodosWrap>
          <Title>TODOS</Title>
          <AddTodoForm
            value={'適当'}
            onChangeValue={value => null}
            onClickAddTodo={() => null}
          />
          <SpacedTodoList>
            {this.state.todos.map((t, i) => (
              <Todo key={i} onClickOperation={() => null}>{t.name}</Todo>
            ))}
          </SpacedTodoList>
        </TodosWrap>
        <CompletedTodosWrap>
          <Title>COMPLETED</Title>
          <TodoList>
            {this.state.todos.map((t, i) => (
              <Todo key={i} onClickOperation={() => null} completed>{t.name}</Todo>
            ))}
          </TodoList>
        </CompletedTodosWrap>
      </Wrapper>
    )
  }
  // ...some code
```

*JSX* では `.map()` を使って繰り返しDOMを描画していきます。   
その時に必ず `key` を忘れないようにしましょう。   
これは *VirtualDOM* が再描画される時に、似たDOMの繰り返しからどれを再描画するか、 *React* が判断するための名前のようなものです。   
`key` は一意な値であればなんでも問題ありません。今回は配列の `index` にしました。   

`constructor()` で定義したTodoが表示されるか実際に確認してみてください。

#### Todoのリストを出し分ける
先程作ったモックデータは、「TODO」と「COMPLETED」で一緒のTodoが表示されていました。
これを `completed` の値によって適切に出し分けてみましょう。

```tsx
  // ...some code
  render() {
    return (
      <Wrapper>
        <TodosWrap>
          <Title>TODOS</Title>
          <AddTodoForm
            value={'適当'}
            onChangeValue={value => null}
            onClickAddTodo={() => null}
          />
          <SpacedTodoList>
            {this.state.todos.filter(t => t.completed === false).map((t, i) => (
              <Todo key={i} onClickOperation={() => null}>{t.name}</Todo>
            ))}
          </SpacedTodoList>
        </TodosWrap>
        <CompletedTodosWrap>
          <Title>COMPLETED</Title>
          <TodoList>
            {this.state.todos.filter(t => t.completed === true).map((t, i) => (
              <Todo key={i} onClickOperation={() => null} completed>{t.name}</Todo>
            ))}
          </TodoList>
        </CompletedTodosWrap>
      </Wrapper>
    )
  }
  // ...some code
```

このように `filter()` を使うと配列のデータを出し分けることができます。   
   
しかしこれではビューにロジックが集まってきてしまったので、クラスメンバーへ逃します。   

```tsx
class App extends Reacct.Component<{}, State> {
  // ...some code
  get doingTodos() {
    return this.state.todos.filter(t => t.completed === false)
  }

  get completedTodos() {
    return this.state.todos.filter(t => t.completed === true)
  }

  render() {
    return (
      <Wrapper>
        <TodosWrap>
          <Title>TODOS</Title>
          <AddTodoForm
            value={'適当'}
            onChangeValue={value => null}
            onClickAddTodo={() => null}
          />
          <SpacedTodoList>
            {this.doingTodos.map((t, i) => (
              <Todo key={i} onClickOperation={() => null}>{t.name}</Todo>
            ))}
          </SpacedTodoList>
        </TodosWrap>
        <CompletedTodosWrap>
          <Title>COMPLETED</Title>
          <TodoList>
            {this.completedTodos.map((t, i) => (
              <Todo key={i} onClickOperation={() => null} completed>{t.name}</Todo>
            ))}
          </TodoList>
        </CompletedTodosWrap>
      </Wrapper>
    )
  }
}
```

ビューにロジックを溜めず、積極的にクラスメンバーへ逃がすことで `render()` 関数内を簡潔にすることができてより見やすくなります。   

#### 新しくTodoを作る
今は折角追加フォームが設置されているのにうんともすんとも言わないので、これのろロジックを作っていきます。   
まずは `AddTodoForm` の `input` の値をStateの `newTodoName` に入れれるようにて、`value` の値を `newTodoName` に直しておきます。   

```tsx
  // ...some code
  render() {
    return (
      <Wrapper>
        <TodosWrap>
          <Title>TODOS</Title>
          <AddTodoForm
            value={this.state.newTodoName}
            onChangeValue={value => this.setState({ ...this.state, newTodoName: value })}
            onClickAddTodo={() => null}
          />
          <SpacedTodoList>
            {this.doingTodos.map((t, i) => (
              <Todo key={i} onClickOperation={() => null}>{t.name}</Todo>
            ))}
          </SpacedTodoList>
        </TodosWrap>
        <CompletedTodosWrap>
          <Title>COMPLETED</Title>
          <TodoList>
            {this.completedTodos.map((t, i) => (
              <Todo key={i} onClickOperation={() => null} completed>{t.name}</Todo>
            ))}
          </TodoList>
        </CompletedTodosWrap>
      </Wrapper>
    )
  }
  // ...some code
```

フォームの中で文字を打てるようになっていればOKです！

続いて「追加」ボタンを押したらTodoを追加できるようにしましょう。   
クラスメソッド `addTodo()` にロジックを書いて、`onClickAddTodo` に渡します。

```tsx
  // ...some code
  addTodo() {
    if (this.state.newTodoName === '') return
    const changedTodos = [...this.state.todos, { name: this.state.newTodoName, completed: false}]
    this.setState({ ...this.state, todos: changedTodos, newTodoName: '' })
  }

  render() {
    return (
      <Wrapper>
        <TodosWrap>
          <Title>TODOS</Title>
          <AddTodoForm
            value={this.state.newTodoName}
            onChangeValue={value => this.setState({ ...this.state, newTodoName: value })}
            onClickAddTodo={() => this.addTodo()}
          />
          <SpacedTodoList>
            {this.doingTodos.map((t, i) => (
              <Todo key={i} onClickOperation={() => null}>{t.name}</Todo>
            ))}
          </SpacedTodoList>
        </TodosWrap>
        <CompletedTodosWrap>
          <Title>COMPLETED</Title>
          <TodoList>
            {this.completedTodos.map((t, i) => (
              <Todo key={i} onClickOperation={() => null} completed>{t.name}</Todo>
            ))}
          </TodoList>
        </CompletedTodosWrap>
      </Wrapper>
    )
  }
  // ...some code 
```

`addTodo()` では最初に、何も入力されていない状態で発火されてもTodoを追加できないようバリデーションをかけています。   
Todoが追加できるようになっていることを確認してみましょう！

#### Todoの完了と削除
新しくTodoを追加できるようになったので、最後にTodoのステータスを変えるロジックを作っていきます。   

```tsx
class App extends Reacct.Component<{}, State> {
  // ...some code
  completeTodo(index: number) {
    const changedTodos = this.state.todos.map((t, i) => {
      if (index !== i) return t
      return { ...t, completed: true }
    })
    this.setState({ ...this.state, todos: changedTodos })
  }

  deleteTodos(index: number) {
    const changedTodos = this.state.todos.filter((_, i) => i !== index)
    this.setState({ ...this.state, todos: changedTodos })
  }

  render() {
    return (
      <Wrapper>
        <TodosWrap>
          <Title>TODOS</Title>
          <AddTodoForm
            value={this.state.newTodoName}
            onChangeValue={value => this.setState({ ...this.state, newTodoName: value })}
            onClickAddTodo={() => this.addTodo()}
          />
          <SpacedTodoList>
            {this.doingTodos.map((t, i) => (
              <Todo key={i} onClickOperation={() => this.completeTodo(i)}>{t.name}</Todo>
            ))}
          </SpacedTodoList>
        </TodosWrap>
        <CompletedTodosWrap>
          <Title>COMPLETED</Title>
          <TodoList>
            {this.completedTodos.map((t, i) => (
              <Todo key={i} onClickOperation={() => this.deleteTodo(i)} completed>{t.name}</Todo>
            ))}
          </TodoList>
        </CompletedTodosWrap>
      </Wrapper>
    )
  }
}
```

ここまで来たらもう私から言うことはありません。   
最後に色々なTodoを作ったり消したりして動作を確認して下さい！

#### おまけ LocalStorageにTodoを保存する
ここまでのアプリケーションはあくまでブラウザのメモリ上に展開されていたため、せっかく保存したTodoもリロードすると呆気なく消えてしまいます。   
せっかく追加したのにそれでは悲しいです Todoのデータをブラウザの *LocalStorage* に保存するように改良してみましょう。   
   
まずはTODOが追加されたタイミングで *LocalStorage* へ保存してみます。

```tsx{3-6,11}
class App extends React.Component<{}, State> {
  // ...
  saveTodosToLocalStorage(todos: TodoType[]) {
    const todosString = JSON.stringify(todos)
    window.localStorage.setItem('todos', todosString)
  }
    
  addTodo() {
    if (this.state.newTodoName === '') return
    const changedTodos = [ ...this.state.todos, { name: this.state.newTodoName, completed: false }]
    this.saveTodosToLocalStrage(changedTodos)
    this.setState({ ...this.state, todos: changedTodos, newTodoName: '' })
  }
  // ...
}
```

「追加」ボタンで呼ばれるメソッド `addTodo()` が呼ばれたら `this.todos` を *JSON* 化して *LocalStorage* へ保存しています。   

「追加」以外にも「完了」と「削除」も変更が必要そうです。

```tsx{6,12}
  completeTodo(index: number) {
    const changedTodos = this.state.todos.map((t, i) => {
      if (index !== i) return t
      return { ...t, completed: true }
    })
    this.saveTodosToLocalStrage(changedTodos)
    this.setState({ ...this.state, todos: changedTodos })
  }
  
  removeTodo(index: number) {
    const changedTodos = this.state.todos.filter((_, i) => i !== index)
    this.saveTodosToLocalStrage(changedTodos)
    this.setState({ ...this.state, todos: changedTodos })
  }
```

最後に、リロードした時（`App` コンポーネントが初期化された時）にTODOを *LocalStorage* から読み込んで完成です。

```tsx{4-5,8-11}
class App extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    const todos = this.loadTodosFromLocalStrage()
    this.state = { newTodoName: '', todos }
  }
  
  loadTodosFromLocalStrage(): TodoType[] {
    const todosString = window.localStorage.getItem('todos') || '[]' // .getItem(): string | null なので null の時は空配列にしておく
    return JSON.parse(todosString)
  }
```
