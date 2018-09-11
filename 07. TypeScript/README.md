TypeScript
===
*TypeScript* は *JavaScript* に静的な型を定義できる *altJS* です。   

```typescript
const n: number = 1

function double(a: number): number {
  return a * 2
}
```

このように関数や変数の後に `:` を付けて型を定義することが出来ます。

# REPLを用意する
*TypeScript* をサクッと試すために、REPLを用意してみましょう。   
*npm* パッケージの *ts-node* を使用します。   

```bash
$ yarn global add ts-node
$ ts-node -v
$ ts-node
>"Hello World"
'Hello World'
```



# 型の基本 (プリミティブ型)
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

## 配列
```typescript
const numbers: number[] = [1, 2, 3]
```

型の語尾に`[]`を付けるとその型の配列になります。   
また、`[]`が使えない時は以下のような方法で作ることもできます。

```typescript
const numbers: Array<number> = [1, 2, 3]
```

## タプル
```typescript
const tuple: [string, number] = ['カツ丼', 500]
```

`[]` 内で順番に型を入れると、その型のタプルを作ることができます。

## 型の後付け
何かの型が `any` だった時、型を上書きすることができます

```typescript
const value: any = 'hello'

const upperValue: string = (<string>value).toUpperCase()
// もしくは
const length: number = (value as string).length()
```


# リテラル型
## Type alias
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

## Interface
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
  readonly id: number
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

