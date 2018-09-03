JavaScriptの闇に迫る
===
# 目次
1. JavaScriptの時代格差
2. トランスパイル(AltJS, Babel)
3. バンドル

# JavaScriptの時代格差
JavaScriptはもともとプログラミング言語として開発されたわけではありませんでしたが、ココ数年で爆発的に機能が追加されて1プログラミング言語として十分に使えるようになりました。   
しかし、その成長故に古いJavaScriptと新しいJavaScriptではSyntaxが全然違います。（一部の処理は全く別言語のように見えます）   
大抵の場合 *IE11* までがサポートする **ES5** とそれ以降のブラウザがサポートする **ES6** に分けられます。   
これは *ECMAScript* として界で標準化されており、バージョンによって名前が違います。
最新のものだと **ES2018** まであります。詳しくは後ほど解説します。   
今 *ES5* を学ぶメリットは少ないのでこのハンズオンでは *ES6* 以降を中心に扱います。

## ES5
```javascript
var elm = document.getElementById('app')
```

## ES6
```javascript
const elm = document.querySelector('#app')
```

# トランスパイル
*IE11* は残念ながら *ES6* に対応していませんが、**トランスパイル** を利用することで *IE11* 向けでも *ES6* を使って開発することが出来ます。   
*トランスパイル* するライブラリを **トランスパイラ** と呼びます。   
*トランスパイラ* には **Babel** と呼ばれる *トランスパイラ* が一番使われています。これの使い方は後ほど詳しく説明します。   
(広義で言えば *TypeScript* も *トランスパイラ* の一つです)

# バンドル
## ありがちパターン
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

## そういうのやめるために
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