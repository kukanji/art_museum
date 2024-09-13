![ヘッダー画像](/docs/artmuseum_header.png)

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
| ![TopPage](/docs/top_page.png) |
| トップ画面からアーティストのホームページに移動することが出来ます。 |
<br />

| ホーム画面 |
| ---- |
| ![HomePage](/docs/home_page.png) |
| ホーム画面には短い文章と画像、ギャラリー画面へのリンクを貼っています。 |
<br />

| ギャラリー画面 |
| ---- |
| ![GalleryPageUpward](/docs/gallery_page_upward.png)![GalleryPageDownward](/docs/gallery_page_downward.png) |
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

## 使用技術

| Category            | Technology                                           |
| ------------------- | --------------------------------------------------   |
| Frontend            | JavaScript, React, Vite                              |
| Backend             | Python, Django                                       |
| Infrastructure      | AWS (Amazon EC2, Route53)                     |
| Database            | PostgreSQL                                           |
| Virtual Environment | Docker                                               |
| Diagram             | Draw.io                                              |
| Version Control     | Git, GitHub                                          |

## システム構成図
![システム構成図](/docs/システム構成図.png)
<br />

## ER図
![ER図](/docs/ER図.png)

## 今後の展望
現在、画像をデータベースにアップロードする際にPillowライブラリを使って画像容量を一定の割合で圧縮しています。<br />
しかし、この方法ですと解像度の細かい画像だけでなく荒い画像までもが圧縮されてしまいます。<br />
そのためPillowについて詳しく調べながら、画像の容量を上手く圧縮する機能を実装したいと思っています。<br />
他にもまだまだ追加したい機能が多くあるので順次開発を進めていきたいと考えてます。
