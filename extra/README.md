# その他
本編では説明しきれなかったものをまとめています。   

## 高階関数について
### 概論
昨今の関数型の流れにJavaScriptも巻き込まれ、その息吹が随所に感じられます。   
その代表の一つとして *高階関数* が挙げられるでしょう   
高階関数には2種類あり、

```javascript
const add = a => b => a + b

const addToOne = add(1)

addToOne(3) // -> 4
```

このように「関数を返り値とする関数」と
。
```javascript
const sayHello = () => {
  console.log('Hello')
}

const sayWorldLast = f => {
  f()
  console.log('World')
}

sayWorldLast(sayHello)
// -> Hello
// -> World
```
このような「関数を引数とする関数」があります。   
   
高階関数にはいくつかメリットがあります。
- 引数を関数の *状態* として持っておける
- 引数の関数を任意のタイミングで実行できる
- 処理を抽象化しやすい

下記のサンプルを見てみましょう。

```javascript
const map = arr => f => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    // Array.push() で配列の末尾に要素を追加できます
    // 引数の関数 f を arr の要素に適用して res に追加します
    res.push( f(arr[i]) )
  }
  return res
}

const add = a => b => a + b
const addTwo = add(2)

map([1, 2, 3])(addTwo) // -> [3, 4, 5]
```
ちょっとわかりづらいですね…注目して欲しいのは一番最後の行です。
「配列の要素に対して2を足す」ことが明確化されとても分かりやすくなっています。   
このように **処理を抽象化しやすい関数を実装できる** のが最大のメリットです。   
   
ただし、型が明確化されてないJavaScriptで使うのは得策とは言えないでしょう。    
上の例を *TypeScript* では以下のように実装できます！
```typescript
const map: Array<number> = (arr: Array<number>) => (f: (n: number) => number) => {
  let res: Array<number> = []
  for (let i = 0; i < arr.length; i++) {
    res.push(f(arr[i]))
  }
  return res
}

const add = (a: number) => (b: number) => a + b
const addTwo = add(2)

map([1 ,2 ,3])(addTwo) // -> [3, 4, 5]
```

引数の形が明文化されエラーを事前に回避することができました。
