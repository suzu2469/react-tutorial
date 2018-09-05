Nodeとエディタ あとyarnとか
===

# 目次
1. Node.jsをインストールする
2. node & npm の使い方
3. yarnを使おう
4. Hello World!

# Node.jsインストールする
```bash
$ brew install node

# バージョン管理アプリ n を使う
$ npm install -g n

# LTS版のNodeが入る
$ n lts
 
$ node --version
v8.11.4
```

# node & npm の使い方
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

# パッケージをアンインストール
$ npm uninstall PACKAGE_NAME

# 既にある package.json からインストール
$ npm install
```

# yarnを使おう
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

# エディタ
何でもいいです(建前) VSCodeを使おう(本音)   
*TypeScript* を使った時にVSCodeならいい感じにしてくれます(宗教勧誘)

# Hello World!
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