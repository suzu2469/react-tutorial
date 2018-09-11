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
例えばAPIからの値を [fetch](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch) する時、よくお世話になるでしょう。

```javascript
// fetchはPromise型が返ってきます
fetch('https://example.com/api/example')
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(e => console.error('Failed fetch'))
```

# async/await
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
