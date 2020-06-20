## React Accountbook

### 収支をグラフで描画

#### Firestoe の設計

- [x] 必要な document を決める
- [x] DB 作成

#### 収支の登録機能実装

- [x] 収支入力
- [x] DB 登録
- [x] ここまでのテストを書く

#### グラフ描画

- [x] 収支を取得する関数を作成
- [x] charts コンポーネントを作成
- [x] とりあえず一覧表示
- [x] グラフ描画
- [x] グラフ描画の仕様
  - [x] マウントしたら自分のグラフを描画
  - [x] 収支を登録したら再描画
  - [x] ログアウトしたらグラフをリセット
- [x] 同じ日の収支額は合計

#### Firestore のルールを定義する

- [x] firestore.rules を設定
- [x] firestore.rules をテスト

#### 収支の一覧を表示

- [x] テーブルを作る
- [x] テーブルを並べる
- [x] テーブルに収支を入れる
- [x] グラフと表をレスポンシブに

#### 収支を編集できるようにする

- [x] Editボタンを作る
- [x] Editボタンを押したら該当の行を編集できるようにする
- [x] firestoreのコレクションを書き換える関数を作る
- [x] ボタンクリックで着火するようにする
- [x] Dropdownを修正
- [ ] containerとcomponentに分ける
- [ ] storyを作る
