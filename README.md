# Smart Waight
体重管理を行うダイエットアプリです。  
体重や食事の記録、BMIの計算ができます。

![image](https://user-images.githubusercontent.com/66629789/100531081-73ac5600-323d-11eb-891d-e33a68b0899d.png)

## 機能一覧
1. ユーザー登録（名前・メールアドレス）、ログイン機能
2. 体重記録  
　日々の体重をグラフにして表示します。
3. BMI計算  
　身長・体重・性別を入力すると、BMIが表示され、BMIの近い芸能人が表示されます。  
　また、その人の身長に合った標準体重、美容体重、プリンセス体重を計算します。
4. 食事記録  
　文字または写真で、食べた物を記録します。
  投稿者は、削除・編集が出来ます。
 
## 本番環境
　herokuで行う予定。
## 制作背景  
  コロナ禍において、「コロナ太り」という言葉や芸能人の大幅なダイエットなどが話題となり、体重を気にする人が増加。  
  そんな人たちのために、楽しんでダイエットできるような体重管理アプリを作成しました。

## デモ
### 体重記録ページ
![image](https://user-images.githubusercontent.com/66629789/100531110-a0f90400-323d-11eb-9003-8558d3533dd9.png)
### BMI計算ページ
![image](https://user-images.githubusercontent.com/66629789/100531113-b40bd400-323d-11eb-8230-0e0897a2cc20.png)
### 食事記録ページ
![image](https://user-images.githubusercontent.com/66629789/100531121-c2f28680-323d-11eb-8b75-4b52f06ba529.png)



## 開発環境
* ruby '2.6.5'
* rails '6.0.0'


## 課題・追加実装
- 体重グラフ　　
  - 1日に何度も体重を入力すると和がグラフに表示されるので、入力を1日1回に制限する必要がある。
  - 体重をユーザーごとに管理できていない。
- 食事記録
  - コメント機能、いいね機能、ユーザーごとに投稿を表示させる機能を追加する。
- デプロイ
  - herokuでデプロイを行う。

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
