#MEMO.mdについて

## 元になってるコード

3-17の練習問題用にクローン→修正したリポジトリ
intro-curriculum-3017
（C:\Users\yuko\vagrant\ubuntu64_18\workspace\intro-curriculum-3017）
がベースになっている。


- yarn.lock，gitフォルダと.gitignore，node_modulesフォルダ，Procfileは削除

- node_modulesフォルダとyarn.lockはたぶんyarn installで作られる

- PeocfileはできあがってHerokuに公開するときに作る必要がある（はず）


https://www.softel.co.jp/blogs/tech/archives/4596

- gcd.js，randomNumbersGet.jsはWindowsのほうのworkspace/mathにあるもの（ちょっと変えるかも）

- app.json（説明のファイル）はintro-curricurum-3031のpackage.jsonも参考にした

- 3025, 3026のも参考になりそう。

## 方針とか

- 認証は省略

- ユーザーが文字列を入力することはないようにする（脆弱性対策を省略しても大丈夫なように）

- 数字を出す，調べる，もう1回する，集めた数をみる ，説明（素数じゃない判定について）みたいなボタン→ページが変わる

## 注意すること
- npMapFile.json が空だと「読み込めませんでした」エラーになる。[] だけいれておくか，要素を1つ（[1,1]とか）入れておくとよさそう。

## エラーとか

yarn install しようとしたらエラー。yarn.lockファイルができない・・・

```
vagrant@ubuntu-bionic:~/workspace/_wac2019-w/not-prime$ yarn install
yarn install v1.13.0
info No lockfile found.
[1/5] Validating package.json...
[2/5] Resolving packages...
warning pug > pug-code-gen > constantinople > babel-types > babel-runtime > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
[3/5] Fetching packages...
[4/5] Linking dependencies...
error An unexpected error occurred: "EPROTO: protocol error, symlink '../../../acorn/bin/acorn' -> '/home/vagrant/workspace/_wac2019-w/not-prime/node_modules/acorn-globals/node_modules/.bin/acorn'".
info If you think this is a bug, please open a bug report with the information provided in "/home/vagrant/workspace/_wac2019-w/not-prime/yarn-error.log".
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.

```
yarn-error.logを見ると

> Trace: 
>   Error: EPROTO: protocol error, symlink '../../../acorn/bin/acorn' -> '/home/vagrant/workspace/_wac2019-w/not-prime/node_modules/acorn-globals/node_modules/.bin/acorn'

らしい