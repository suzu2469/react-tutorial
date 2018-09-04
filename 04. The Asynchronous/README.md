非同期 is 何
===
# 目次
- 非同期I/O
- 実行タイミングのズレ

# 非同期I/O
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

# 実行タイミングのズレ
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