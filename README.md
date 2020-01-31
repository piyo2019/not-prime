# not-prime について
- 「N予備校 Webアプリコンテスト 2019冬」（https://progedu.github.io/web-contests/webcontest2019-winter/　）の応募作品「素数じゃない数あつめ」のコードのリポジトリです。

- Chorome（Windows10のPC）でしか動作確認していません。表示も（自宅の）PC画面用です。

- 数を探すページ（/search）を読み込むたびに「素数じゃない数」をプログラムが勝手に探して集めていくだけのアプリです。

- 一定程度集まってきたら探す範囲を広げていきます。


# cloneの注意事項 
- Node.js と Pug がインストールしてある必要があります。clone 後，yarn install もしてください。

- もっと適切な＆スッキリとしたコードの書き方があるんだろうな，とは思うのですが，時間と実力の不足でこんな感じです…。
 
# メモ
- 最大公約数を調べて「素数じゃない」判定をしています。最大公約数はユークリッドの互除法を利用して求めています。この方法では「1」は入らないので，1は最初に入れておきました。

- 集めた数は npMapFile.json に書き込まれます。ファイルの中身の初期値は`[[1,1]]`にしましたが，`[]`ではじめても`[1,1]`は自動的に入ります。

- lib/util.jsにある変数max，kosuu，dを変えると，とってくる数の最大値，個数，最大値の増加幅が変わります。