# kishドキュメント

kishはkitのための強力なシェルです。

### kishをはじめる

リリース一覧からダウンロードし、kitディレクトリの`app`内またはkitディレクトリ外の任意の場所に配置してください。
- [リリース一覧](https://github.com/mtsgi/kish/releases)

kitのインストールウィザードからkishを配置したディレクトリのパスを入力してインストールしてください。

### オンラインアプリとして

kitのアプリインストーラーを使用することで、オンライン上のkishリポジトリをインストールすることができます。

`install`アプリを起動し、`https://mtsgi.github.io/kish/`をインストールします。

または、kitにバンドルされたkishがある場合、kishから下記のコマンドを実行することでオンラインのバージョンのkishをインストールすることも可能です。

```
install https://mtsgi.github.io/kish/
```

### Sightreから呼び出す

kitバージョンv0.2.1以降では、Sightreと呼ばれる検索ボックスにkishを呼び出す機能が統合されています。

`kish echo hello`または、`🥧 echo hello`のように、実行するkishコマンドの接頭辞として`kish`か`🥧`をつけることで起動することができます。

> Sightreから呼び出されるアプリは、`app/kish`ディレクトリ内のkishになります。
