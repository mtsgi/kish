# kpt
### 説明
kitパッケージ転送システム "**kpt**" を利用してパッケージ化されたkitアプリの検索やインストールなどを行います。


### 書式
```kish
kpt command appid version option
```
- `command` : 実行するkptコマンドの種類です。
  - `install` : 指定したアプリケーション(およびバージョン)をインストールします。
  - `search` : 指定したアプリケーション(およびバージョン)の情報を表示します。
  - `update` : kptからインストールされたアプリに対して更新を確認／実行します。appid以降の引数を必要としません。
  - `uninstall` : 指定したアプリケーション(指定されたバージョンのもの)をアンインストールします。
- `appid` : kptに登録されたアプリケーションIDです。
- `version` : バージョン名です。省略すると、最新バージョン(`latest`)を指します。
- `option` : 実行オプションです。
  - `-y` : ダイアログの確認をスキップしてインストールなどの実行を許可します。

詳細は https://kpkg.herokuapp.com/ を参照してください。
