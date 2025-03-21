![ヘッダー画像](/docs/artmuseum_header.png)

## サービスのURL
現在、一番上のナビゲーションバーは"display top page"という部分以外はまだ実装できていません。<br />
http://artmuseum.y-kanji.com

## 経緯
このプロダクトはイラストの管理をもっと簡単にしたいという思いから作りました。<br />
私の妹が、自身で描いたイラストをHTMLでインターネットに公開していました。<br />
しかし、画像を挙げるたびにいちいちHTMLを書き換えるのは煩わしいようでした。<br />
私自身もプログラミングで何か作ってみたいという思いがあったため、妹の悩みを解決すべくプロダクトを作りました。<br />
現在は画像の投稿と閲覧の機能までしか備わっていませんが、今後はログインやコメント・いいね機能なども付けたりと、UXを意識した機能追加をしていきたいと考えています。<br />

<!-- ![アプリケーションのイメージ](/docs/artmuseum_gif.gif) -->

## 機能一覧
<br />

| トップ画面 |
| ---- |
| ![TopPage](/docs/release_version2/top_page.png) |
| トップ画面からアーティストのホームページに移動することが出来ます。 |
<br />

| ホーム画面 |
| ---- |
| ![HomePage](/docs/release_version2/home_page.png) |
| ホーム画面には短い文章と画像、ギャラリー画面へのリンクを貼っています。 |
<br />

| ギャラリー画面 |
| ---- |
| ![GalleryPageUpward](/docs/release_version2/gallery_page_upward.png)![GalleryPageDownward](/docs/release_version2/gallery_page_downward.png) |
| 画像とタイトル、概要をそれぞれ一つの枠組みとして画像を横2列に配置しました。左側のナビゲーションバーから他のギャラリーへ移動することが出来ます。 |
<br />

<!-- | トップ画面 |　ホーム画面 |
| ---- | ---- |
| ![TopPage](/docs/top_page.png) | ![HomePage](/docs/home_page.png) |
| トップ画面からアーティストのホームページに移動することが出来ます。 | ホーム画面には短い文章と画像、ギャラリー画面へのリンクを貼っています。 |

| ギャラリー画面 |
| ---- |
| ![GalleryPageUpward](/docs/gallery_page_upward.png) | 
|![GalleryPageDownward](/docs/gallery_page_downward.png) |
| 左側のナビゲーションバーには他のギャラリーへのリンクを実装しました。 | あああ。 | -->

## 過去のバージョンの履歴一覧
<details>
<summary>一つ前のバージョンの機能一覧</summary>

## 機能一覧
<br />

| トップ画面 |
| ---- |
| ![TopPage](/docs/release_version1/top_page.png) |
| トップ画面からアーティストのホームページに移動することが出来ます。 |
<br />

| ホーム画面 |
| ---- |
| ![HomePage](/docs/release_version1/home_page.png) |
| ホーム画面には短い文章と画像、ギャラリー画面へのリンクを貼っています。 |
<br />

| ギャラリー画面 |
| ---- |
| ![GalleryPageUpward](/docs/release_version1/gallery_page_upward.png)![GalleryPageDownward](/docs/release_version1/gallery_page_downward.png) |
| 画像とタイトル、概要をそれぞれ一つの枠組みとして画像を横2列に配置しました。左側のナビゲーションバーから他のギャラリーへ移動することが出来ます。 |
<br />

<!-- | トップ画面 |　ホーム画面 |
| ---- | ---- |
| ![TopPage](/docs/top_page.png) | ![HomePage](/docs/home_page.png) |
| トップ画面からアーティストのホームページに移動することが出来ます。 | ホーム画面には短い文章と画像、ギャラリー画面へのリンクを貼っています。 |

| ギャラリー画面 |
| ---- |
| ![GalleryPageUpward](/docs/gallery_page_upward.png) | 
|![GalleryPageDownward](/docs/gallery_page_downward.png) |
| 左側のナビゲーションバーには他のギャラリーへのリンクを実装しました。 | あああ。 | -->
</details>
<br />

## 使用技術

| Category            | Technology                                           |
| ------------------- | --------------------------------------------------   |
| Frontend            | JavaScript, React, Vite, Material UI                 |
| Backend             | Python, Django, DjangoRESTFramework                  |
| Infrastructure      | AWS (Amazon EC2, CloudFront, Route53, Application Load Balancer)                                                                    |
| Database            | PostgreSQL                                           |
| Virtual Environment | Docker                                               |
| Diagram             | Draw.io                                              |
| Version Control     | Git, GitHub                                          |
| Other Tools         | Cursor, DBeaver, Draw.io

## システム構成図
![システム構成図](/docs/システム構成図.png)
<br />

## ER図
![ER図](/docs/ER図.png)

## 今後の展望
### 全体的な展望
・美術大学のデザイン系の学科に通っている妹がFigmaなどでUIの構成を考えてくれるというので、今度はそれを元にUIを刷新しようと考えています。また、実際に妹や、その友達にもこのWebアプリケーションを使ってもらって意見をもらいながら改善をしていけたらなと考えています。

### 個別的な展望
#### CI/CDの実装
- ローカル環境で機能の追加・修正などを行ったあとに本番環境に上げる際にビルド忘れやenvファイルの書き換えなど時間がかかってしまうことが多かったの、自動で本番環境に上げられるようにしたいです。

#### ログイン・サインアップの機能追加

#### いいね機能・コメント機能の実装

<br />
他にもまだまだ追加したい機能が多くあるので順次開発を進めていきたいと考えてます。
