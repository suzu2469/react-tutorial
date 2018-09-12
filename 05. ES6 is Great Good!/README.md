ES6で綺麗に書こう
===
うるせ〜〜〜〜〜！！！ES6で書こう〜〜〜〜〜〜！！！！！（ドンッ！！！！）

# 変数宣言
基本的に`const`推奨です。   
`const`で宣言すると再代入不可になります。   
~~varなんて無かった~~
```javascript
const a = 1
a = 2 // Error!

let b = 1
b = 2 // OK!
```

# 文字列の結合
バッククオートで囲みます
```javascript
const str = 'World'

// 上と下は同じ
console.log('Hello ' + str)
console.log(`Hello ${str}`)
```

# ラムダ
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

# スプレッド演算子
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

# 反復処理
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

# 配列処理
## .map()
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

## .filter()
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

## .find()
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

## .reduce()
配列の中身を使って処理をし新しい値を返却します
```javascript
const numbers = [1, 2, 3, 4, 5]

// 第二引数は初期値
const sum = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue
}, 0)
console.log(sum) // -> 15
```

## .reduceRight()
`.reduce()`の順番が逆向きバージョンです

## .every()
全ての配列の中身が条件に合っているかを真偽値で返します
```javascript
const ages = [20, 33, 56, 35, 44]

const isAdult = ages.every((age, index) => age >= 20)
console.log(isAdult) // -> true
```

## .some()
いずれか一つの配列の中身が条件に合っているかを真偽値で返します
```javascript
const genders = ['women', 'women', 'women', 'men', 'women']

const hasMen = genders.some((gender, index) => gender === 'men')
console.log(hasMen) // -> true
```

# クラス
*JavaScript* には`ES5` までクラスが無かったのですが、`ES6` より本格的に導入されました。   
*React* でふんだんに使うので是非覚えていきましょう。   

## クラスを作ってみる
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