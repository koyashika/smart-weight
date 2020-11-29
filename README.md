
# Smart Waight
体重管理を行うダイエットアプリです。
体重や食事の記録、BMIの計算ができます。

## 機能一覧
1. ユーザー登録（名前・メールアドレス）、ログイン機能
2. 体重記録  
　日々の体重をグラフにして表示します。
3. BMI計算  
　身長・体重・性別を入力すると、BMIが表示され、BMIの近い芸能人が表示されます。  
　また、その身長に合った標準体重、美容体重、プリンセス体重を計算します。
4. 食事記録  
　文字または写真で、食べた物を記録します。
 
## 本番環境

## 制作背景  
  コロナ禍において、「コロナ太り」という言葉や芸能人の大幅なダイエットなどが話題となり、  
  体重を気にする人が増えた。  
  そんな人たちが楽しんでダイエットできるアプリを作成した。

## デモ

![デモ](https://image-url.gif)


## 開発環境
* ruby '2.6.5'

## 課題・追加実装
- 体重グラフ　　
  - 1日に何度も入力すると和が返ってしまうので、入力を1日1回に制限する必要がある。
  - 体重がユーザーごとに管理できていない。
- 食事記録
  - コメント機能、いいね機能、ユーザーごとに投稿を表示させる機能を追加する。

## DB設計

### usersテーブル

|Column  |Type  |Options                 |
|--------|------|------------------------|
|user    |string|null: false, index: true|
|email   |string|null: false, index: true|
|password|string|null: false             |

#### Association
- has_many:weights
- has_many:records

### weightsテーブル

|Column|Type      |Options                       |
|------|----------|------------------------------|
|user  |references|null: false, foreign_key: true|
|kg    |integer   |null: false                   |

#### Association
- belongs_to :user

### recordsテーブル

|Column|Type      |Options                       |
|------|----------|------------------------------|
|user  |references|null: false, foreign_key: true|
|text  |string    |null: false                   |
|image |text      |null: false                   |

#### Association
- belongs_to :user
