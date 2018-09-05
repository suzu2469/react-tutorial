もっと非同期する
===
# 目次
- Promise
- async/await

# Promise
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
    resolve()
  }, 2000)
}

stepOne().then(() => stepTwo())
```

まず関数定義では *Promise型* を返しているのがわかります。   
`stepOne` 関数を実行すると *Promise型* が返ってくるので、 *Promise型* に倣ったオペレーションを実行することができます。    
`stepOne().then()` とは何か？についてはこれから詳しく解説しますが、とにかくこのサンプルコードを実行して何が起こっているのか少し考えてみてください。

## Promiseをもっと理解する
`Promise` は直訳すると「約束する・保証する」などの意味になりますが、 *JavaScript* では「処理が終わったかどうかを管。理。するオブジェクト」という意味合いが近いかもしれません。   
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
## エラーハンドリング
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
